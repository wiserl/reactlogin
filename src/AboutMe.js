import React, { Component } from 'react';

export default class AboutMe extends Component {
    render(){
        const { me = {}} = this.props;
        return (
   <ul>
   <h1>Logan Wiser</h1>
    <li>{me.thing1}</li> 
     <li>{me.thing2}</li> 
     <li> {me.thing3}</li>
     <li> {me.thing4}</li> 
     
     </ul>
    
        );
    }
}