import pwrSound from "./assets/button.mp3";
import pwrIcon from "./assets/pwr.svg";

function PowerButton(props) {
  const audio = new Audio(pwrSound);

  function powerUpDrumBox() {
    let lights = document.getElementById("drum-machine");
    let button = document.getElementById("power-button");
    let buttonIcon = document.getElementById("power-icon");
    let title = document.getElementById("header");
    audio.play();
    if (button.classList.contains("power-on")) {
      lights.className = "glow";
      button.className = "power-off";
      buttonIcon.className = "";
      title.className = "";
      props.powerSwitch();
    } else {
      lights.className = "glow anim-start";
      button.className = "power-on";
      buttonIcon.className = "power-icon-on";
      title.className = "active-logo";
      props.powerSwitch();
    }
  }

  return (
    <button id="power-button" className="power-off" onClick={powerUpDrumBox}>
      <img id="power-icon" src={pwrIcon} alt="power button" />
    </button>
  );
}

export default PowerButton;
