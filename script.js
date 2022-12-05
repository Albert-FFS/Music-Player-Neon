const playHtml = '<i class="fas fa-play"></i>';
const pauseHtml ='<i class="fas fa-pause"></i>';
const path = 'C:/Users/Rasm1/OneDrive/Documentos/Vs CODE/Practicas WEB DESIGN/Music Player Neon/Media/';
const pathServer = 'http://127.0.0.1:5500/media/';
const list = [
  {
    Title:'Vaporwave Dimension',
    Artist:'Reve Lucide',
    Album:'TerminalMonatage',
    Src:'Dimension LUNE.mp3'
  },
  {
    Title:'Midnight City',
    Artist:'M83',
    Album:'Midnight City',
    Src:'M83.mp3'
  },
  {
    Title:'Otherside',
    Artist:'Red Hot Chilli Pepper',
    Album:'Californication',
    Src:'Otherside.mp3'
  },
  {
    Title:'Shadowtask',
    Artist:'PYLOT',
    Album:'Shadowtask',
    Src:'Shadowtask.mp3'
  },
  {
    Title:'Zombie',
    Artist:'The Cranberries',
    Album:'No Need to Argue',
    Src:'Zombie.mp3'
  }
];
const Clip = document.querySelector('#Audio');
const Name_Tag = document.querySelector('#Name_Song');
const Artist_Tag = document.querySelector('#Artist_Song');
const Album_Tag = document.querySelector('#Album_Song');
const Play_Pause = document.querySelector('#Play-Pause');
const pointer = 0;
let IsItPlay = false;
function PlayClip(){
  console.log('Play');
  Play_Pause.innerHTML = pauseHtml;
  Clip.src = pathServer + list[pointer].Src ;
  Clip.play();
  IsItPlay = true;
}
function PauseClip(){
  console.log('Pause');
  Play_Pause.innerHTML = playHtml;
  Clip.pause();
  IsItPlay = false;
}
function Prev(){

}
function Now(){
  if(IsItPlay){
    PauseClip();
  }else{
    PlayClip();
  }
}
function Next(){

}
function Mute(){

}
function Loop(){

}