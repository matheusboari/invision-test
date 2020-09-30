import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import '../sass/app.scss';

import Google from '../assets/google_logo.svg';

const schema = Yup.object().shape({
  email: Yup.string().email('E-mail.').required('This field can not be empty.'),
  password: Yup.string().required('This field can not be empty.'),
});

function Signin() {
  return (
    <div className="signin_form">
      <h1 className="form_title">Welcome to Invision</h1>

      <Form className="form_component" schema={schema}>
        <span className="input_label">Users name or Email</span>
        <Input
          className="form_input"
          name="email"
          type="email"
          placeholder="E-mail"
        />
        <span className="input_label">Password</span>
        <Input
          className="form_input"
          name="password"
          type="password"
          placeholder="Your password"
        />
        <span className="form_forgot">Forgot password?</span>

        <button className="form_button" type="submit">
          Sign in
        </button>

        <div className="form_divider">
          <span className="divider_text">or</span>
        </div>

        <button className="google_button" type="button">
          <img className="google_logo" src={Google} alt="google_logo" />
          Sign in with Google
        </button>
      </Form>
    </div>
  );
}

export default Signin;
