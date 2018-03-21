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
    axios.post('http://localhost:9000/invitations', 
      { 
        sender: sender, 
        recipient: recipient, 
        message: message })
    .then( function(response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
    return (
      <div className="newInviteForm">
        <form>
          <div>
            <label>
              <input type="email" placeholder="sender's email" name="sender" />
              <input type="email" placeholder="recipient's email" name="recipient" />
              <input type="text" placeholder="message" name="message" />
            </label>
            <div>
            <input type="submit" value="Submit" onClick={this.SubmitInvitation.bind(this)} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}



export default newInviteForm;