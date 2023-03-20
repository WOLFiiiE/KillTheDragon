alert("Javascript working!")

//NAVIGATION FUNCTIONS

function nextPt(next,prev) {

    var x = document.getElementById(next);
    x.style.display = "flex";

    var y = document.getElementById(prev);
    y.style.display = "none";

    if(prev=="pt01")
    {
        var btn = document.getElementById("imageFill");
        var bgSong = document.getElementById("themeSong");

        if(bgSong.paused) {
            bgSong.play();
            btn.src="soundOn.png";
        }
    }

    if(prev=='pt02')
    {
        var z = document.getElementById('nav01');
         z.style.display = "flex";   
    }

    if(next==='pg03')
    {
        //SONG CHANGE

        var z = document.getElementById("themeSong");
        z.src="lastSong.mp3";
        
        var x = document.getElementById("imageFill");
        x.src="soundOn.png"

        z.play();

        //CLOCK

        setInterval(clock, 1000);
    }

};

//SOUND ON/OFF

function soundControl() {

    var x = document.getElementById("imageFill");
    var song = document.getElementById("themeSong");
    var btn=document.getElementById("soundButton");

    if (song.paused) {
        song.play();
        x.src="soundOn.png"
    }
    else {
        song.pause();
        x.src="soundOff.png"
    }
}

//TIME SHOW/HIDE

// Where el is the DOM element you'd like to test for visibility
var hidden=true;
Boolean(hidden);

function timeControl() {

    var x = document.getElementById("imageFill02");  
    var clck = document.getElementById("clock"); 

    if (hidden) {
        clck.style.visibility="visible";
        x.src="showTime.png";
        hidden=0;
    }
    else {
        clck.style.visibility="hidden";
        x.src="hideTime.png";
        hidden=1;
    }
}

//CLOCK

var seconds=0;
var minutes=0;
var hours=0;

function clock() {

    //initilising
    var sec=document.getElementById("second");
    if(seconds<10) {
        sec.innerHTML ="0"+seconds;
    }
    else {
        sec.innerHTML =seconds;
    }

    var min=document.getElementById("minute");
    if(minutes<10) {
        min.innerHTML ="0"+minutes;
    }
    else {
        min.innerHTML =minutes;
    }

    var hr=document.getElementById("hour");
    if(hours<10) {
        hr.innerHTML ="0"+hours;
    }
    else {
        hr.innerHTML =hours;
    }

    seconds++;

    if (seconds==60) {
        seconds=0;
        minutes++;
    }

    if (minutes==60) {
        minute=0;
        hours++;
    }
}