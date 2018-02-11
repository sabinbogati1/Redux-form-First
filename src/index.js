import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers, applyMiddleware } from "redux";
import {reducer as formReducer} from "redux-form";
import { Provider } from 'react-redux';
//import App from './App';
//import ContactForm from "./ContactForm";
//import ContactPage from "./ContactPage";
import  SurveyNew from "./surveys/SurveyNew";


const rootReducer = combineReducers({
    form: formReducer
  });

const createStoreWithMiddleware = applyMiddleware()(createStore);
ReactDOM.render(
<Provider store={createStoreWithMiddleware(rootReducer)}>
<SurveyNew/>
</Provider>
, document.getElementById('root'));
