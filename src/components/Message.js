import React from 'react';

class Message extends React.Component {
  render() {
    // Was the message sent by the current user. If so, add a css class
    const fromMe = this.props.fromMe ? 'from-me' : 'from-user';
    let messages;

    if(Array.isArray(this.props.message)) {
      messages = this.props.message.map((msg, i) => {
        return (
          <div className='message-body'>
            { msg }
          </div>
        );
      });
    } else {
      messages = <div className='message-body'>
        { this.props.message }
      </div>;
    }


    return (
      <div className={`message ${fromMe}`}>
        <div className='username'>
          { this.props.username }
        </div>
        <div className="messageStyle">
        {messages}
        </div>
      </div>
    );
  }
}

Message.defaultProps = {
  message: '',
  username: '',
  fromMe: false
};

export default Message;
