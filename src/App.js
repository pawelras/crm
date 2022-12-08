import {Navbar} from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from './Components/Dashboard/Dashboard';
import { StatusBar } from "./Components/StatusBar/StatusBar";
import { Leads } from "./Components/Leads/Leads";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './App.css';


function App() {
  return (

    

    <Container fluid >
      <Router>
      
      
      <Row className="appContainer" >
        <Col md={1} className="navBar">
          <Navbar />
        </Col>
        <Col md={11} className="mh-100 Main">
        <Row style={{height: "5vh"}}>
        <StatusBar />
      </Row>
        <Routes>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/leads" element={<Leads />} />
            <Route exact path="/reports" component={<Dashboard />} />
          </Routes>
        </Col>
      </Row>
      
        
        
      </Router>  
    </Container>




  );
}

export default App;
