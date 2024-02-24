import "./App.css";
import React from "react";

const phrases = [
  "Today is a special day for you.",
  "I have something to tell you.",
  "I will love you forever unconditionally and will always be by your side.",
  "Actually, I prepared something for you.",
  "Hope you like it. I love you.",
  "Happy birthday to my love.",
  "",
];

const contents = [
  {
    phrase: "",
    image: "",
  },
];

const images = [
  "https://media.tenor.com/J6xumGwaxh8AAAAj/flowers-flower.gif",
  "https://media.tenor.com/hMW3OOWCVQsAAAAj/peach-and-goma-head-massage.gif",
  "https://media.tenor.com/gRHMuWwgl7AAAAAj/peach-goma-love.gif",
  "https://media.tenor.com/_mdYvTBsU2sAAAAj/tkthao219-peach-goma.gif",
  "https://media.tenor.com/ONx_IN1MwtEAAAAj/mochi.gif",
  "https://media.tenor.com/3otRG1fx8j8AAAAj/tkthao219-peach.gif",
  "https://media.tenor.com/ZT0808KDKS8AAAAi/mochi-mochi-peach-cat-cat.gif",
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
          {nextCount < 6 ? (
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
