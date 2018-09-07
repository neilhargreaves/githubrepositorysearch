import React, {Component, Fragment} from 'react';

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
        <div className="ui pointing menu">
          <a className="item">
            Home
          </a>
          <div className="right menu">
            <div className="item">
              <div className="ui transparent icon input">
                <input type="text" placeholder="Search..."/>
                <i className="search link icon"></i>
              </div>
            </div>
          </div>
        </div>
        {/*<Switch>*/}
        {/*<Route exact path='/' component={PersonalStatement}/>*/}
        {/*</Switch>*/}
      </Fragment>
    );
  }
}

export default App;
