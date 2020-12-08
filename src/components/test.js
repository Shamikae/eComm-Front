import React, {Component} from 'react';



class Test extends Component {
    constructor(props){
        super(props)
        this.state = {
            newUser:{}
        }
        this.inputChange = this.inputChange.bind(this)
        this.createNewUser = this.createNewUser.bind( this)
    }
    
    componentDidMount(){
        // return fetch(`http://34.205.71.206:3030/users`)
        fetch(`http://localhost:3030/users`)
            .then(res => res.json())
            .then(res => this.setState({users: res}))
            .catch(err => console.log(err))
    }

    // componentDidUpdate(){
    //     console.log(this.state)
    //     console.log(this.state.users)
    // }

    inputChange(event){
        let newUser = this.state.newUser
        newUser[event.target.name] = event.target.value
        this.setState({
            newUser
        })
        console.log(this.state)
    }
    createNewUser(){
        fetch(`http://localhost:3030/users`, {
            mothod:'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(this.state.newUser)
    })
    .then(res => res.json())
    .catch(error => console.log(error))
}


render(){
    return(
        <> 
        <div>{this.state.users ? this.state.users.map (poke => <h1 key={poke.poke_id}>{poke.name}</h1> ): 'no fetch working' }</div>
        <button onClick={this.createNewUser}>Create New User</button>
        <input name="name" placeholder="name" onChange={this.inputChange}/>
        </>
        )
    }
}

export default Test;