import React,{Component} from "react";
import {reduxForm, Field} from "redux-form";
import SurveyField from "./SurveyField";

class SurveyForm extends Component{
    renderFields(){
        return (
            <div>
                <Field type="text" name="title" component={SurveyField} />

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

export default reduxForm({
    form:"surveyForm"
})(SurveyForm);