import logo from './logo.svg';
import { ComponenteNome } from "./componentes/ComponenteNome";
import { ResumoSobreVoce } from "./componentes/ResumoSobreVoce";
import { ComponenteCompetencia } from './componentes/ComponenteCompetencia';
import { NaveBar } from './componentes/NaveBar';
import './App.css';

function App() {
  return (
    <row className="App">
      <p>Nave do projeto</p>
      <NaveBar col md={2} 
       nome="logo"
       descricao="......"
     />
     <NaveBar
       nome="Home"
       descricao="......"
     />
     <NaveBar
       nome="Produto"
       descricao="....."
     />
     <NaveBar
       nome="Contato"
       descricao="....."
     />
      <hr />
      <p> Importando componentes</p>
      <hr />
      <ComponenteNome/>
      <ResumoSobreVoce>
        <p>Moro em Curitiba, trabalho na are de fiscal, tentando se tornar um desenvolvedor.</p>
      </ResumoSobreVoce>
     <hr />
     <p>Lista de competencia</p>
     <ComponenteCompetencia
       nome="HTML"
       descricao="Fazer pagina static para o curso realizado na harve"
     />
     <ComponenteCompetencia
       nome="CSS"
       descricao="Para complementar o curso realizado na harve"
     />
    </row>
  );
}

export default App;