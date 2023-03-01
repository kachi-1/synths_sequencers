//Demo on youtube:  https://youtu.be/SZ4yn803VMg
const synth = new Tone.Synth();
let reverbVal = 0;
const reverb = new Tone.JCReverb(0.4);
synth.connect(reverb);
let dSlider;
let whichKey = " ";

let notes = {
  'a': 'C4',
  's': 'D4',
  'd': 'E4',
  'f': 'F4',
  'g': 'G4',
  'h': 'A4',
  'j': 'B4',
  'k': 'C5',
}

function setup() {
  createCanvas(400, 400);
  reverb.toDestination();
  
  dSlider = createSlider(0., 1., 0.5, 0.05);
  dSlider.mouseReleased( () => {
    reverb.roomSize.value=dSlider.value();
  })
}

function draw() {
  background(220);
  text('move slider to increase/decrease sound delay' ,0, 350);
  text('press keys from A-K on keyboard for sound' ,0, 150);
  text("Keyboard key played: " + whichKey,100, 200);
}

function keyPressed() {
  let pressedNote = notes[key];
  whichKey = key;
  console.log(pressedNote);
  synth.triggerAttackRelease(pressedNote, "8n");
}