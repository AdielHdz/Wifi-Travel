
import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home.jsx"
import Nav from './components/Nav/Nav';
import Carrito from './components/Carrito/Carrito';
import PhoneDetails from "./components/PhoneDetail/PhoneDetails"
function App() {



  return (
    <div className="App">
      <Nav />
        <Routes>
          <Route path="/home" element={<Home />} /> 
          <Route path="/carrito" element={ <Carrito  /> } />
          <Route path='/phoneDetails/:marca/:modelo' element={ <PhoneDetails />} />
        </Routes>
    </div>
  );
}

export default App;
