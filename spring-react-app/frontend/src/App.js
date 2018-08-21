import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
    constructor(props){
        super(props);
    }

    urlStart = "/add?transactionAmount=";
    urlEnd = "&description=";
    getOne = "/finance?transactionId=";
    state = {};

    handleOneTransaction = () => {
        fetch(this.getOne+this.state.transactionIndex)
            .then(response => response.json())
            .then(message => {
                this.setState({message: message});
                console.log(message);
            });
    };

    addToDB = () => {
        fetch(this.urlStart + this.state.transactionAmount + this.urlEnd + this.state.description)
            .then(message => {
                this.setState({textResponse: message});
                console.log(this.state.textResponse)
            });
    };

    handleSubmit = (event) => {
        alert(this.state.transactionAmount + " " + this.state.description);
        event.preventDefault();
    };

    handleOneChange = (event) => {
        let input1 = event.target.value;
        this.setState({
            transactionAmount: input1
        });
    };

    handleTwoChange = (event) => {
        let input1 = event.target.value;
        this.setState({
            description: input1
        });
    };

    handleThreeChange = (event) => {
        let input = event.target.value;
        this.setState({
            transactionIndex: input
        });
    };



  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo"/>
                  <h1 className="App-title">Hello</h1>
              </header>
              <div>
                  <form onSubmit={this.handleSubmit}>
                      <div>
                          <label>Transaction Amount
                              <input type={"text"} value={this.state.value} onChange={this.handleOneChange}/>
                          </label>
                      </div>
                      <div>
                          <label>Description
                              <input type={"text"} value={this.state.value} onChange={this.handleTwoChange}/>
                          </label>
                      </div>
                      <div>
                          <label>Index
                              <input type={"text"} value={this.state.value} onChange={this.handleThreeChange}/>
                          </label>
                      </div>
                  </form>
              </div>
              <div>
                  <Button variant={"contained"} onClick={this.addToDB}>Add to DB</Button>
              </div>
              <div>
                <Button onClick={() => {this.handleOneTransaction()}}>Get id 1</Button>
              </div>
              <div>
                  <text>{this.state.transactionAmount}</text>
              </div>
          </div> 
      );
  }
}

export default App;
