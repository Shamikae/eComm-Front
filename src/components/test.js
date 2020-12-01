import React, {Component} from 'react';


class Test extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    
    componentDidMount(){
        return fetch(`http://34.205.71.206:3030/users`)
        .then(res => res.json())
        .then(res => this.setState({users: res}))
        .catch(err => console.log(err))
    }

    componentDidUpdate(){
        console.log(this.state)
        console.log(this.state.users)
    }


render(){
    return(
        <h1> {this.state.users? this.state.users[0].email:'no response'}</h1>
    )
    }
}

export default Test;