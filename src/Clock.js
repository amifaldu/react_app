import React, { Component } from 'react';
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <p>Welcome {Student(stu)}<b><br></br>Time:</b> {this.state.date.toLocaleTimeString()}.</p>
        {element}
      </div>
    );
  }
}
const stu = {
  first_name: 'ami',
  last_name: 'Faldu'
};
const user = {
  avatarUrl: 'http://www.gettyimages.com.au/gi-resources/images/Embed/new/embed2.jpg',
};
const element = <p><img src={user.avatarUrl} /></p>;
function Student(stu) {
  return stu.first_name + ' '+stu.last_name;
}
export default Clock;
