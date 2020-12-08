import './NavBar.css';
import { Link } from 'react-scroll';


function NavBar () {
    return(
        <div className="NavBar">
            <div>
                <Link className='link' to='Home' smooth={true}> Home</Link>
                <Link className='link' to='clothing' smooth={true}> Clothing</Link>
                <Link className='link' to='shoes' smooth={true}> Shoes</Link>
                <Link className='link' to='accessories' smooth={true}> Accessories</Link>
                <Link className='link' to='beauty' smooth={true}> Beauty</Link>
                
            </div>
        </div>
    )
}

export default NavBar;