import React from 'react';

export default class ChatMessage extends React.Component {
  render() {
    const message = this.props.message;

    return (
      <div className="ChatMessage">
        <div className="ChatMessage-from">{message.from}</div>
        <div className="ChatMessage-text">{message.text}</div>
      </div>
    );
  }
}
