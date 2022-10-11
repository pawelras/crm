// ICONS
// import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
// import * as AiIcons from "react-icons/ai";
// import * as MDIcons from "react-icons/md";


import { IconContext } from "react-icons";

// ROUTING

import { NavLink } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SlidebarData";


// STYLES
import "./Navbar.css";
import logo from '../../resources/img/logo1.png';


export const Navbar = () => {

    return (
        <>
          <IconContext.Provider value={{ color: 'rgb(197, 199, 211)', size: '1em'}}>
            
            <nav className="nav-menu">
              <ul className="nav-menu-items">
              <li className="Logo">
              <NavLink className="NavBarLink " exact to={"/"}/> 
                <div className="header"> 
                    <img width="100px" src={logo} />
        
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

// export default function Navbar() {
//   const [sidebar, setSidebar] = useState(false);

//   const showSidebar = () => setSidebar(!sidebar);

//   return (
//     <>
//       <IconContext.Provider value={{ color: "#FFF" }}>
//         {/* All the icons now are white */}
//         <div className="navbar">
        
//           <Link to="#" className="menu-bars">
//             <FaIcons.FaBars onClick={showSidebar} />
//           </Link>
          
//           <div style={{"color": "white", "font-size": "40px"}}>
//                 See mee
//                 <MDIcons.MdOutlineFlutterDash />
//             </div>
            
//         </div>
//         <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
//           <ul className="nav-menu-items" onClick={showSidebar}>
//             <li className="navbar-toggle">
//               <Link to="#" className="menu-bars">
//                 <AiIcons.AiOutlineClose />
//               </Link>
//             </li>

//             {SidebarData.map((item, index) => {
//               return (
//                 <li key={index} className={item.cName}>
//                   <Link to={item.path}>
//                     {item.icon}
//                     <span>{item.title}</span>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </IconContext.Provider>
//     </>
//   );
// }
