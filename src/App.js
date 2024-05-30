
import './App.css';
import { useState } from 'react';
const App = () => {
  const [volume, setVolume] = useState(0);
  const [text, setText] = useState("Heater");
  const drumSound = [
    "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
  ];
  const Title = [
    "Heater 1",
    "Heater 2",
    "Heater 3",
    "Heater 4",
    "Clap",
    "Open-HH",
    "Kick-n'-Hat",
    "Kick",
    "Closed-HH"
  ];

  let currentAudio;

  function playAudio(audioUrl, index) {
    setText(Title[index]);
    if (currentAudio) {
      currentAudio.pause(); // Pause the currently playing audio, if any
    }
    currentAudio = new Audio(audioUrl); // Create a new audio element
    currentAudio.play(); // Play the new audio
  }

  
  
  function handleVolumeChange(event) {
    const newVolume = event.target.value;
    setVolume(newVolume);
    if (currentAudio) {
      currentAudio.volume = newVolume;
    }
  }

  return (
    <main id="container">
      <i class="fa-solid fa-drum" id="drum"></i>
      <h1>Drum Machine</h1>
      <div id="drum-machine">
        <div className="drum-pad">
          <div>
            <button onClick={() => playAudio(drumSound[0], 0)} id="pad-1">
              Q
            </button>
            <button onClick={() => playAudio(drumSound[1], 1)} id="pad-2">
              W
            </button>
            <button onClick={() => playAudio(drumSound[2], 2)} id="pad-3">
              E
            </button>
          </div>
          <div>
            <button onClick={() => playAudio(drumSound[3], 3)} id="pad-4">
              A
            </button>
            <button onClick={() => playAudio(drumSound[4], 4)} id="pad-5">
              S
            </button>
            <button onClick={() => playAudio(drumSound[5], 5)} id="pad-6">
              D
            </button>
          </div>
          <div>
            <button onClick={() => playAudio(drumSound[6], 6)} id="pad-7">
              Z
            </button>
            <button onClick={() => playAudio(drumSound[7], 7)} id="pad-8">
              X
            </button>
            <button onClick={() => playAudio(drumSound[8], 8)} id="pad-9">
              C
            </button>
          </div>
          <div id="text">
            <h3>{text}</h3>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
        <div id="display"></div>
      </div>
    </main>
  );
};
export default App;
