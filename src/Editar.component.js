  
// Import Modules
import React, { useState, useEffect } from "react";
import {useLocation} from "react-router-dom"
import axios from "axios";
import CadastrarForm from "./CadastrarForm";
  

const Editar = (props) => {
  const location = useLocation();
  const state = location.state;
  const [formValues, setFormValues] = useState({
  name: "",
  email: "",
  });
    

  const onSubmit = (FormObject) => {
    axios
      .post(
        "http://localhost:5000/update/" +
         state,
          FormObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Atualizado com sucesso");
          
        } else Promise.reject();
      })
      .catch((err) => alert("Alguma coisa deu errado"));
  };
  
  
  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/editar/" 
        +state
      )
      .then((res) => {
        const { name, email } = res.data.data;
        setFormValues({ name, email });
      })
      .catch((err) => console.log(err));
  }, []);
  
 
  return (
    <CadastrarForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Editar pessoa
    </CadastrarForm>
  );
};
  

export default Editar;