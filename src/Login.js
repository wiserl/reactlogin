import React, { Component } from 'react';

class Person extends Component {

  constructor(props) {
    super(props);
    this.state = { ...props.person };
  }
  render() {
    return (
      <form onSubmit={e => {
        e.preventDefault();

        console.log('State', this.state);
        console.log('Props', this.props.person);


        this.props.onPersonSaved(this.state);
      }}>
    
      
        
          <input type="text" placeholder=" First Name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} required minLength="3" />
        
        
          <input type="text" placeholder="Last Name" value={this.state.lastName} onChange={e => this.setState({ lastName: e.target.value })} required minLength="3" />
        
        <div>
            <label for="email">E-mail:</label>
            <input type="text" id="mail" name="user_mail" placeholder="name@name.com" required/>
        </div>
        
        <div>
            <label for="Password">Password: </label>
            <input type="Password" pattern=".{9,}" maxlength="30" id="Password" name="password" placeholder="Your password here" required/>
        </div>
        <div>
           
        <label for="color">Pick a color:</label>
            <input type="color" id="color" name="color"  required/>
            
        </div>
        
        <div>
            <label for="date">date:</label>
            <input type="date" id="date" name="date" placeholder="Today" required/>
        </div>
        <div>
            <label for="check this!">click me:</label>
            <input type="checkbox" id="check this" name="check this" required/>
        </div>
        
        <div>
    
            <label for="file">upload:</label>
            <input type="file" id="file" name="file" placeholder="upload file!" required/>
       </div>

        
        <select name ="select one">
            <option value="1">1</option>
            <option value="2">2</option>
            </select>

        
          <button type="submit">Submit</button>
        
      </form>
    )
  }
}
export default Person;