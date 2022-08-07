var audio = new Audio('JWDTheme.mp3');
    audio.play();

var card = document.getElementById("card")
card.addEventListener("click",()=>{
card.style.width = "0px";
card.style.fontSize="0px";
setTimeout(function(){
    card.style.width = "190px";
    
}, 1500);

})


var dino = document.getElementById("dino_img1"),
 dino2 = document.getElementById("dino_img2"),
 dino3 = document.getElementById("dino_img3"),
 dino_check=[dino,dino2,dino3],dino_swap=-1,dino_swap2=0;

 interval = 10000
    setInterval(() => {
        if (dino_swap==2){
            dino_swap=0
        }
        else{
            dino_swap+=1
        }
        if (dino_swap2==2){
            dino_swap2=0
        }
        else{
            dino_swap2+=1
        }

        dino_check[dino_swap].classList.toggle("close")
        dino_check[dino_swap2].classList.toggle("open")
    }, interval);