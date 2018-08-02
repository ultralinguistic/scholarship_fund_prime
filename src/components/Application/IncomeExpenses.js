import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

class IncomeExpenses extends Component {
    state = {
      Fax: '',
      doughnuts: '',
      dinosaurs: '',
      hamster: '',
     }

  handleChange = name => event => {
    console.log(this.state.Fax);
    this.setState({
      [name]: event.target.value
    });
  };

    render() {
      return (
        <div>
        <Paper className="grid-3">
        <div className="top">
        <h3>Income & Expenses</h3>
        <TextField
            label="Fax"
            value={this.state.Fax}
            onChange={this.handleChange('Fax')}
          />
          <TextField
            label="How much do you like doughnuts?"
            value={this.state.doughnuts}
          />
          <TextField
            label="How important are dinosaurs to your personal life?"
            value={this.state.dinosaurs}
          />
          <TextField
            label="When murdering ewoks, how often do you think about your pet hamster?"
            value={this.state.hamster}
          />
        </div>
        </Paper>
      </div>
      );
    }
}

export default IncomeExpenses;