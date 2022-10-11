import { CommsChart } from "../Charts/CommsChart"
import 'chart.js/auto';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export const Dashboard = () => {
    return (

        
        <Container className="mh-100">
        
            <Row>
            <h1>Your Dashboard</h1>
            </Row>

            <Row>
                <Col xl={3} className="Tile"> <CommsChart /></Col>
                <Col xl={4} className="Tile">Total Sales: £3,600</Col>
                <Col xl={3} className="">
                <Row className="h-50">
                    
                    <Col xl={12} className="Tile ">Activity: 14 calls</Col>
                </Row>
                <Row className="h-50">
                    
                    <Col xl={12} className="Tile ">Activity: 14 calls</Col>
                </Row>

                </Col>

                
                
            </Row>
            <Row>
                <Col xl={3} className="Tile"> <CommsChart /></Col>
                <Col xl={4} className="Tile">Total Sales: £3,600</Col>
                <Col xl={2} className="Tile">Activity: 14 calls</Col>
            </Row>
            
           
            {/* <div>aa</div>
            <div>bb</div>
            <div>cc</div>
            <div>dd</div> */}

        </Container>
    )
}