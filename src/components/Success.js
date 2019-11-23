import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    //process form //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data"></AppBar>
          <h1>Thank You For Your Submission</h1>
          <p>You Will Gat email with further instruction</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
