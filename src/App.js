import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(10);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (score <= 5 && comment.length <= 10) {
      alert("Please provide a comment explaining why the experience is poor.");
      return;
    }
    console.log(`Score: ${score}, Comment: ${comment}`);
    setComment("");
    setScore(10);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div className="field">
            <label htmlFor="score">Score: {score} ⭐ </label>
            <input
              id="score"
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="comment">Comment </label>
            <textarea
              rows="4"
              cols="20"
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <button disabled={!comment}>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
