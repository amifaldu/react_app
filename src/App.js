import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle';
import Main from './Main';
import Car from './Car';
import Clock from './Clock';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Main />
          <Route exact path="/" component={Clock}/>
          <Route path="/details" component={Car}/>
          <Route path="/about" component={Toggle}/>
        </div>
      </Router>
    );
  }
}
// const stu = {
//   first_name: 'ami',
//   last_name: 'patel'
// };
// const user = {
//   avatarUrl: 'http://www.gettyimages.com.au/gi-resources/images/Embed/new/embed2.jpg',
// };
// const element = <p>{Student(stu)} <img src={user.avatarUrl} /></p>;
// function Student(stu) {
//   return stu.first_name + ' '+stu.last_name;
// }
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
