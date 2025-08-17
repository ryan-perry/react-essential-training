import { useState } from "react";
import "./App.css";
import chef from "./images/chef.jpg";

function Header({ name }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
    </header>
  );
}

const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Pizza",
  "Cheeseburger",
];

const dishObjects = items.map((dish, idx) => ({
  id: idx,
  title: dish,
}));

function Main({ dishes }) {
  return (
    <>
      <div>
        <h2>Welcome to this beautiful restaurant!</h2>
      </div>

      <main>
        <img src={chef} height={200} alt="a photo of a chef" />
        <ul
          style={{
            padding: 0,
          }}
        >
          {dishes.length > 0
            ? dishes.map((dish) => (
                <li key={dish.id} style={{ listStyle: "none" }}>
                  {dish.title}
                </li>
              ))
            : ""}
        </ul>
      </main>
    </>
  );
}

function App() {
  const [status, setStatus] = useState(true);

  return (
    <>
      <h1>The restaurant is currently {status ? "open" : "closed"}</h1>
      <button onClick={() => setStatus(!status)}>
        {status ? "Close" : "Open"} Restaurant
      </button>
      <Header name="Homer" />
      <Main dishes={dishObjects} />
    </>
  );
}

export default App;
