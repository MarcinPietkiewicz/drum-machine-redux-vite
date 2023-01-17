import { useEffect, useRef } from "react";
import "./App.css";
import {useAppDispatch, useAppSelector} from './app/hooks';
import {togglePower} from './features/power/power-slice';
import {setVolume} from './features/volume/volume-slice';
import {updateDisplay} from './features/display/display-slice';
import DrumBox from "./DrumBox";
import Display from "./Display";
import PowerButton from "./PowerButton";
import VolumeControl from "./VolumeControl";

function App() {

  const power = useAppSelector(state => state.power.value);
  const volume = useAppSelector(state => state.volume.value);
  const dispatch = useAppDispatch();
  const timerRef = useRef(null);

  useEffect(() => {
    updateDisplayAndCheckTimer("Click power button to start", 4000);
  }, []);

  function setPower() {
    let text = "";
    if (power === false) {
      text = "Hello";
    } else text = "Goodbye";
    dispatch(togglePower());
    updateDisplayAndCheckTimer(text);
  }


  const updateDisplayAndCheckTimer = (text, time = 1000) => {
    if (timerRef.current == null) {
      setDisplayTimer(text, time);
    } else {
      clearTimeout(timerRef.current);
      setDisplayTimer(text, time);
    }
  };

  const updateVolume = (volume, volumeText) => {
    dispatch(setVolume(volume))
    if (power === true) {
      updateDisplayAndCheckTimer(volumeText);
    }
  };

  function setDisplayTimer(text, time = 1000) {
    dispatch(updateDisplay(text))
    timerRef.current = setTimeout(() => {
      dispatch(updateDisplay(""))
    }, time);
  }

  return (
    <div id="center-container">
      <div className="glow" id="drum-machine">
        <div id="header">Drum Machine Redux</div>
        <DrumBox upDisplay={updateDisplayAndCheckTimer} />
        <Display />
        <VolumeControl volume={volume} updateVolume={updateVolume} />
        <PowerButton powerSwitch={setPower} />
      </div>
    </div>
  );
}

export default App;
