import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class Contact extends Component {
    state = {  }
    render() {
        return (
            <div>
              <form>
                <TextField
                  label="First Name"
                  margin="normal"
                />
                <TextField
                  label="Middle Initial"
                  margin="normal"
                />
                <TextField
                  label="Last Name"
                  margin="normal"
                />
                <TextField
                  label="Email"
                  margin="normal"
                />
                <TextField
                  label="Address"
                  margin="normal"
                />
                <TextField
                  label="City"
                  margin="normal"
                />
                <TextField
                  label="State"
                  margin="normal"
                />
                <TextField
                  label="Zip"
                  margin="normal"
                />
                <TextField
                  label="Phone"
                  margin="normal"
                />
              </form>
            </div>
         );
    }
}

export default Contact;