import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthenticationService from '../../api/AuthenticationService';
import './LoginForm.css';


class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            redirect: false,
        }
        this.service = new AuthenticationService();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        if (this.state.username.length > 0 && this.state.password.length > 0) {
            this.service.login(
                this.state.username, 
                this.state.password, 
                this.onSuccessLogin
            );
        }
    }

    onSuccessLogin = () => {
        this.setState({ redirect: true });
    }
    
    render() {
        if (this.state.redirect) return ( <Redirect to='/' /> );

        return (
            <form onSubmit={ this.onFormSubmit }>
                <div className="loginFormContainer"> 
                    <label htmlFor="username"><b>Username</b></label>
                    <input 
                        className="loginFromInput" 
                        type="text"
                        placeholder="Enter Username" 
                        name="username"
                        autoComplete="new-password"
                        onChange={ this.handleChange }
                        required />

                    <label htmlFor="password"><b>Password</b></label>
                    <input 
                        className="loginFromInput"
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        autoComplete="new-password"
                        onChange={ this.handleChange }
                        required />
                        
                    <button type="submit">
                        Login
                    </button>
                </div>
            </form>
        );
    }

}


export default LoginForm;
