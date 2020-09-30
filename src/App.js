import React, { useState } from 'react';
import './sass/app.scss';

import Slider from './components/slider';
import Signin from './components/signin';

function App() {
  const [signin, setSignin] = useState(true);

  return (
    <div className="app">
      <Slider />
      <div className="forms_card">
        <h1 className="forms_logo">Invision</h1>
        <Signin />
        <div className="forms_bottom">
          {signin ? (
            <span>
              New <strong>Invision</strong>?{' '}
              <button
                type="button"
                onClick={() => setSignin(false)}
                className="bottom_button"
              >
                Create Account
              </button>
            </span>
          ) : (
            <span>
              Already on <strong>Invision</strong>?{' '}
              <button
                type="button"
                onClick={() => setSignin(true)}
                className="bottom_button"
              >
                Log in
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
