let pbutton = document.getElementById("p-button");
let imgbutton = document.getElementById("img-button"); 
let pdiv = document.getElementById("p-div");
let imgdiv = document.getElementById("img-div");

pbutton.onclick = function(){
   let newp = document.createElement("p");
   pdiv.appendChild(newp);
   newp.innerHTML = ("The Hot chocolate is bad today");
    newp.style.backgroundColor = "black";
    newp.style.color = "white";
    imgdiv.style.display = "none";
    pdiv.style.display = "block";
   
}

imgbutton.onclick = function(){
    let newimg = document.createElement("img");
    imgdiv.appendChild(newimg); 
    newimg.src = "Pikachu_.png";
    newimg.style.width = "100px"
    newimg.style.height = "auto";
    imgdiv.style.display = "block";
    pdiv.style.display = "none";
}
