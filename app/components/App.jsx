import React from 'react';
import ChatList from './ChatList';
import ChatInput from './ChatInput';
import api from 'lib/api';

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      messages: {list: []}
    }
  }

  componentWillMount() {
    this.fetchMessages()
  }

  fetchMessages() {
    api.get().then((result) => this.setState({messages: result}))
  }

  render() {
    const messages = this.state.messages.list;
    console.log(messages);

    return (
      <div className="App">
        <ChatList messages={messages}/>
        <ChatInput fetchMessages={this.fetchMessages.bind(this)}/>
      </div>
    );
  }
}
