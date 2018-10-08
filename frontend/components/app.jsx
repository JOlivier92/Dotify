import React from 'react';
import SignUpConntainer from './session/signup_container';

export default () => (
  <div>
    <Route path="/chirps" component={ChirpIndexContainer} />
    <Route path="/signup" component={SignUpConntainer} />
  </div>
);
