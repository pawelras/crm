import { HitRateChart } from "../Charts/HitRateChart"
import 'chart.js/auto';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { SalesChart } from "../Charts/SalesChart";
import { Activities } from "../Activites/Activities";

export const Dashboard = () => {
    return (

        
        <Container fluid className="h-90 w-100">
        
            <Row>
            <h1 className="pb-1 mt-1 " style={{marginBottom: "1em", marginTop: "1em", "padding-left": "1em"}}>Your Dashboard</h1>
            </Row>

            <Row className="h-90">
                <Col xl={4} className="h-30">
                    <div className="Tile">
                    <HitRateChart />
                    </div>
                </Col>
                <Col xl={4} className="h-30">
                    <div className="Tile">
                    Tings
                    </div>
                </Col>

                <Col xl={4} className="">
                    <Row className="">
                        
                        <Col xl={12} className="position-relative">
                        <div className="smallTile Tile">
                        <Activities />
                        </div>
                        </Col>
                    </Row>
                    <Row className="">
                        
                        <Col xl={12} className="">
                        <div className="smallTile Tile">
                        Activity: 14 calls
                        </div>
                        </Col>
                    </Row>

                </Col>
                <Col xl={8} className="h-40 pt-5"> 
                <div className="Tile"><SalesChart /></div>
                </Col>
                <Col xl={4} className="h-30 pt-5">
                <div className="Tile">
                Total Sales: £3,600</div></Col>
                
                {/* <Col md={3} className="Tile">Activity: 14 calls</Col> */}
                
                
            </Row>
            
            
           
            {/* <div>aa</div>
            <div>bb</div>
            <div>cc</div>
            <div>dd</div> */}

        </Container>
    )
}