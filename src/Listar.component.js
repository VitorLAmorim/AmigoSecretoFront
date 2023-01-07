import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import TableRow from "./ListarForm";
  
const Listar = () => {
  const [pessoas, setPessoas] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://amigosecretoback.fly.dev/Home/")
      .then(({ data }) => {
        setPessoas(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return pessoas.map((res, i) => {
      return <TableRow obj={res} key={i} />;
    });
  };
  
  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr className="topotabela">
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
  
export default Listar;