import React, {Component, Fragment} from 'react';

import Loader from './Loader';

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      gitHubRepoData: []
    };
  }

  componentDidMount() {
    // getUserRepos('neilhargreaves')
    //   .then(data => {
    //     if (data.error)
    //       return;
    //
    //     this.setState({
    //       isLoading: false,
    //       gitHubRepoData: data
    //     });
    //   });
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <Fragment>
        <h4 className="ui header">
          <i className="search icon"></i>
          <div className="content">
            Search Results
          </div>
        </h4>
        <Loader isLoading={this.state.isLoading}>
          <div>Hello world</div>
        </Loader>
      </Fragment>
    )
  }
}

export default SearchResult;