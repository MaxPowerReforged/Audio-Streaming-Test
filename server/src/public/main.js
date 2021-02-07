var socket = io();

var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});

socket.on('chat message', function (msg) {
  var item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

//cutre separacion

async function playAudioFromCamera() {
  try {
    const constraints = { video: false, audio: true };
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    const audioElement = document.getElementById('audioPlayer');
    audioElement.srcObject = stream;
  } catch (error) {
    console.error('Error opening audio.', error);
  }
}

async function playAudioFromMic() {
  try {
    const constraints = { video: false, audio: true };
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    const audioElement = document.getElementById('audio-player');
    audioElement.srcObject = stream;
  } catch (error) {
    console.error('Error opening audio mic.', error);
  }
}

playAudioFromMic();
