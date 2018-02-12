import React,{Component} from "react";
import {reduxForm, Field} from "redux-form";
import SurveyField from "./SurveyField";

class SurveyForm extends Component{
    renderFields(){
        return (
            <div>
                <Field label="Survey Title" type="text" name="title" component={SurveyField} />
                <Field label="Subject Line" type="text" name="subject" component={SurveyField} />
                <Field label="Email Body" type="text" name="body" component={SurveyField} />
                <Field label="Recipient List" type="text" name="emails" component={SurveyField} />

            </div>
        );
    }

    render(){
        return(
            <div>
                SurveyForm!

                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                {this.renderFields()}
               <button type="submit">SUBMIT </button>
                </form>
            </div>
        )
    }
}


function validate(values){
        const errors={};
        if(!values.title){
            errors.title="Please provide Title";
        }

        return errors;
}

export default reduxForm({
    validate,
    form:"surveyForm"
})(SurveyForm);