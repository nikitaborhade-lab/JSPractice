import React from 'react';

export default class ClassCompo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Nikita",
            age: 28,
            count: 0
        }
    }

    increment = () =>{
        this.setState((prevState)=>({
            count: prevState.count+1
        }))
    }
    render(){
        return(
            <>
            <h4>Class Component</h4>
            <p>My name is {this.state.name}</p>
            <button onClick={this.increment}>+</button>
            <div>-------------------------------------------------------------</div>
            </>
        )
    }

}