import {data} from './LeadData';
import { LeadType } from './LeadType';
import {Container, Row, Col } from 'react-bootstrap';
import { LeadsTable } from './LeadTable';
import IconButton from '@mui/material/IconButton';
import QueueIcon from '@mui/icons-material/Queue';
import { BasicTabs } from './LeadTabs';



export const Leads = () => {

    console.log(data);
    return (
        <Container>
        <Row>
        <div className='d-flex justify-content-between'>
            <h2>Latest Leads</h2>
            <div>
            <IconButton>
                <QueueIcon />
            </IconButton>
            </div>
        </div>
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
                {/* <LeadsTable/> */}
                <BasicTabs />
            </Col>
        </Row>
        </Container>
    )
}