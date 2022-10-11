import {Navbar} from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from './Components/Dashboard/Dashboard';
import { StatusBar } from "./Components/StatusBar/StatusBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './App.css';


function App() {
  return (
    <Container fluid >
      <Router>
       <Row>
        <StatusBar />
      </Row>
      
        <Navbar />
        <div className="Main">
          <Routes>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/products" component={<Dashboard />} />
            <Route exact path="/reports" component={<Dashboard />} />
          </Routes>
        </div>
        
      </Router>
      
    
    </Container>
  );
}

export default App;
