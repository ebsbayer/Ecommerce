import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function ComponenteNome() {

  const [nome, setNome] = useState ("Emilio");

  useEffect(() =>{

    alert(`O alterado o nome para ${nome}`)
  },[nome])
  //Obesrvação: o [] esta com a variavel nome, para gerar evento quando alterar nome

  return (
    <div> 

      <button onClick={() => setNome("Bayer")}> alterar para apelido</button>
      <button onClick={() => setNome("Emilio")}> alterar para seu nome </button>
      <Button variant="primary">Primary</Button>{' '}

       <p> Nome: {nome}</p>
    </div>
  );
};

export { ComponenteNome };