import './StatusBar.css';
import * as GiIcons from "react-icons/gi";


export const StatusBar = () => {
    return (
        <div className="StatusBar">
            <div>2 new messages, 3 calls, 1 meeting</div>
            <div>{Date().toLocaleString().slice(0,10).replace(/-/g,'/')}</div>
            <div><GiIcons.GiHamburgerMenu /></div> 
        </div>
    )
}