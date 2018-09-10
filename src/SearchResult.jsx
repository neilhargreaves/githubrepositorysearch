import React, {Component, Fragment} from 'react';
import qs from 'qs';

import {repositorySearch} from './utils/github';

import Loader from './Loader';
import RepositoryInformation from "./RepositoryInformation";

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      gitHubRepoData: {},
      error: ''
    };
  }

  componentDidMount() {
    if (!this.props.location.search) {
      this.setState({
        isLoading: false,
        error: 'No Search Parameter Provided'
      });

      return;
    }

    const searchParams = qs.parse(this.props.location.search.replace('?', ''));

    repositorySearch(searchParams.searchterm)
      .then(data => {
        if (data.error) {
          this.setState({
            isLoading: false,
            error: data.error
          });

          return;
        }

        this.setState({
          isLoading: false,
          gitHubRepoData: data
        });
      });
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
        <div>
          <Loader isLoading={this.state.isLoading}>
            {this.state.error && <div>{this.state.error}</div>}
            {this.state.gitHubRepoData &&
            <div>
              <p>Results: {this.state.gitHubRepoData.hits}</p>
              <RepositoryInformation repos={this.state.gitHubRepoData.items}/>
            </div>
            }
          </Loader>
        </div>
      </Fragment>
    )
  }
}

export default SearchResult;