import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var emojiDataBase = {
    "🌚": "Moon",
    "😉": "Wink",
    "🏖️": "Beach",
    "🤒": "Sick",
    "🤡": "Joker",
    "😑": "Expressionless",
    "👻": "Ghost",
    "🤓": "Neardy",
    "🤳": "Selfie",
    "🤣": "Rolling on the floor laughing"
  };

  var emojiArray = Object.keys(emojiDataBase);

  var [inputEmoticon, setEmoticon] = useState("");
  var [meaning, setMeaning] = useState("Emoticon meaning will appear here");

  var OnUserInput = (event) => {
    var inputEmoticon = event.target.value;
    setEmoticon(inputEmoticon);

    var meaning = emojiDataBase[inputEmoticon];
    if (inputEmoticon in emojiDataBase) {
      setMeaning(meaning);
    } else setMeaning("Emoticon not  in DataBase");
  };

  var emojiClickHandler = (item) => {
    var meaning = emojiDataBase[item];
    setMeaning(meaning);
  };

  return (
    <div className="App">
      <h1>Find Your Emoticons</h1>
      <input onChange={OnUserInput} placeholder="Find your emoticon"></input>
      <p>
        <span className="emoticon-meaning">
          <b>{meaning}</b>
        </span>
      </p>
      <p>
        <b>All emojis in DataBase:</b>
      </p>
      <div>
        {emojiArray.map((item) => {
          return (
            <span
              onClick={() => emojiClickHandler(item)}
              className="allEmoticon"
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

/*
VISER:
View > Interact > State in Event Handler > Render
View: Render a view
Interact: User will interact with the view
State in Event Handler: Update the state in event handler
Render: Render the view
*/
