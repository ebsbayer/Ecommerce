import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ComponenteNome } from "../componentes/ComponenteNome";
import { Produto } from "../pages/Produto";
import { Home } from "../pages/home";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { NavBar } from "../componentes/NavBar";
import CarouselAnuncios from "../componentes/CarouselAnuncios";

export function RouteApp() {
   return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComponenteNome />} />       
        <Route path="/produto" element={<Produto />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<ListaProdutos />} />
        <Route path="/" elemnt={<NavBar />} />
        <Route path="/" elemnt={<CarouselAnuncios />} />

      </Routes>
    
    </BrowserRouter>
   );
}