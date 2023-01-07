import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import SorteioRow from "./SorteioForm";
import { Button } from "react-bootstrap";
  
const Sortear = () => {
  const [pessoas, setPessoas] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://amigosecretoback.fly.dev/sorteio")
      .then(({ data }) => {
        setPessoas(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return pessoas.map((res, i) => {
      return <SorteioRow obj={res} key={i} />;
    });
    
  };
  function reload () {
    window.location.reload(false);
  }
  function enviaremail(){
    axios
      .get(
        "https://amigosecretoback.fly.dev/Sendemail"         
      )     
      .catch((err) => console.log(err));

  }  
  
return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr className="topotabela">
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tirou</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
      <Button className='botao' onClick={reload}>Sortear denovo</Button>
      <Button className='botao' onClick={enviaremail}>Enviar Email</Button>
    </div>
  );
};
  
export default Sortear;