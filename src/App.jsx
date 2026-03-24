import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Encabezado from "./components/navegacion/Encabezado";
import Inicio from "./views/Inicio";
import Categorias from "./views/Categorias";
import Catalogo from "./views/Catalogo";
import Productos from "./views/Productos";
import Login from "./views/Login";
import RutaProtegida from "./components/rutas/RutaProtegida";
import Pagina404 from "./views/Pagina484";
import "./App.css";


const App = () => {
  return (
    <h1>Componente principal</h1>
  )
}

export default App;

