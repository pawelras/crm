import { HitRateChart } from "../Charts/HitRateChart"
import 'chart.js/auto';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { SalesChart } from "../Charts/SalesChart";
import { Activities } from "../Activites/Activities";

export const Dashboard = () => {
    return (

        
        <Container fluid className="mh-100 w-100">
        
            <Row>
            <h1 style={{marginBottom: "1em", marginTop: "1em", "padding-left": "1em"}}>Your Dashboard</h1>
            </Row>

            <Row >
                <Col xl={3} className="Tile"> <HitRateChart /></Col>
                <Col xl={3} className="Tile"><SalesChart /></Col>
                <Col xl={3} style={{"margin-right": "2em"}}>
                <Row className="h-50">
                    
                    <Col xl={12} className="Tile position-relative">
                    <Activities />
                    </Col>
                </Row>
                <Row className="h-50">
                    
                    <Col xl={12} className="Tile">Activity: 14 calls</Col>
                </Row>

                </Col>
                <Col xl={6} className="Tile"> <SalesChart /></Col>
                <Col xl={3} className="Tile">Total Sales: £3,600</Col>
                {/* <Col md={3} className="Tile">Activity: 14 calls</Col> */}
                
                
            </Row>
            
            
           
            {/* <div>aa</div>
            <div>bb</div>
            <div>cc</div>
            <div>dd</div> */}

        </Container>
    )
}