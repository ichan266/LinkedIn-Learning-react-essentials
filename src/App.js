import React, { useState } from "react";
import "./App.css";

function App() {
  const [emotion, setEmotion] = useState("happy");
  console.log(emotion);
  console.log(typeof emotion);
  return (
    <>
      <h1>Current emotion is {emotion}.</h1>
      <button onClick={() => setEmotion("happy")}>Happy</button>
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
