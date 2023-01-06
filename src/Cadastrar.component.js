
// Import Modules
import React, { useState } from "react";
import axios from 'axios';
import CadastrarForm from "./CadastrarForm";
import Listar from './Listar.component';

const Create = () => {
  const [formValues] = 
    useState({ name: '', email: '', tirou: 'NULL' })
  // onSubmit handler
  const onSubmit =  FormObject => {
    axios.post(
'http://localhost:5000/create', 
FormObject)
      .then(res => {
        if (res.status === 200)
          alert('Pessoa criada com sucesso')
        else
          Promise.reject()
      })
      .catch(err => alert('Alguma coisa deu errado'))
      window.location.reload();
  }
    
 
  return(
    <div>
    <CadastrarForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Cadstrar pessoa      
    </CadastrarForm>

    <div> 
    <Listar/>
    </div>
    </div>
    
  )
}
  

export default Create