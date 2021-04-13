import React from "react";
import "./App.css";

function SecretComponent() {
  return <h1>Super secret information for authorized users only</h1>;
}

function RegularComponent() {
  return <h1>Everyone can see this component.</h1>;
}

function App({ authorized }) {
  return <>{authorized ? <SecretComponent /> : <RegularComponent />}</>;
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
