// The render() function does the job of returning the jsx 
// that we wish to render in our application for this particular component.

import React, { Component } from "react";
import "./ChatHistory.scss";
import Message from '../Message/Message';

class ChatHistory extends Component {
  render() {
    console.log(this.props.chatHistory);
    const messages = this.props.chatHistory.map(msg => <Message message={msg.data} />);

    return (
      <div className='ChatHistory'>
        <h2>Chat History</h2>
        {messages}
      </div>
    );
  };
}

export default ChatHistory;