window.onscroll = function(){myFun()}
var banner=document.getElementById("banner")
var container=document.getElementById("container")
var nav=document.getElementById("nav");

function myFun(){
    if(window.pageYOffset > (banner.offsetHeight)-1){
        var d=nav.offsetHeight;
        container.style.setProperty('margin-top',d+'px');
        nav.classList.add("fixed");
    }
    else if(window.pageYOffset <= (banner.offsetHeight)){
        nav.classList.remove("fixed");
        container.style.setProperty('margin-top','0px');
    }
}

// 

var vowel=['অ','আ','ই','ঈ','উ','ঊ','ঋ','এ','ঐ','ও','ঔ']; 
var color=['green','red','orange','blue','cyan','magenta','lime','aqua','chocolate','maroon','purple'];
var col_index=0;
var data_array=[];
vowel.forEach(element => {
    const data=document.createElement('img');
    data.src="image/"+element+".png";
    const audio=document.createElement("audio");
    audio.src="audio/"+ element + ".mp3";
    data_array.push(audio);
    document.getElementById("content").appendChild(data);
    document.getElementById("content").appendChild(audio);
    data.addEventListener("click",()=>{
        data_array.forEach(i=>{
            i.pause();
            i.currentTime=0;
        },1)
        audio.play();
    },5);
});

