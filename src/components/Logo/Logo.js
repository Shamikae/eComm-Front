// import logo from '../../logo.svg';
import './Logo.css'
import logo from './logo.svg';


function Logo () {
    return (
        <a href='/'>
            <img src={logo} className="App-logo"  alt="logo" />
        </a>
    )
}

export default Logo;