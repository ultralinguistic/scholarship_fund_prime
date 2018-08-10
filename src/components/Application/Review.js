import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { submitApplication } from '../../redux/actions/applicantActions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  apps: state.admin.adminApplication,
});

class Review extends Component {
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

  submitApplication = () => {
    this.props.dispatch(submitApplication())
  }

    render() {
      return (
        <div>
        <div className="top">
        <h1>Review</h1>
        <h3>Personal Information</h3>
        <ul className="sub">
            <li>Add questions and current inputs</li>
        </ul>

        <h3>Income & Expenses</h3>
        <ul className="sub">
            <li>Add questions and current inputs</li>
        </ul>
        <Button onClick={this.submit}></Button>

        </div>
      </div>
      );
    }
}

export default connect(mapStateToProps)(Review);
