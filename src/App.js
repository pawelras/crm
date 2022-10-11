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
      
       {/*  */}
      <Row style={{height: "100vh"}} >
        <Col xxl={1} xl={1} lg={1} md={2} sm={2} xs={12} className="mh-100">
          <Navbar />
        </Col>
        <Col xxl={11} xl={11} LG={11} md={10} sm={10} xs={12} className="mh-100 Main">
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
      
        {/* <Navbar />
        <div className="Main">
          <Routes>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/products" component={<Dashboard />} />
            <Route exact path="/reports" component={<Dashboard />} />
          </Routes>
        </div> */}
        
      </Router>  
    </Container>




  );
}

export default App;
