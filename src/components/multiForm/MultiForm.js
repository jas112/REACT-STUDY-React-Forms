import React, { Component } from 'react';
import './MultiForm.css';

class MultiForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value});
    }

    handleSubmit(evt){
        alert(`username: ${this.state.username} | email: ${this.state.email} | password: ${this.state.password}`);
        this.setState({username: '', email: '', password: ''});
    }
  render() {

    let usernameOutputMarker = '<< USERNAME >>';
    let emailOutputMarker = '<< EMAIL >>';
    let passwordOutputMarker = '<< PASSWORD >>';

    return (
        <div className='MultiForm-Console'>
            <h1>MultiForm</h1>
            <div className='MultiForm-Panel'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username</label><br/>
                    <input 
                        type='text'
                        name='username' 
                        value={this.state.username} 
                        placeholder='username'
                        onChange={this.handleChange} 
                    />
                    <br/>
                    <label htmlFor='email'>Email</label><br/>
                    <input 
                        type='email' 
                        name='email'
                        value={this.state.email}
                        placeholder='email'
                        onChange={this.handleChange}
                    />
                    <br/>
                    <label htmlFor='password'>password</label><br/>
                    <input 
                        type='password' 
                        name='password'
                        value={this.state.password}
                        placeholder='password'
                        onChange={this.handleChange}
                    />
                    <br/><br/>
                    <button type='submit' className='MultiForm-Submit-Button'>Submit</button>
                </form>
            </div>
            <div className='MultiForm-Panel'>
                <h3>{usernameOutputMarker}</h3>
                <p>&nbsp;{this.state.username}&nbsp;</p>
                <h3>{emailOutputMarker}</h3>
                <p>&nbsp;{this.state.email}&nbsp;</p>
                <h3>{passwordOutputMarker}</h3>
                <p>&nbsp;{this.state.password}&nbsp;</p>
            </div>
        </div>
    )
  }
}

export default MultiForm