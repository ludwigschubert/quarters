import React from 'react';
import ReactDOM from 'react-dom';
import Parse from 'parse';
import ParseReact from 'parse-react';

import Main from './Main.jsx';

let LoginWrapper = React.createClass({
  mixins: [ParseReact.Mixin],

  getInitialState: function() {
    return {
      error: null,
      signup: false
    };
  },

  observe: function() {
    return {
      user: ParseReact.currentUser
    };
  },

  render: function() {
    if (this.data.user) {
      return (
        <Main />
      );
    }
    return (
      <div>
        <h1>Quarters</h1>
        <h2>Powered by Parse + React</h2>
        <div className='loginForm' onKeyDown={this.keyDown}>
          {
            this.state.error ?
            <div className='row centered errors'>{this.state.error}</div> :
            null
          }
          <div className='row'>
            <label htmlFor='username'>Username</label>
            <input ref='username' id='username' type='text' />
          </div>
          <div className='row'>
            <label htmlFor='password'>Password</label>
            <input ref='password' id='password' type='password' />
          </div>
          <div className='row centered'>
            <a className='button' onClick={this.submit}>
              {this.state.signup ? 'Sign up' : 'Log in'}
            </a>
          </div>
          <div className='row centered'>
            or&nbsp;
            <a onClick={this.toggleSignup}>
              {this.state.signup ? 'log in' : 'sign up'}
            </a>
          </div>
        </div>
      </div>
    );
  },

  submit: function() {
    var self = this;
    var username = ReactDOM.findDOMNode(this.refs.username).value;
    var password = ReactDOM.findDOMNode(this.refs.password).value;
    if (username.length && password.length) {
      if (this.state.signup) {
        console.log('signup');
        var u = new Parse.User({
          username: username,
          password: password
        });
        u.signUp().then(function() {
          self.setState({
            error: null
          });
        }, function() {
          self.setState({
            error: 'Invalid account information'
          });
        });
      } else {
        Parse.User.logIn(username, password).then(function() {
          self.setState({
            error: null
          });
        }, function() {
          self.setState({
            error: 'Incorrect username or password'
          });
        });
      }
    } else {
      this.setState({
        error: 'Please enter all fields'
      });
    }
  },

  keyDown: function(e) {
    if (e.keyCode === 13) {
      this.submit();
    }
  },

  toggleSignup: function() {
    this.setState({
      signup: !this.state.signup
    });
  }

});

export default LoginWrapper;
//
// let Main = React.createClass({
//
//   getInitialState: function() {
//     return {selectedPatron: null};
//   },
//
//   _selectPatron: function(patron) {
//     this.setState({selectedPatron: patron});
//   },
//
//   render() {
//     const selectedPatron = this.state.selectedPatron;
//
//     var mainBody;
//     if (selectedPatron) {
//       mainBody = <PatronBody patron={selectedPatron}/>
//     }
//
//     return(
//       <div id="main">
//         <PatronsList selectPatronCallback={this._selectPatron} selectedPatron={selectedPatron}/>
//         {mainBody}
//       </div>
//     );
//   }
// });
//
// export default Main;