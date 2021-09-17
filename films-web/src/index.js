import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// function Componente(props) {
// const titulo = props.titulo;
// const contenido = props.contenido;

// function Componente({ titulo, contenido }) {
//   // const { titulo, contenido } = props;
//   return (
//     <div>
//       <h1>{titulo}</h1>
//       <div>{contenido}</div>
//     </div>
//   );
// }

// This is how the components and props are used

// function Componente({ titulo, children }) {
//   return (
//     <div className="contenedor">
//       <h1>{titulo}</h1>
//       <div>{children}</div>
//     </div>
//   );
// }

// ReactDOM.render(
//   <Componente titulo="Lola tiene un coche Rojo">
//     "Lola dice que cuando lo arranca su coche hace 'brom broooom'"
//   </Componente>,
//   document.getElementById("root")
// );
