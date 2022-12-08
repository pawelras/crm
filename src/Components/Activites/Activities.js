import { IconContext } from "react-icons";
import {ImMobile2} from "react-icons/im";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaRegHandshake } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './Activities.css';
 
export const Activities = ()=> {
    return (
        <div className="">
            
                
                <h5>Activities</h5>
                
                <div className="d-flex justify-content-around pt-4">
                    <IconContext.Provider value={{ color: 'rgba(0, 195, 249, 0.5)', size: '3em'}}>
                    <div>
                        <ImMobile2 /><div>25 Calls</div>
                    </div>

                    <div>
                    <HiOutlineMailOpen /> <div>86 emails</div>
                    </div>
                    <div>
                    <FaRegHandshake /><div>10 meetings</div>
                    </div>
                    
                    </IconContext.Provider>
                </div>
                <div className="position-absolute filterButtons">
                    <ButtonGroup aria-label="Basic example" size="sm">
                    <Button variant="primary">Day</Button>
                    <Button variant="primary">Week</Button>
                    <Button variant="primary">Month</Button>
                    </ButtonGroup>
                </div>
            
        </div>
    )
}