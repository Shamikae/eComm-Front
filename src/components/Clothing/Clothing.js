import React, { Component } from 'react';
import './Clothing.css';

class Clothing extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handelInputChange = this.handelInputChange.bind(this)
    }
    handelInputChange = (event) => {
        this.setState({ filter: event.target.innerText })
    }
    createCards = () => {
        const  = [
            {

            },

        ];
        return (

        )
    }
}

export default Clothing;