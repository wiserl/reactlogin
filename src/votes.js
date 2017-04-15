import React, { Component } from 'react';


export default class Votes extends Component {
    constructor (props){
        super(props)
        this.state ={votes: 1};
    }


addVoteClicked = () => {this.setState({votes: this.state.votes + 1});
};

render(){
    return(
        <div className="votes">
        <div>Votes: {this.state.votes}</div>
        <button onClick={e=> this.setState({votes: this.state.votes + 1})}>Add Vote</button>
        </div>
    )
}

}