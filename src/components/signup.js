import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import '../sass/app.scss';

import Google from '../assets/google_logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('This field can not be empty.'),
  email: Yup.string().email('E-mail.').required('This field can not be empty.'),
  password: Yup.string().required('This field can not be empty.'),
});

function Signin() {
  return (
    <div className="signin_form">
      <h1 className="form_title">Getting Started</h1>

      <Form className="form_component" schema={schema}>
        <span className="input_label">Full Name</span>
        <Input
          className="form_input"
          name="name"
          type="text"
          placeholder="Name"
        />
        <span className="input_label">Users name or Email</span>
        <Input
          className="form_input"
          name="email"
          type="email"
          placeholder="E-mail"
        />
        <span className="input_label">Create Password</span>
        <Input
          className="form_input"
          name="password"
          type="password"
          placeholder="Your password"
        />

        <button className="form_button" type="submit">
          Sign up
        </button>

        <div className="form_divider">
          <span className="divider_text">or</span>
        </div>

        <button className="google_button" type="button">
          <img className="google_logo" src={Google} alt="google_logo" />
          Sign up with Google
        </button>

        <p className="form_condition">
          By signing up, you agree to <strong>Invision</strong>{' '}
          <span className="bottom_button">Terms of Conditions</span> and{' '}
          <span className="bottom_button">Privacy Policy</span>
        </p>
      </Form>
    </div>
  );
}

export default Signin;
