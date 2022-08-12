


var card_arr = ["card_img1.jpeg","card_img2.jpg","card_img3.jpeg","card_img4.jpg","card_img5.png","card_img1.jpeg","card_img2.jpg","card_img3.jpeg","card_img4.jpg","card_img5.png"]

var card = document.getElementById("card"),
card_img = document.getElementById("card1_img"), 
img_var = Math.floor(Math.random()*card_arr.length)
card_img.src =  card_arr[img_var]
delete card_arr[img_var]
card.addEventListener("click",()=>{
card.style.width = "0px";
card.style.fontSize="0px";
card_img.style.width  = "0px";
card.style.margin = "0px 85px";
delete card_arr[img_var]
setTimeout(function(){
    card.style.width = "190px";
    card_img.style.width  = "190px";
    card.style.margin = "0px";
    
}, 1500);
})
var card2 = document.getElementById("card2"),
card_img2 = document.getElementById("card2_img"), 
img_var = Math.floor(Math.random()*card_arr.length)
card_img2.src =  card_arr[img_var]
console.log(card_img2)
delete card_arr[img_var]
card2.addEventListener("click",()=>{
card2.style.width = "0px";
card2.style.fontSize="0px";
card_img2.style.width  = "0px";
card2.style.margin="0px 85px";
setTimeout(function(){
    
    card2.style.width = "190px";
    card_img2.style.width  = "190px";
    card2.style.margin="0px";
    
}, 1500);
})
var card3 = document.getElementById("card3"),
card_img3 = document.getElementById("card3_img"), 
img_var = Math.floor(Math.random()*card_arr.length)
card_img3.src =  card_arr[img_var]
delete card_arr[img_var]
card3.addEventListener("click",()=>{
card3.style.width = "0px";
card3.style.fontSize="0px";
card3.style.margin="0px 85px";
card_img3.style.width  = "0px";
setTimeout(function(){
    card3.style.width = "190px";
    card_img3.style.width  = "190px";
    card3.style.margin="0px ";
    
}, 1500);
})
var card4 = document.getElementById("card4"),
card_img4 = document.getElementById("card4_img"), 
img_var = Math.floor(Math.random()*card_arr.length)
card_img4.src =  card_arr[img_var]
console.log(card_img2)
delete card_arr[img_var]
card4.addEventListener("click",()=>{
card4.style.width = "0px";
card4.style.fontSize="0px";
card_img4.style.width  = "0px";
card4.style.margin="0px 85px";
setTimeout(function(){
    
    card4.style.width = "190px";
    card_img4.style.width  = "190px";
    card4.style.margin="0px";
    
}, 1500);
})
var card5 = document.getElementById("card5"),
card_img5 = document.getElementById("card5_img"), 
img_var = Math.floor(Math.random()*card_arr.length)
card_img5.src =  card_arr[img_var]
console.log(card_img2)
delete card_arr[img_var]
card5.addEventListener("click",()=>{
card5.style.width = "0px";
card5.style.fontSize="0px";
card_img5.style.width  = "0px";
card5.style.margin="0px 85px";
setTimeout(function(){
    
    card5.style.width = "190px";
    card_img5.style.width  = "190px";
    card5.style.margin="0px";
    
}, 1500);
})



