let x = Math.random();
let random = Math.floor((x * 6) + 1);
let randice = "dice" + random + ".png";
let psource = "c:/Users/Krishna/Desktop/MERN/" + randice;  

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", psource);


