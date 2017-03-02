import React from 'react';
import ChatMessage from './ChatMessage';

export default class ChatList extends React.Component {
  render() {
    const messagesList = this.props.messages.map((item) => {
      return <ChatMessage message={item}/>
    })

    return (
      <div className="ChatList">
        {messagesList}
      </div>
    );
  }
}
