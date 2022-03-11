import logo from "./logo.svg";
// import "./App.css";
import "./main.css";

// function App() {
//   return <p>Chancito feliz</p>;
// }
// const App = () => {
//   return "Chanchito feliz";
// };

const estilo2 = {
  boxShadow: "0 5px 3px rbg (0,0,0,0.5)",
};
const estilo = ({ bg = "#222" }) => ({
  backgroundColor: bg,
  color: "#fff",
  padding: "10px 15px",
  margin: "10px 15px",
});

const Li = ({ children }) => {
  return <li className="clase-li">{children}</li>;
};

const App = () => {
  const valor = "Treiste";
  return (
    <ul FclassName="clase-css">
      <Li estado="Feliz">Valor de la lista</Li>
    </ul>
  );
};

// const App = () => {
//   return <p>Chancito feliz</p>;
// };
export default App;
