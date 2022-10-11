import {data} from './LeadData';
import { LeadType } from './LeadType';
import {Container, Row, Col } from 'react-bootstrap';
import { LeadsTable } from './LeadTable';

export const Leads = () => {

    console.log(data);
    return (
        <Container>
        <Row>
            <h2>Latest Leads</h2>
        </Row>
        <Row>
            {data.map(el => {
                return (
                    <Col>
                        <LeadType leadTitle={el.leadTitle} 
                                description={el.description}
                        
                        />
                    </Col>
                )
            })}
        </Row>
        <Row>
            <Col xxl={12}>
                <LeadsTable/>
            </Col>
        </Row>
        </Container>
    )
}