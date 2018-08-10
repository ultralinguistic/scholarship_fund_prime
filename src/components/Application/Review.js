import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { submitApplication } from '../../redux/actions/applicantActions';
import { connect } from 'react-redux';
import { getApplicant } from '../../redux/actions/applicantActions';


const mapStateToProps = state => ({
  applicant: state.applicant,
});

class Review extends Component {

  handleChange = name => event => {
    console.log(this.state.Fax);
    this.setState({
      [name]: event.target.value
    });
  };

  componentDidMount() {
    this.props.dispatch(getApplicant());
  }

  componentDidUpdate() {
    this.validateApplication(this.props.applicant);
  }

  validateApplication = (data) => {
    // const valueMap = new Map();
    // valueMap.set("gender", "Gender");
    // valueMap.set("accepted_at_prime": "Accepted at Prime");
    // valueMap.set("address_line_1": "Address Line 1");
    // valueMap.set("address_line_2": "Address Line 2");
    // valueMap.set("adjusted_gross_income": "Adjusted Gross Income");
    // valueMap.set("age": "Age");
    // valueMap.set("applied_at_prime": "Applied at Prime");
    // valueMap.set("applied_for_msp": "Applied for MSP");
    // valueMap.set("childcare": "ChildCare Expenses");
    // valueMap.set("city": "City");
    // valueMap.set("dependents": "Dependents");
    // valueMap.set("email": "Email");
    // valueMap.set("employed_during_prime": "Employed During Prime");
    // valueMap.set("filing_status": "FilingStatus");
    // valueMap.set("first_name": "First Name");
    // valueMap.set("government_assistance": "Government Assistance");
    // valueMap.set("government_assistance_notes": "Government Assistance Notes");

    let unFilledValues = [];
    for (let props in data) {
      if (data[props] === '' || data[props] === null) {
        unFilledValues.push(props);
      }
    }
    unFilledValues = unFilledValues.map(x => x.split('_'));
    unFilledValues = unFilledValues.map(x => x[0][0].toUpperCase() + x[0].substring(1));
    // unFilledValues.push(valueMap.get(props));

    console.log(unFilledValues);
  }

  review = () => {

  }

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
        <Button onClick={this.review}>Submit Application</Button>

        </div>
      </div>
      );
    }
}

export default connect(mapStateToProps)(Review);
