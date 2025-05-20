document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('loaded');
});
/* Pushes the key id's into the notes array, making all piano key divs available to notes array */
const style=document.createElement('style');
style.innerHTML='#lesson-menu{visibility: visible;}';
  document.head.appendChild(style);
const keys = [
  "c-key",
  "csharp-key",
  "d-key",
  "dsharp-key",
  "e-key",
  "f-key",
  "fsharp-key",
  "g-key",
  "gsharp-key",
  "a-key",
  "asharp-key",
  "b-key",
  "chigh-key",
  "csharphigh-key",
  "dhigh-key",
  "dsharphigh-key",
  "ehigh-key",
  "fhigh-key",
  "fsharphigh-key",
  "ghigh-key",
  "gsharphigh-key",
  "ahigh-key",
  "asharphigh-key",
  "bhigh-key"
];

const notes = [];

keys.forEach(key => {
  notes.push(document.getElementById(key));
});

/* Sets a delay before the pressed note disapears from the display in #notebox */
let timerNote;
const timerNoteDelay = () => {
  clearTimeout(timerNote);
  timerNote = setTimeout(() => {
    $("#notebox").html(" ");
  }, 1500);
};

/* Stops note audio playing on repeated key presses of the same key */
const stopAudio = audio => {
  audio.pause();
  audio.currentTime = 0;
};

/* Events triggered on a key being pressed */
const keyDown = key => {
  let playAudio = key.target.getAttribute("data-sound"); // assigns the data-sound attribute of the pressed key to playAudio
  let targetPlayAudio = document.getElementById(playAudio); // matches the data-sound info the ID of the audio track
  stopAudio(targetPlayAudio); // resets audio track if pressed before audio finished
  targetPlayAudio.play(); // plays audio on keypress
  key.target.setAttribute(
    "style",
    "background-color: #ffee1c; border: #aac900; border-width: 2px; border-style: inset"
  ); // indicates key has been pressed visually
  $("#notebox").html(key.target.getAttribute("data-note")); // fetch and pass note displayed in notebox above piano
};

/* Events triggered on a key being released */
const keyUp = key => {
  key.target.setAttribute("style", "background-color: ; border: ");
  timerNoteDelay();
};

/* Assigns the keyDown and keyUp variables to pointer events and tutorDemo and makes them available to all piano keys. keyPress uses pointer instead of mouse to allow multi-finger input on touchscreen laptops */
const keyPress = note => {
  note.onpointerdown = () => {
    keyDown(event);
  };
  note.onpointerup = () => {
    keyUp(event);
  };
  note.onpointerleave = () => {
    keyUp(event);
  };
};

/* Makes the keyPress variable available to all the key divs that were pushed to the notes array */
notes.forEach(keyPress);

/*Starts the tutorDemo function on press of the 'Go' button. Disables the 'Go' button for 4 seconds to prevent additional presses*/

let startTutorButton;
$(document).ready(() => {
  let selectedSongDescription= localStorage.getItem("selectedSongDescription");
  let iframeSource = $("#illumineLesson");
  console.log('iframeSource:',iframeSource);
  iframeSource.attr("src",selectedSongDescription);
  startTutorButton=$("#startTutor");
  startTutorButton.click(function() {
     startTutorButton.hide();
     tutorDemo(function(){
       startTutorButton.show()
     });
  });
});
function tutorDemo(callback){
  document.documentElement.click();
  const keyObject = {};
  const speed = $("select#speed-select").val();
  const barLength = $("select#bar-select").val() * 2;
  const storageVar = window.localStorage.getItem("selectedSong");
  const order = JSON.parse(storageVar);
  let lastNote = order.length-1;
  let lastNoteFinished = false;
  order.forEach((note) => {
    const audioId = document.getElementById(note.note).getAttribute("data-sound");
    const audio = document.getElementById(audioId);
    audio.load();
    audio.play().then(() => {
      audio.pause();
      audio.currentTime=0;
    });
  });
  setTimeout(() => {
  for (let i = 0; i < order.length; i++) {
    const barLengthCorrected = barLength + i - order[i].time;
    const correctTiming = Math.round(order[i].time * speed*10)/10;
    if (i >= barLengthCorrected) {
      break;
    }
    ((i) => {
      setTimeout(() => {
       const keyId = document.getElementById(order[i].note);
        keyObject.target = keyId;
        const playAudio = keyId.getAttribute("data-sound");
        keyDown(keyObject);
        document.getElementById(playAudio).play();

          setTimeout(() => {
            keyUp(keyObject);
          }, speed / 2.5);

        keyDown(keyObject);
        if(i===lastNote){
            lastNoteFinished = true;
            callback();
        }
      }, correctTiming);
    })(i);
  }
  },100);
}

function toggleFullscreen() {
  $(document).toggleFullScreen();
}

$("#fullscreen-button").click(toggleFullscreen);
$("#help-button").click(() => {
  $("#modal").show();
});

$("#close-modal").click(() => {
  $("#modal").hide();
});
$('#start-quiz').click(function(){
  $(this).text('Coming Soon');
});

