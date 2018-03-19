import React, { Component } from 'react';
import axios from 'axios';

// SubmitInvitation() {
//   axios.post(process.env.REACT_APP_API_URL_DEV + 'invitations', { sender, recipient, message })
//   .then(response => {
//     console.log(response.data);
//   });
// }; 
 
class newInviteForm extends Component {

  SubmitInvitation(sender, recipient, message) {
    axios.post('http://localhost:9000/invitations', { sender, recipient, message })
    .then(response => {
      console.log(response.data);
    });
  };

  render() {
    return (
      <div className="newInviteForm">
        <form>
          <label>
            Sender:
            <input type="email" name="sender" />
          </label>
          <label>
            Recipient:
            <input type="email" name="recipient" />
          </label>
          <label>
            Message:
            <input type="text" name="message" />
          </label>
          <input type="submit" value="Submit" onClick={this.SubmitInvitation.bind(this)} />
        </form>
      </div>
    );
  }
}



export default newInviteForm;