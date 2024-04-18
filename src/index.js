console.log('Initializing Parcel boilerplate with Material Design...');

import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { Icon } from "@material/mwc-icon";
import "@material/mwc-switch";

const App = () => {
  return (
    <Button variant="contained">Contained</Button>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

