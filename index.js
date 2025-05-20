window.addEventListener('load',function(){
  setTimeout(firstLoad,7000)
 document.getElementById("home").style.removeProperty("display")
  document.getElementById("body").style.backgroundColor="black"
  document.getElementById("montlyCartoonDiv-btn").style.removeProperty("display")
  document.getElementById("enaivocDescriptionDiv-btn").style.removeProperty("display")
  document.getElementById("home-btn").style.display="none";
  document.getElementById("enaivocDescription-videoDiv").style.display="none"
  document.getElementById("montlyCartoon-videoDiv").style.display="none"
});
document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('loaded');
});
function firstLoad(){
  document.getElementById("home-btn").style.display="none"
}
if(window.location.search.includes('runFunction=true')){
   lessonMenu();
}
 function transition() {
  const div = document.getElementById('home');
  div.classList.add('hidden');
  setTimeout(function transition() {
    div.style.display = 'none';
  }, 3000); // 2000ms = 2s
}
function playEnaivocDescriptionVideo(){
  document.getElementById("enaivocDescription-video").style.visibility="visible"
  document.getElementById("montlyCartoon-videoDiv").style.display="none"
  setTimeout(()=>{
    document.getElementById("home-btn").style.display="block";
  },1000)
  
  document.getElementById("montlyCartoonDiv-btn").style.visibility="visible"
  document.getElementById("montlyCartoonDiv-btn").style.removeProperty("display")
  let Video=document.getElementById("intro-video")
  document.getElementById("home").style.display="none"
  document.getElementById("enaivocDescription-videoDiv").style.removeProperty("display")
  document.getElementById("body").style.backgroundColor="black"
  document.getElementById("videoplay-btn").style.display="none"
  document.getElementById("video-pause").style.removeProperty("display")
}
function playMontlyCartoonVideo(){
  document.getElementById("montlyCartoon-video").style.visibility="visible"
  document.getElementById("enaivocDescription-videoDiv").style.display="none"
  setTimeout(()=>{
    document.getElementById("home-btn").style.display="block";
  },1000)
  document.getElementById("enaivocDescriptionDiv-btn").style.visibility="visible"
  document.getElementById("enaivocDescriptionDiv-btn").style.removeProperty("display")
  document.getElementById("home").style.display="none"
  document.getElementById("montlyCartoon-videoDiv").style.removeProperty("display")
  document.getElementById("body").style.backgroundColor="black"
}
function ClickEnaivocDescriptionDiv(){
  document.getElementById("enaivocDescriptionDiv-btn").style.visibility="visible"
  document.getElementById("montlyCartoonDiv").style.opacity = "1";
  document.getElementById("montlyCartoonDiv").style.width="60%"
  document.getElementById("montlyCartoonDiv").style.height="110px"
  document.getElementById("enaivocDescriptionDiv").style.width="95%"
  document.getElementById("enaivocDescriptionDiv").style.height="170px"
  document.getElementById("enaivocDescriptionDiv").style.opacity = "1.0";
  document.getElementById("montlyCartoonDiv-btn").style.visibility="visible"
  document.getElementById("home-btn").style.display="none"
  
}
function ClickMontlyCartoonDiv(){
  document.getElementById("montlyCartoonDiv-btn").style.visibility="visible"
  document.getElementById("montlyCartoonDiv").style.opacity = "1.0";
  document.getElementById("montlyCartoonDiv").style.width="95%"
  document.getElementById("montlyCartoonDiv").style.height="170px"
  document.getElementById("enaivocDescriptionDiv").style.width="60%"
  document.getElementById("enaivocDescriptionDiv").style.height="110px"
  document.getElementById("enaivocDescriptionDiv").style.opacity = "1";
}
function Home(){
  const div = document.getElementById('home');
  div.style.display = 'block'; // or the original display value
  setTimeout(function() {
    div.classList.remove('hidden');
  }, 10); // small delay to ensure display is set before transitioning
  document.getElementById("body").style.backgroundColor="black"
  document.getElementById("montlyCartoonDiv-btn").style.removeProperty("display")
  document.getElementById("enaivocDescriptionDiv-btn").style.removeProperty("display")
  document.getElementById("home-btn").style.display="none"
  document.getElementById("enaivocDescription-videoDiv").style.display="none"
  document.getElementById("montlyCartoon-videoDiv").style.display="none"
  document.getElementById("montlyCartoonDiv").style.width="80%"
  document.getElementById("montlyCartoonDiv").style.height="145px"
  document.getElementById("enaivocDescriptionDiv").style.width="80%"
  document.getElementById("enaivocDescriptionDiv").style.height="145px"
}
function lessonMenu(){
  document.getElementById("lesson-menu").style.visibility="visible"
  document.getElementById("lesson-menu").style.position="absolute"
  document.getElementById("lesson-menu").style.top="90px";
  document.getElementById("lesson-menu").style.left="0%";
  document.getElementById("home-page").style.visibility="hidden"
  document.getElementById("enaivocDescriptionDiv-btn").style.visibility="hidden"
  document.getElementById("montlyCartoonDiv-btn").style.visibility="hidden"
}
$("#start-piano").click(() => {
  let selectedOption= $("select#dropdown-menu").find(":selected");
  let dataDescription = selectedOption.attr("data-description");
  localStorage.setItem("selectedSongDescription",dataDescription);
let songSelect = $("select#dropdown-menu").val();
localStorage.setItem("selectedSong", songSelect);
window.location.href = "Piano.html";
});
