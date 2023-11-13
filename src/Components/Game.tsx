import { AppGame, TextP } from "./Game.style";
import { StyledButton } from "./Button.style";

const Game = () => {
  return (
    <AppGame>
      <h1>Click Counter Game</h1>
      <TextP>
        Click the button as many times as you can within 10 seconds!
      </TextP>
      <StyledButton>Click Me</StyledButton>
      <TextP>Time Left:</TextP>
      <TextP>Click Count:</TextP>
      <>
      <TextP>Game Over!</TextP>
      <TextP>Your final score:</TextP>
      </>
    </AppGame>
  );
};

export default Game;
