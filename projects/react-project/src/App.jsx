import "./App.css";

function Header({ name }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
    </header>
  );
}

const items = ["Macaroni and Cheese", "Salmon with Potatoes", "Pizza"];

function Main({ dishes }) {
  return (
    <ul>
      {dishes.length > 0
        ? dishes.map((dish, idx) => (
            <li key={idx} style={{ listStyle: "none" }}>
              {dish}
            </li>
          ))
        : ""}
    </ul>
  );
}

function App() {
  return (
    <>
      <Header name="Homer" />
      <Main dishes={items} />
    </>
  );
}

export default App;
