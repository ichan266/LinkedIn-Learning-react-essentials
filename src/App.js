// import logo from "./logo.svg";
import "./App.css";
import restaurant from "./restaurant.jpg";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We server the most {props.adjective} food here!</p>
      <img src={restaurant} height={200} alt="napkin and silverware" />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}
//* Note textAlign is JSX syntax (text-align in CSS)
//* To import image, we first import the file on top, then we add the img tag with src, style, and alt.
//% alt (an attribute) is for screen reader.

//* Below is not the right way to do to avoid key errors:
//*
// function Main(props) {
//   return (
//     <section>
//       <p>
//         We server the most {props.adjective} food around.
//       </p>
//       <ul style={{ textAlign: "left" }}>
//         {props.dishes.map((dish, i) => (
//           <li key={i}>{dish}</li>
//         ))}
//       </ul>
//     </section>
//   )
// }

function Footer(props) {
  return (
    <footer>
      <p>{props.year}</p>
    </footer>
  );
}

const dishes = [
  "Sushi",
  "Singapore Fried Noodles",
  "Beef Ball",
  "Waffles",
  "Milk Tea",
  "Fish Ball Noodles",
  "French Toast",
  "Lobster",
  "Mango Pudding",
  "Radish Cake",
];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));
console.log(dishObjects);

function App() {
  return (
    <div className="App">
      <Header name="Iris" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}
// % Note in <div className="App">, App is a CSS class

export default App;

// @ React Doc
// @ https://fb.me/react-warning-keys
// @
