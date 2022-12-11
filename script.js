const playHtml = '<i class="fas fa-play"></i>';
const pauseHtml = '<i class="fas fa-pause"></i>';
const muteHTML = '<i class="fas fa-volume-mute"></i>';
const non_muteHtml = '<i class="fas fa-volume-off"></i>';
const loopHtml = '<i class="fas fa-undo"></i>';
const non_loopHtml = '<i class="fas fa-times"></i>';
const path =
  "C:/Users/Rasm1/OneDrive/Documentos/Vs CODE/Practicas WEB DESIGN/Music Player Neon/Media/";
const pathServer = "./media/"; //http://127.0.0.1:5500
const list = [
  {
    Title: "Vaporwave Dimension",
    Artist: "Reve Lucide",
    Album: "TerminalMonatage",
    Src: "Dimension LUNE.mp3",
  },
  {
    Title: "Midnight City",
    Artist: "M83",
    Album: "Midnight City",
    Src: "M83.mp3",
  },
  {
    Title: "Otherside",
    Artist: "Red Hot Chilli Pepper",
    Album: "Californication",
    Src: "Otherside.mp3",
  },
  {
    Title: "Shadowtask",
    Artist: "PYLOT",
    Album: "Shadowtask",
    Src: "Shadowtask.mp3",
  },
  {
    Title: "Zombie",
    Artist: "The Cranberries",
    Album: "No Need to Argue",
    Src: "Zombie.mp3",
  },
  {
    Title: "Rasputin",
    Artist: "Boney M",
    Album: "Nightflight to Venus",
    Src: "Rasputin.mp3",
  }
];
const Clip = document.querySelector("#Audio");
const Name_Tag = document.querySelector("#Name_Song");
const Artist_Tag = document.querySelector("#Artist_Song");
const Album_Tag = document.querySelector("#Album_Song");
const Play_Pause = document.querySelector("#Play-Pause");
const MuteButton = document.querySelector("#Mute");
const LoopButton = document.querySelector("#Loop");
const CurrentTimeTag = document.querySelector('#CurrentTimeClip');
const DurationTag = document.querySelector("#DurationClip");
const SliderTag = document.querySelector('#Slider');
let pointer = 0;
let IsItPlay = false;
function PlayClip() {
  if (Clip.src === null || Name_Tag.innerHTML != list[pointer].Title) {
    Play_Pause.innerHTML = pauseHtml;
    Clip.src = pathServer + list[pointer].Src;
    Artist_Tag.innerHTML = list[pointer].Artist;
    Album_Tag.innerHTML = list[pointer].Album;
    Name_Tag.innerHTML = list[pointer].Title;
  }
  Clip.play();
  setInterval(() => {
    Duration(Clip);
    CurrentTime(Clip);
    SliderValue(1,Clip.duration,Clip.currentTime);
  }, 1000);
  IsItPlay = true;
}
function PauseClip() {
  Play_Pause.innerHTML = playHtml;
  Clip.pause();
  IsItPlay = false;
}
function Prev() {
  if (pointer <= 0) {
    pointer = list.length - 1;
  } else {
    pointer--;
  }
  PlayClip();
}
function Now() {
  if (IsItPlay) {
    PauseClip();
  } else {
    PlayClip();
  }
}
function Next() {
  if (pointer >= list.length - 1) {
    pointer = 0;
  } else {
    pointer++;
  }
  PlayClip();
}
function Mute() {
  if (Clip.muted) {
    MuteButton.innerHTML = muteHTML;
    Clip.muted = false;
  } else {
    MuteButton.innerHTML = non_muteHtml;
    Clip.muted = true;
  }
}
function Loop() {
  if (Clip.loop) {
    LoopButton.innerHTML = non_loopHtml;
    Clip.loop = false;
  } else {
    LoopButton.innerHTML = loopHtml;
    Clip.loop = true;
  }
}
function Duration(AudioClip){
  let min = Math.floor(AudioClip.duration/60);
  let sec =(Math.floor(AudioClip.duration%60)) ; 
  DurationTag.innerHTML = (formaterTime(min) + ':'+formaterTime(sec));
}
function CurrentTime(AudioClip){
  let min=0 ;
  let sec = Math.round(AudioClip.currentTime);
  if(sec>=60){
    min=Math.floor(sec/60);
    sec = Math.floor(sec%60);
    CurrentTimeTag.innerHTML = formaterTime(min)+':'+formaterTime(sec);
  }else{
    CurrentTimeTag.innerHTML = formaterTime(min)+':'+formaterTime(sec);
  }
}
function formaterTime(time){
  if(time<=10){
    return '0'+time;
  }else{
    return time;
  }
}
function SliderValue(min,max,value){
  SliderTag.min =min;
  SliderTag.max =max;
  SliderTag.value = value;
}
function setSliderValue(value){
  Clip.currentTime = value;
  
}