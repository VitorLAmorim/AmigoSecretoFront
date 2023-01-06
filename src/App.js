// Import React
import React from "react";
  
// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
  
// Import Custom CSS
import "./App.css";
  
// Import from react-router-dom
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
  
// Import other React Component
import Create from  "./Cadastrar.component";
import Editar from  "./Editar.component";
import Listar from  "./Listar.component";
import Sortear from "./Sorteio.component";
// App Component
const App = () => {
 
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"} 
                  className="nav-link">
                  Amigo Secreto
                </Link>
              </Navbar.Brand>
  
              <Nav className="justify-content-end">
             
                <Nav>
                  <Link to={"/sorteio"} 
                    className="nav-link">
                    Sorteio
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
  
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                  <Routes>
                  <Route exact path="/" element={<Create/>} />
                  <Route path="/create" element={<Create/>} />
                  <Route path="/editar/:id" element={<Editar />} />
                  <Route path="/listAll" element={<Listar/>} />
                  <Route path="/sorteio" element={<Sortear/>} />
                  </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};
  
export default App;