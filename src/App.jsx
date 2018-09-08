import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router';

import Search from './Search';
import SearchResult from './SearchResult';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <h2 className='ui header'>
            <img src='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png' className='ui image'/>
            <div className='content'>GitHub Repository Search</div>
          </h2>
        </header>
        <div className='ui pointing menu'>
          <a className='item'>
            Home
          </a>
          <div className='right menu'>
            <div className='item'>
              <div className='ui transparent icon input'>
                <input type='text' placeholder='Search...'/>
                <i className='search link icon'></i>
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route exact path='/' component={Search}/>
          <Route exact path='/search' component={Search}/>
          <Route path='/searchresult' component={SearchResult}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
