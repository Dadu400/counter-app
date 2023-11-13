import Game from "./Components/Game";
import { AppGame } from "./Components/Game.style";
import ResetButton from "./Components/ResetButton";

function App() {
  return (
    <AppGame>
      <Game />
      <ResetButton />
    </AppGame>
  );
}

export default App;
