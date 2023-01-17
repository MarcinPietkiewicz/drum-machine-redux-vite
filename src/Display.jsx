import {useAppSelector} from './app/hooks';

function Display() {
  const display = useAppSelector(state => state.display.value);
  return <div id="display">{display}</div>;
}

export default Display;
