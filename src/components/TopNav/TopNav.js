import './TopNav.css';
import Test from '../test'


function TopNav () {
    return(
        <div className="topNav">
            
            <a className="topLeft" href="#home"><img className="navItem" alt="Home" src="https://www.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png" /></a>
            <div className="topNav-right">
            <Test/>
            <a href="#topNav">TopNav</a>
            <a href="#topNav">TopNav</a>           
            </div>            
        </div>
        
    )
}

export default TopNav;