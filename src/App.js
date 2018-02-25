import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import logo from './logo.svg';
import './App.css';

let SignInForm = props => {
  const { handleSubmit } = props;
  return <form onSubmit={handleSubmit} className="form">
    <div className="field">
      <div className="control">
        <label className="label">First Name</label>
        <Field className="input" name="firstName" component="input" type="text" placeholder="First Name"/>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="label">Last Name</label>
        <Field className="input" name="lastName" component="input" type="text" placeholder="Last Name"/>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="label">Email</label>
        <Field className="input" name="email" component="input" type="email" placeholder="Email Address"/>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="label">Proficiency</label>
        <div className="select">
          <Field className="input" name="proficiency" component="select">
            <option />
            <option value="beginner">Beginner Dev</option>
            <option value="intermediate">Intermediate Dev</option>
            <option value="expert">Expert Dev</option>
          </Field>
        </div>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="label">Age</label>
        <Field className="input" name="age" component="input" type="number" placeholder="Age"/>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="label">Gender</label>
        <label className="radio">
          <Field name="gender" component="input" type="radio" value="male" />
          {' '}
          Male
        </label>
        <label className="radio">
          <Field name="gender" component="input" type="radio" value="female" />
          {' '}
          Female
        </label>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="checkbox">
          <Field name="saveDetails" id="saveDetails" component="input" type="checkbox"/>
          Save Details
        </label>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="label">Message</label>
        <Field className="textarea" name="message" component="textarea" />
      </div>
    </div>

    <div className="field">
      <div className="control">
        <button className="button is-link">Submit</button>
      </div>
    </div>

  </form>;
};

SignInForm = reduxForm({
  form: 'signIn',
})(SignInForm);

class App extends Component {
  handleSignIn = values => {
    console.log(values);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React x redux-form</h1>
        </header>
        <div className="container">
          <p className="App-intro">
            Contact Form
          </p>
          <SignInForm onSubmit={this.handleSignIn} />
        </div>
      </div>
    );
  }
}

export default App;
