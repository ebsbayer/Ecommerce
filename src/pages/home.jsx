import CarouselAnuncios from "../componentes/CarouselAnuncios";
import { NavBar } from "../componentes/NavBar";



function Home() {
    return (        
        <Container>            
            <NavBar />
            <CarouselAnuncios />
        </Container>

    );
}

export { Home };

