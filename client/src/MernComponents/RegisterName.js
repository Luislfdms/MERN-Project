import {React, useState, Component} from 'react'
import RegisterName from "./RegisterName";
import RegisterUserName from "./RegisterUserName";
import Confirmation from './Confirmation';
import Success from './Success';
import "./Register.css";
import {Routes, Route} from "react-router-dom";

export default class RegisterPage extends Component {
  
  state = {
    step: 1,
    email: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state;
    const { email, username, password, firstName, lastName } = this.state;
    const values = { email, username, password, firstName, lastName };
  
    switch (step) {
      case 1:
        return (
          <RegisterName
            nextStep = { this.nextStep }
            handleChange = { this.handleChange }
            values = { values }
          />
        )
      case 2:
        return (
          <RegisterUserName 
            prevStep = { this.prevStep }
            nextStep = { this.nextStep }
            handleChange = { this.handleChange }
            values = { values }
          />
        )
      case 3:
        return (
          <Success 
            values = { values }
          />
        )
      default:
    }
  }
}