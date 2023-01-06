import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup,  Button } from "react-bootstrap";

  
const CadastrarForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string()
      .email("You have enter an invalid email address")
      .required("Required"),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
         
          <FormGroup>
             Nome
            <Field name="name" type="text" 
                className="form-control" />
            <ErrorMessage
              name="name"
              className="d-block invalid-feedback"
              component="span" 
            />
          </FormGroup>
          <FormGroup>
            E-mail
            <Field name="email" type="text" 
                className="form-control" />
            <ErrorMessage
              name="email"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>

          <Button variant="danger" size="lg" 
            block="block" type="submit" className='button'>
            {props.children}
          </Button>

        </Form>
      </Formik>
    
    </div>
   
  );
};
  
export default CadastrarForm;