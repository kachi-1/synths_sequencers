const synth = new Tone.Synth();

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
  synth.toDestination();
 
}

function draw() {
  background(220);
}

function keyPressed() {
  let pressedNote = notes[key];
  console.log(pressedNote);
  synth.triggerAttackRelease(pressedNote, "8n");
}