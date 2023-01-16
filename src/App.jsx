import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import DrumBox from "./DrumBox";
import Display from "./Display";
import PowerButton from "./PowerButton";
import VolumeControl from "./VolumeControl";

function App() {
  const [display, setDisplay] = useState("");
  const [power, setPower] = useState(false);
  const [volume, setVolume] = useState(1);
  const timerRef = useRef(null);
  useEffect(() => {
    updateDisplay("Click power button to start", 4000);
  }, []);

  function togglePower() {
    let text = "";
    if (power === false) {
      text = "Hello";
    } else text = "Goodbye";
    setPower(!power);
    updateDisplay(text);
  }

  const updateDisplay = (text, time = 1000) => {
    if (timerRef.current == null) {
      setDisplayTimer(text, time);
    } else {
      clearTimeout(timerRef.current);
      setDisplayTimer(text, time);
    }
  };

  const updateVolume = (volume, volumeText) => {
    setVolume(volume);
    if (power === true) {
      updateDisplay(volumeText);
    }
  };

  function setDisplayTimer(text, time = 1000) {
    setDisplay(text);
    timerRef.current = setTimeout(() => {
      setDisplay("");
    }, time);
  }

  return (
    <div id="center-container">
      <div className="glow" id="drum-machine">
        <div id="header">Drum Machine Redux</div>
        <DrumBox upDisplay={updateDisplay} power={power} volume={volume} />
        <Display display={display} />
        <VolumeControl volume={volume} updateVolume={updateVolume} />
        <PowerButton powerSwitch={togglePower} />
      </div>
    </div>
  );
}

export default App;
