const HEAD = <div className="head"></div>;
const BODY = <div className="body"></div>;
const RIGHT_ARM = <div className="right-arm"></div>;
const LEFT_ARM = <div className="left-arm"></div>;
const RIGHT_LEG = <div className="right-leg"></div>;
const LEFT_LEG = <div className="left-leg"></div>;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];
type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className="hangman-container">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="top-part"></div>
      <div className="top-right-part"></div>
      <div className="vertical-long"></div>
      <div className="bottom-part"></div>
    </div>
  );
};

export default HangmanDrawing;
