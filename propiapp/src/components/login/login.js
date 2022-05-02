import React from "react";
import "./login.css";

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {username: '',
                      password: '',
                      // auth: false
                    };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        this.login();
        event.preventDefault();
    }

    login() {
        if(this.state.username === 'user' && this.state.password === 'pass') {
            // this.setState({auth: true});
            this.props.onLoginChange(true);
        }
    }

    render() {
            return (
                <div className="login-container">
                    <h1 className="login-title">LogIn</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="login-input">
                            <div className="input-container">
                                <label className="input-label">Username</label>
                                <input className="input-data"
                                    type="text"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}/>
                            </div>
                            <div className="input-container">
                                <label className="input-label">Password</label>
                                <input className="input-data"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}/>
                            </div>
                            <div className="input-button">
                                <input type="submit" value="Submit"/>
                            </div>
                        </div>
                        
                    </form>
                </div>
            );        
    }


}