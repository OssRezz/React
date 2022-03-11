import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App';
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// const Li = ({ children, estado, casa, edad }) => {
//   console.log(casa, edad);
//   return (
//     <li>
//       {children} estoy {estado} y tengo {edad}
//     </li>
//   );
// };
// const X = () => (
//   <ul>
//     <Li estado={"feliz"} casa={false} edad={24}>
//       Chanchito
//     </Li>
//     <Li estado={'Triste'} edad={10}>Chancho </Li>
//     <li>Felipe</li>
//   </ul>
// );

// ReactDOM.render(<X />, document.querySelector("#root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
