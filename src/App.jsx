import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router';

import Search from './Search';
import SearchResult from './SearchResult';
import RepositoryDetail from "./RepositoryDetail";

import './css/App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <h2 className='ui header'>
            <img
              src='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'
              className='ui image'
              alt='GitHub Logo'
            />
            <div className='content'>GitHub Repository Search</div>
          </h2>
        </header>
        <div className='ui pointing menu'>
          <a href='/search' className='item'>
            Search
          </a>
        </div>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Search}/>
            <Route exact path='/search' component={Search}/>
            <Route path='/searchresult' component={SearchResult}/>
            <Route path='/repositorydetail' component={RepositoryDetail}/>
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;
