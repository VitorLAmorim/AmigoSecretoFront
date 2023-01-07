  
// Import Modules
import React, { useState, useEffect } from "react";
import {redirect, useLocation,useNavigate} from "react-router-dom"
import axios from "axios";
import CadastrarForm from "./CadastrarForm";
  

const Editar = (props) => {
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
  name: "",
  email: "",
  });
    

  const onSubmit = (FormObject) => {
    axios
      .post(
        "https://amigosecretoback.fly.dev/update/" +
         state,
          FormObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Atualizado com sucesso");
          navigate('/');
        } else Promise.reject();
      })
      .catch((err) => alert("Alguma coisa deu errado"));
  };
  
  
  useEffect(() => {
    axios
      .get(
        "https://amigosecretoback.fly.dev/editar/" 
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