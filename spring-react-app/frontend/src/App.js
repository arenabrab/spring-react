import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        flexBasis: 200,
    },
});

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: "",
            transactionAmount: "",
            description: "",
            transactionIndex: "",
            getOneResponse: "",
        }
    }

    urlStart = "/add?transactionAmount=";
    urlEnd = "&description=";
    getOne = "/finance?transactionId=";


    handleOneTransaction = () => {
        fetch(this.getOne+this.state.transactionIndex)
            .then(response => response.json())
            .then(message => {
                this.setState({text:message.transactionAmount});
            })
    };

    addToDB = () => {
        fetch(this.urlStart + this.state.transactionAmount + this.urlEnd + this.state.description)
            .then(message => {
                this.setState({addResponse: message});
                console.log(this.state.addResponse)
            });
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value,
        })
    };

  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo"/>
                  <h1 className="App-title">Hello</h1>
              </header>
              <div className={"Top"}>
                  <Grid
                      container
                      className={"Stuff"}
                      spacing={8}
                      direction={"row"}
                      alignItems={"baseline"}>
                      <Grid item>
                          $
                      </Grid>
                      <Grid item>
                          <TextField
                              name={"transactionAmount"}
                              onChange={this.handleChange}
                              label={"Transaction Amount"}/>
                      </Grid>
                  </Grid>


                  {/*<FormControl>*/}
                      {/*<InputLabel>Transaction Amount</InputLabel>*/}
                      {/*<Input*/}
                          {/*name={"transactionAmount"}*/}
                          {/*onChange={this.handleChange}*/}
                          {/*startAdornment={<InputAdornment position={"start"}>$</InputAdornment>}*/}
                      {/*/>*/}
                  {/*</FormControl>*/}
                  <TextField
                      className={"Stuff"}
                      // justify={"flex-start"}
                      label={"Description"}
                      name={"description"}
                      onChange={this.handleChange}
                  />
                  <Button
                      size={"small"}
                      variant={"contained"}
                      color={"primary"}
                      onClick={this.addToDB}
                  >
                      Add to DB
                  </Button>
              </div>
              <div>
                  <Input
                      label={"Index"}
                      name={"transactionIndex"}
                      value={this.state.transactionIndex}
                      onChange={this.handleChange}
                  />

                  <Button
                      size={"small"}
                      variant={"contained"}
                      color={"primary"}
                      onClick={() => {
                          this.handleOneTransaction()
                      }}>
                      Get index
                  </Button>
              </div>
              <div>
                  <text>{this.state.text}</text>
              </div>
          </div> 
      );
  }
}

export default App;
