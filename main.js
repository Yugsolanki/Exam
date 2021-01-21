var optionBox = document.querySelector('#option');

function option() {
  var options = ["A", "B", "C", "D"];
  return options[Math.floor(Math.random() * options.length)];
}

function time() {
  //var sec = [3000,1000,2000,4000,5000]
  var sec = [30000, 45000, 60000, 90000, 120000]
  return sec[Math.floor(Math.random() * sec.length)];
    }
  
function sound() {
  var sound = new Howl({
    src: ['Assets/Music.webm', 'Assets/Music.mp3'],
    autoautoplay: true,
    loop: false,
    volume: 1,
    autoUnlock: true, 
    onplayerror: function() {
      sound.once('unlock', function() {
        sound.play();
      });
    },
  });
  sound.play();
  optionBox.textContent = option();
}

function play() {
  
var yug = time();
  console.table(yug);
  setTimeout(sound, yug);
}
