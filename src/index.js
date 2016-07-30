import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './App';
import './index.css';

const About = React.createClass({
  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    )
  }
});
const Contact = React.createClass({
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <form>
          <label htmlFor="name">Name</label><input id="name" type="text"/>
        </form>
      </div>
    )
  }
});
const NoMatch = React.createClass({
  render() {
    return (
      <div>
        <h1>No Match</h1>
      </div>
    )
  }
});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
