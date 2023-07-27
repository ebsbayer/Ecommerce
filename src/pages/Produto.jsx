import { Container } from "react-bootstrap";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { CompNavBar } from "../componentes/NavBar";


function Produto() {
  return (
    <Container>
      <CompNavBar />
      <ListaProdutos />
    </Container>
  );
}

export { Produto };

