import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);

  return (
    <>
      <h1>
        Current emotion is {emotion} and {secondary}.
      </h1>
      <button onClick={() => setEmotion("happy")}>Make Happy</button>
      <button onClick={() => setSecondary("crabby")}>Make Crabby</button>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
      <button onClick={() => setEmotion("sad")}>Sad</button>
    </>
  );
}

export default App;

// % {props.authorized ? <SecretComponent /> : <RegularComponent />}
// %   This whole statement means:
// %    1. If props.authorized is true, (i.e. ? means if), then render <SecretComponent />
// %    2. Else, render <RegularComponent /> (i.e. : means else)
// %
// %
// %
// % function App({ authorized }) {
// %    return <>{authorized ? <SecretComponent /> : <RegularComponent />}</>;
// % }
// %   Using App({ authorized }) this way (instead of prop.authorized) is called object constructing
// %
// %
// %
// %
