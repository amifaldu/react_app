import React, { Component } from 'react';
class Welcome extends Component{
  render() {
    return <p>{Student(this.props)}</p>;
  }
}
function Student(stu){
  return (<h2>{stu.first_name}</h2>);
}
//capitalize_Words ex. Faldu
// function capitalize_Words(str)
// {
//  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }
export default Welcome;
