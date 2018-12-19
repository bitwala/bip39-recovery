import React, { Component } from "react";
import Mnemonic from "bitcore-mnemonic";
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";

import "./App.css";

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
      alert("Error: Your main passphrase was wrong");
      console.error(err);
    }
    try {
      if (this.state.backup) {
        prompt("Copy your backup key", toPrivateKey(this.state.backup));
      }
    } catch (err) {
      alert("Error: Your backup passphrase was wrong");
      console.error(err);
    }
  }
  render() {
    return (
      <div className="App">
        <div class="container">
          <div class="jumbotron">
            <h1>Bip39 Private Key Recovery tool</h1>
            <p className="jumbotron-paragraph">
              To generate your private keys, please enter your main key 12 word
              list and your backup key 12 word list, ensuring you use a space
              between each word. When it's done click "Generate Keys".
            </p>
          </div>
        </div>
        <main>
          <form
            autocomplete="off"
            className="form"
            onSubmit={this.handleSubmit}
          >
            <FormGroup>
              <ControlLabel>Main key</ControlLabel>
              <FormControl
                required
                type="text"
                name="main"
                value={this.state.main}
                onChange={this.handleChange}
                placeholder="Enter your main key here"
              />
              <ControlLabel>Backup key</ControlLabel>
              <FormControl
                required
                type="text"
                name="backup"
                value={this.state.backup}
                onChange={this.handleChange}
                placeholder="Enter your backup key here"
              />
              <Button
                className="float-right"
                type="submit"
                bsStyle="primary"
                bsSize="large"
              >
                Generate Keys
              </Button>
            </FormGroup>
          </form>
        </main>
      </div>
    );
  }
}

export default App;
