import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { IconContext } from "react-icons";

// ROUTING

import { NavLink } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SlidebarData";


// STYLES
import "./Navbar.css";
import logo from '../../resources/img/logo.png';


export const Navbar = () => {

    return (
        <>
          <IconContext.Provider value={{ color: 'rgb(197, 199, 211)', size: '0.7em'}}>
            
            <nav className="nav-menu">
              <ul className="nav-menu-items">
              <li >
              <NavLink className="NavBarLink " exact to={"/"}/> 
                <div className="header"> 
                    <img className="Logo" src={logo} />
        
                </div>
            </li>         
                
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <NavLink className="NavBarLink" exact to={item.path}
                      > 
                        <div>
                        {item.icon}
                        </div>
                    
                        
                        {/* <span>{item.title}</span> */}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </IconContext.Provider>
        </>
      );

}
