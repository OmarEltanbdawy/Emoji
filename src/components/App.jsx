import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";

function CreateEmoji(vals) {
  return (
    <Emoji
      key={vals.id}
      emoji={vals.emoji}
      name={vals.name}
      meaning={vals.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(CreateEmoji)}</dl>
    </div>
  );
}

export default App;
