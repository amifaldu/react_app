import React, { Component } from 'react';
//import text and view
//import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Clock from './Clock';
import Toggle from './Toggle';
import Greeting from './Greeting';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to {Student(stu)}</h2>
        </div>
        <p className="App-intro">
          <Clock />
          <Welcome first_name ="image" />
          //<Greeting isLoggedIn={false} />
          <Toggle />
          {element}
        </p>
      </div>
    );
  }
}
const stu = {
  first_name: 'ami',
  last_name: 'patel'
};
const user = {
  avatarUrl: 'http://www.gettyimages.com.au/gi-resources/images/Embed/new/embed2.jpg',
};
const ele = < Welcome name = "Thinkbiz"/>;
const element = <p>{Student(stu)} <img src={user.avatarUrl} />{ele}</p>;
function Student(stu) {
  return stu.first_name + ' '+stu.last_name;
}
// function tick() {
//
//   );
// }
// setInterval(tick, 1000);
//   function Clock(props) {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }


export default App;
