import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewInviteForm from './components/new_invite';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<NewInviteForm />, document.getElementById('inviteContainer'));
registerServiceWorker();
