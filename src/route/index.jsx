import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ComponenteNome } from "../componentes/ComponenteNome";
import { Produto } from "../pages/Produto";
import { Home } from "../pages/home";

export function RouteApp() {
   return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComponenteNome />} />       
        <Route path="/produto" element={<Produto />} />
        <Route path="/home" element={<Home />} />
     

      </Routes>
    
    </BrowserRouter>
   );
}