import React from "react";
import DrumPad from './DrumPad';

function DrumBox(props) {
    return (
      <React.Fragment>
        <DrumPad upDisplay={props.upDisplay} id="Q" clipId={'Heater-1'} clip={'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'} keyCode={81} keyTrigger={'Q'} />
        <DrumPad upDisplay={props.upDisplay} id="W" clipId={'Heater-2'} clip={'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'} keyCode={87} keyTrigger={'W'} />
        <DrumPad upDisplay={props.upDisplay} id="E" clipId={'Heater-3'} clip={'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'} keyCode={69} keyTrigger={'E'} />
        <DrumPad upDisplay={props.upDisplay} id="A" clipId={'Heater-4'} clip={'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'} keyCode={65} keyTrigger={'A'} />
        <DrumPad upDisplay={props.upDisplay} id="S" clipId={'Clap'} clip={'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'} keyCode={83} keyTrigger={'S'} />
        <DrumPad upDisplay={props.upDisplay} id="D" clipId={'Open-HH'} clip={'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'} keyCode={68} keyTrigger={'D'} />
        <DrumPad upDisplay={props.upDisplay} id="Z" clipId={'Kick-n-hat'} clip={'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'} keyCode={90} keyTrigger={'Z'} />
        <DrumPad upDisplay={props.upDisplay} id="X" clipId={'Kick'} clip={'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'} keyCode={88} keyTrigger={'X'} />
        <DrumPad upDisplay={props.upDisplay} id="C" clipId={'Closed-HH'} clip={'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'} keyCode={67} keyTrigger={'C'} />
      </React.Fragment>
    );
}

export default DrumBox;
