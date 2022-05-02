import React from "react";
import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import Profile from './components/profile/profile';


export default class App extends React.Component { 

  constructor(props) {
    super(props);

    this.state = {auth: false};

    this.handleLoginChange = this.handleLoginChange.bind(this)
  };

  handleLoginChange(auth) {
    console.log('auth', auth);
    this.setState({auth: auth} );

    console.log('state', this.state.auth);
  }

  render() {
    let pantalla;

    if (this.state.auth === false) {
      pantalla = <Login className="login" onLoginChange={this.handleLoginChange}></Login>;
    } else {
      pantalla = <Profile/>
    }
    return (
      <div className="App">
        {pantalla}
      
        {/*<Login className="login" onLoginChange={this.handleLoginChange}></Login>*/}
  
        {/*<Profile user={{
          name: 'Juan',
          username: 'juanito',
          email: 'adad@gmail.com',
          photo: 'https://picsum.photos/200/300',
        }} />*/}
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </header>*/}
      </div>
    );
  }
}
