import { Container } from "react-bootstrap";
import {CompNavBar} from  "./../componentes/NavBar"
import CarouselAnuncios from  "./../componentes/CarouselAnuncios"



function Home() {
    return (        
        <Container>  
            home          
            <CompNavBar />
            <CarouselAnuncios />
        </Container>

    );
}

export { Home };

