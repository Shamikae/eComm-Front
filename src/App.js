import logo from './logo.svg';
import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import TopNav from './components/TopNav/TopNav';
// import Test from './components/test';


class App extends Component {
    componentDidMount() {
        console.log(Auth.user.username)
    }
    render() {
        return (
            <div className="App">
                <TopNav />
                <NavBar />
                <div className="container">
               <Router>
                   <Switch>
                       <Route exact path="/" component={LandingPage}/>
                   </Switch>
                </Router>
                {/* <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
        </p>

                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
        </a>
                    
                </header> */}
                {/* <Test /> */}
            </div>
            </div>

        );
    }
}

export default withAuthenticator(App);
