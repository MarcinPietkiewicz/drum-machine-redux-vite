import "./DrumPad.css";
import { useState } from "react";
import { useAppSelector} from './app/hooks'


function DrumPad(props) {
  const [state, setState] = useState("inactive");
  const power = useAppSelector(state => state.power.value);
  const volume = useAppSelector(state => state.volume.value);

  function playSoundAndHighlight() {
    if (power === true) {
      const sound = document.getElementById(props.keyTrigger);
      highlightButton();
      updateDisplay(props.clipId);
      sound.currentTime = 0;
      sound.volume = volume;
      sound.play();
    }
  }

  function updateDisplay(soundName) {
    props.upDisplay(soundName);
  }

  function highlightButton() {
    setState("active");
    setTimeout(() => {
      setState("inactive");
    }, 150);
  }

  return (
    <div className={`drum-pad ${state}`} id={props.clipId} onClick={playSoundAndHighlight}>
      <audio className="clip" id={props.keyTrigger} src={props.clip} />
      {props.keyTrigger}
    </div>
  );
}

export default DrumPad;
