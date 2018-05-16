import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';
import DebitsPage from './DebitsPage';
import CreditsPage from './CreditsPage';

    
class Home extends Component {
  
  render() {

    return (
        <div>
            <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
            <h1>Bank of React</h1>
            <AccountBalance accountBalance={this.props.accountBalance}/>
            <Router>
              <div>
                <div>
                  {/* <Link to="/userProfile">User Profile</Link> */}
                  <Link to="/debitsPage">Debits</Link>
                  <Link to="/creditsPage">Credits</Link>
                </div>  
                <Switch>
                  {/* <Route exact path="/userProfile" render={UserProfile}/>   */}
                  <Route exact path="/debitsPage" render={DebitsPage}/>
                  <Route exact path="/creditsPage" render={CreditsPage}/>
                </Switch>
              </div>  
            </Router>
        </div>
    );
  }
}

export default Home;