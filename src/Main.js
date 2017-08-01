import React, {Component} from 'react';
import './main.css';
class Main extends Component {
    render(){
        return(
            <nav className = "navbar navbar-inverse">
              <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">Home</a>
                    <a className="navbar-brand" href="/details">Details</a>
                    <a className="navbar-brand" href="/about">About</a>
                </div>
              </div>
             </nav>
        );
    }
}
export default Main
