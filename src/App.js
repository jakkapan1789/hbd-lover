import "./App.css";
import React from "react";

const phrases = [
  "Hello Carrot",
  "Today is a special day for you. I wish you much happiness",
  "Happy birthday to you :D",

  "",
];

const contents = [
  {
    phrase: "",
    image: "",
  },
];

const images = [
  "https://media.tenor.com/9WgLODErtoIAAAAj/carrot-panda.gif",
  "https://media.tenor.com/l2QU5JIn6q0AAAAj/happy-birthday.gif",
  "https://media.tenor.com/S0JGPOR2G74AAAAj/tantan-lamronspace.gif",
];

function App() {
  const [nextCount, setNextCount] = React.useState(0);
  const nextText = () => phrases[Math.min(nextCount, phrases.length - 1)];
  const nextImage = () => images[Math.min(nextCount, images.length - 1)];
  return (
    <div className="App">
      <header className="App-header">
        <p
          style={{
            fontFamily: "Kanit, sans-serif",
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          {nextText()}
        </p>
        <img
          src={nextImage()}
          style={{ width: 200, height: 200 }}
          alt="reaction"
        />
        <div className="button-container">
          {nextCount < 2 ? (
            <button
              className="yes-button"
              style={{
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
              }}
              onClick={() => setNextCount(nextCount + 1)}
            >
              Next
            </button>
          ) : null}
        </div>
      </header>
    </div>
  );
}

export default App;
