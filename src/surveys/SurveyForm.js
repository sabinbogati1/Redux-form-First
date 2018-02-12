import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import validateEmails from "./../utils/validateEmails";



const FIELDS = [

  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' },
];

class SurveyForm extends Component {
  renderFields() {

    return _.map(FIELDS, ({ label, name }) =>(
        <Field key={name} component={SurveyField} type="text" label={label} name={name} />
      )
    )
    ;
  }

  render() {
    return (
      <div>
                SurveyForm!

        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <button type="submit">SUBMIT </button>
        </form>
      </div>
    );
  }
}


function validate(values) {
  const errors = {};

errors.emails = validateEmails(values.emails || "");

_.each(FIELDS,({name})=>{
        if(!values[name]){
            errors[name]= "You must provide a value"
        }
})


  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
})(SurveyForm);
