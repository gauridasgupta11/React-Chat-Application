import React from 'react';

class Friend extends React.Component {
  constructor(props) {
    super(props);

this.clickHandler = this.clickHandler.bind(this);
}

clickHandler(event){
event.preventDefault();
  this.props.onClick(event.target.textContent);

  }

  render() {
    let activeClass = '';
      const friendname = this.props.friendname;
      if (this.props.active) {

        activeClass = 'online';

      } else {
        activeClass = 'offline';
      }

      return (
        <div className="userContent" onClick={this.clickHandler} >
          <div className={activeClass}></div>
        <span>
            { this.props.friendname }
        </span>

        
        </div>

      );

    }
}

Friend.defaultProps = {
  friendname:'',
  active:false,
  fromMe:false,
};

export default Friend;
