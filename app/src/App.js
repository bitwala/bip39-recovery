import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Mnemonic from "bitcore-mnemonic";

const toPrivateKey = words => {
  const code = new Mnemonic(words);
  return code.toHDPrivateKey().xprivkey;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      main: "",
      backup: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    try {
      if (this.state.main) {
        prompt("Copy your main key", toPrivateKey(this.state.main));
      }
    } catch (err) {
      alert("Error: Your main passprahse was wrong");
      console.error(err);
    }
    try {
      if (this.state.backup) {
        prompt("Copy your backup key", toPrivateKey(this.state.backup));
      }
    } catch (err) {
      alert("Error: Your backup passprahse was wrong");
      console.error(err);
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <label>
            Main:
            <input
              required
              type="text"
              name="main"
              value={this.state.main}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Backup:
            <input
              required
              type="text"
              name="backup"
              value={this.state.backup}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
