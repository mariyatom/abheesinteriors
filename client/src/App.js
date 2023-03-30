import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Contactuser from './components/contactuser';
import Gallerydetail from './components/gallerydetail';

function App() {
  return (
   <>
   
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactuser" element={<Contactuser />} />
        <Route  path='/gallerydetail'  element={<Gallerydetail />}/>
      </Routes>

   </>
  );
}

export default App;
