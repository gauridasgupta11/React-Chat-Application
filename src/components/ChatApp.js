require('../styles/ChatApp.css');

import React from 'react';
import Messages from './Messages';
import ChatInput from './ChatInput';
import Friend from './Friend';

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] ,
      user: [{
      username:"Harry",
      active:true,
      fromMe: false,
      message: ['Hello']
    }]
  };
    this.sendHandler = this.sendHandler.bind(this);
    this.navHandler = this.navHandler.bind(this);

  }

  sendHandler(message) {
    const messageObject = {
      username: this.props.username,
      message
    };

    messageObject.fromMe = true;
    messageObject.active = true;
    this.addMessage(messageObject);
  }

  FriendList = [
  {
    username:"Harry",
    active:true,
    fromMe: false,
    message: ['Hello']
  },
  {
    username:"Ron",
    active:true,
    fromMe: false,
    message: ['Hello', 'This is Ron.']
  },
  {
    username:"Ginny",
    active:false,
    fromUser: true,
    message: ['Hey']
  },
  {
      username:"Luna",
      active:true,
      fromUser: true,
      message: ['Hey']

    },
    {
      username:"Fred",
      active:false,
      fromUser: true,
      message: ['Hi']
    }

];
  navHandler(username) {
    let user = this.FriendList.filter(friend=>(friend.username === username));
    this.setState({user});
    this.setState({messages: []});

  }

  addMessage(message) {
    // Append the message to the component state
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  };

  render() {

    const friends = this.FriendList.map((friend, i) => {
      return (
        <Friend
        friendname={friend.username}
        active={friend.active}
        fromMe={friend.fromMe}
        onClick={this.navHandler}/>
      );
    });

    return (
      <body>
      <div id="nav" className="column">
      <div className="nav-header">Direct Messages</div>
      <div id="divContent">
        {friends}
      </div>
      </div>

      <section>
        <h3>{this.state.user[0].username}</h3>
        <Messages messages={this.state.user} />
        <Messages messages={this.state.messages} />
        <ChatInput onSend={this.sendHandler} />
        </section>
         </body>




    );
  }



}
ChatApp.defaultProps = {
  username: 'Anonymous'
};

export default ChatApp;
