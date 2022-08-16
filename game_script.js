
var card_arr = ["card_img1.jpeg","card_img2.jpg","card_img3.jpeg","card_img4.jpg","card_img5.png","card_img1.jpeg","card_img2.jpg","card_img3.jpeg","card_img4.jpg","card_img5.png"],
main = document.getElementById("main")
card = document.getElementById("card"),
 card2 = document.getElementById("card2"),
 card3 = document.getElementById("card3"),
 card4 = document.getElementById("card4"),
 card5 = document.getElementById("card5"),
 card6 = document.getElementById("card6"),
 card7 = document.getElementById("card7"),
 card8 = document.getElementById("card8"),
 card9 = document.getElementById("card9"),
 card10 = document.getElementById("card10"),
card_img = document.getElementById("card1_img"), 
card_img2 = document.getElementById("card2_img"),
card_img3 = document.getElementById("card3_img"),
card_img4 = document.getElementById("card4_img"),
card_img5 = document.getElementById("card5_img"), 
card_img6 = document.getElementById("card6_img"), 
card_img7 = document.getElementById("card7_img"), 
card_img8 = document.getElementById("card8_img"), 
card_img9 = document.getElementById("card9_img"), 
card_img10 = document.getElementById("card10_img"), 
img_var = Math.floor(Math.random()*card_arr.length),
id_arr = [card,card2,card3,card4,card5,card6,card7,card8,card9,card10],
img_arr = [card_img,card_img2,card_img3,card_img4,card_img5,card_img6,card_img7,card_img8,card_img9,card_img10],
check_arr = [],img_check=[]
for (let i = 0;i<=9;i++){
    img_var = Math.floor(Math.random()*card_arr.length)
    img_arr[i].src = card_arr[img_var]
    card_arr.splice(img_var,1)
    id_arr[i].addEventListener("click",hello = ()=>{
        check_arr.push(id_arr[i])
        img_check.push(img_arr[i])
        id_arr[i].style.width = "0px";
        id_arr[i].style.fontSize="0px";   
        id_arr[i].style.margin = "0px 85px";
        img_arr[i].style.width  = "0px";
        setTimeout(function(){
            id_arr[i].style.width = "190px";
            id_arr[i].style.margin = "0px";
            img_arr[i].style.width  = "190px";
    
            if(check_arr.length >= 2 && img_check[0].src == img_check[1].src){
                check_arr[0].style.borderColor = "green";
                check_arr[1].style.borderColor = "green";
        setTimeout(function(){
            check_arr[0].style.opacity = "0";
            check_arr[1].style.opacity = "0";
            check_arr[0].style.cursor = "auto";
            check_arr[1].style.cursor = "auto";
            check_arr = [];
            img_check = [];
        }, 2000);
            }
            else if(check_arr.length >= 2){
                check_arr[0].style.borderColor = "red";
                check_arr[1].style.borderColor = "red";
                setTimeout(function(){
                check_arr[0].style.borderColor = "gold";
                check_arr[1].style.borderColor = "gold";
                img_check[0].style.width = "0px";
                img_check[1].style.width = "0px";
                check_arr[0].style.fontSize="50px";
                check_arr[1].style.fontSize="50px";
                check_arr = [];
                img_check = [];
            }, 2000);
            }
        
        }, 1500);
        })
}