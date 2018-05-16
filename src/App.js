import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import LogIn from './components/Login';
import UserProfile from './components/UserProfile';
import axios from 'axios';
import {Link} from 'react-router-dom';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },
      debits: [],
      credits: []
    }
  }

  getDebits = () => {
    axios.get('http://localhost:4000/debits').then((response) => {
      const debits = response.data
      this.setState({debits})
    })
  };

  getCredits = () => {
    axios.get('http://localhost:4000/credits').then((response) => {
      const credits = response.data
      this.setState({credits})
    })
  };

  calculateAccountBalance = () => {
    const totalCredits = this.state.credits.reduce((totalCredits, credit) => {
      return totalCredits + credit.amount
    }, 0)

    const totalDebits = this.state.debits.reduce((totalDebits, debit) => {
      return totalDebits + debit.amount
    }, 0)

    return totalCredits - totalDebits
  };

  addNewDebit = (newDebit) => {
    const debits = [...this.state.debits]
    debits.push(newDebit)
    this.setState({debits})
  };

  addNewCredit = (newCredit) => {
    const credits = [...this.state.credits]
    credits.push(newCredit)
    this.setState({credits})
  };

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  };
  
  componentWillMount() {
    this.getDebits()
    this.getCredits()
  }

  render() {
    const accountBalance = this.calculateAccountBalance();
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn}/>);

    return (
        <Router>
          <div>
              <div>
                <Link to="/">Home</Link>
                <Link to="/login">Log In</Link>
                <Link to="/userProfile">User Profile</Link>
              </div>
              <Switch>
                <Route exact path="/" render={HomeComponent}/>
                <Route exact path="/userProfile" render={UserProfileComponent}/>  
                <Route exact path="/login" render={LogInComponent}/>
              </Switch>
          </div>
        </Router>
    );
  }
}


export default App;
