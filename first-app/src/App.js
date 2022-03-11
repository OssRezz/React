// import Button from "./Button";

// const arr = ["Chanchito Feliz", "Chanchito Triste", "Chanchito Emocionado"];

// const App = () => {
//   const miVariable = false;
//   if (miVariable) {
//     return <p>Mi variable dio true!</p>;
//   }
//   return (
//     <div>
//       <h1 onClick={(e) => console.log("Presionado", e)}>Hola mundo</h1>
//       {arr.map((el) => (
//         <p key={el}>{el}</p>
//       ))}
//       <Button onClick={() => console.log("Clciked")}>Enviar</Button>
//     </div>
//   );
// };
// export default App;

import { Component } from 'react';

class App extends Component {
  state = {};
  render() {
    console.log(this.state)
    return (
      <div>
        <p>Hola mundo</p>
        <button onClick={() => this.setState({ valor: 2 })}>Enviar</button>
      </div>
    )
  }
}

export default App;