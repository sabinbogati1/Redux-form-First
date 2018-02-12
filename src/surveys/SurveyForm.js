import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';



const FIELDS = [

  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' },
];

class SurveyForm extends Component {
  renderFields() {

    return _.map(FIELDS, ({ label, name }) => // <-------|
      // return _.map(FIELDS, field=>{ // we replace ---|

      // /   return <Field component={SurveyField} type="text" label={field.label} name={field.name} />
      (
        <Field key={name} component={SurveyField} type="text" label={label} name={name} />
      ),
      //  return (
      // <div>
      //     <Field label="Survey Title" type="text" name="title" component={SurveyField} />
      //     <Field label="Subject Line" type="text" name="subject" component={SurveyField} />
      //     <Field label="Email Body" type="text" name="body" component={SurveyField} />
      //     <Field label="Recipient List" type="text" name="emails" component={SurveyField} />

      // </div>


      //     })


      // );
    )
    ;
  }

  render() {
    return (
      <div>
                SurveyForm!

        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit">SUBMIT </button>
        </form>
      </div>
    );
  }
}


function validate(values) {
  const errors = {};
//   if (!values.title) {
//     errors.title = 'Please provide Title';
//   }

//   if (!values.subject) {
//     errors.title = 'Please provide subject';
//   }

//   if (!values.body) {
//     errors.title = 'Please provide body';
//   }

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
