import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Please Log in to Continue</h1>
          <form>
            <label>
              Name:
              <input type="text" name="email" />
              Password:
              <input type="password" name="password" />

            </label>
            <input type="submit" value="Submit" />
          </form>
        </header>
        <p className="App-intro">
         
        </p>
      </div>
    );
  }
}

export default App;
