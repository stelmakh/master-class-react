import React from 'react';
import api from 'lib/api';

export default class ChatInput extends React.Component {
  sendMessage(evt) {
    evt.stopPropagation()
    evt.preventDefault()

    const value = this.refs.input.value
    this.refs.input.value = ""
    const fetchMessages = this.props.fetchMessages.bind(this)
    api.send({from: 'user1', text: value}).then((resp) => {
      fetchMessages();
    })
  }

  render() {
    return (
      <form className="ChatInput" onSubmit={this.sendMessage.bind(this)}>
        <input ref="input" type="text"/>
        <button onClick={this.sendMessage.bind(this)}>Send</button>
      </form>
    );
  }
}
