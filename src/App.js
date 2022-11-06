import Home from "./pages/Home";
import "./css/app.css";
import Menu from "./components/menu";
import TechAdd from "./pages/TechAdd";
import TechList from "./pages/TechList";
import {Routes, Route} from "react-router-dom"

import {useState} from 'react';

function App() {

const [techs, setTech] = useState([]);

function ajouteTechno(tech) {
  console.log('ajouteTechno', tech)
  setTech([...techs, tech ]);
}
  return (
    <>
    <Menu />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<TechAdd ajouteTechno={ajouteTechno} />} />
      <Route path='/list' element={<TechList techs={techs}/>} />
    </Routes>
    </>
  );
}

export default App;
