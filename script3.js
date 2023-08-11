// favourite hero page 

// get favourites heros id 
var arr=JSON.parse(localStorage.getItem("favourites"));


// function for show heros full details 
function showDetails(idnumber) {
    localStorage.setItem("id", idnumber);
    window.location = "hero_details.html";
}


// function for remove hero from favourites
function removeHero(id) {
    var index=arr.indexOf(id);
    console.log(index);
    arr.splice(index,1);
    console.log(arr);
    localStorage.setItem("favourites",JSON.stringify(arr));
    alert("your hero remove successfulled");
    location.reload();
    alert("your hero remove successfulled");
}


//function for show all favourites heros 
let html="";
function fetchData(){
    for (let i = 0; i < arr.length; i++) {
        fetch(`https://www.superheroapi.com/api.php/586069776286026/${arr[i]}`)
            .then((response) => response.json())
            .then((data) => {
            html+=     `
                <div class="card" style="width: 18rem;">
                  <img onclick="showDetails(${arr[i]})" class="card-img-top" src="${data.image.url}">
                  <div class="card-body">
                      <h5 class="card-title"  onclick="showDetails(${arr[i]})">${data.name}</h5>
                      <span><i class="fa sharp fa-solid fa-trash icon" onclick="removeHero(${arr[i]})"></i></span>
                  </div>
                </div>
                    `;      
            });
    };
};

//set timeout function 
setTimeout(() => {
    document.getElementById("fv-main").innerHTML=html;
}, 1000);
    