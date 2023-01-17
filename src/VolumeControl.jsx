import "./VolumeControl.css";

function VolumeControl(props) {
  
  function changeVolume(event) {
    const volume = event.target.value;
    const volumeText = "Volume: " + volume;
    props.updateVolume(volume / 100, volumeText);
  }

  return (
    <div className="volume-control">
      <input type="range" min="0" max="100" defaultValue="100" className="volume-slider" onChange={changeVolume} />
    </div>
  );
}

export default VolumeControl;
