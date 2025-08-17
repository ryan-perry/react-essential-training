import "./App.css";

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
    <ul>
      {dishes.length > 0
        ? dishes.map((dish) => (
            <li key={dish.id} style={{ listStyle: "none" }}>
              {dish.title}
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
      <Main dishes={dishObjects} />
    </>
  );
}

export default App;
