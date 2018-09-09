import React, {Component} from "react";
import qs from 'qs';
import Markdown from 'react-markdown';

import {getRepositoryDetail, getRepositoryReadme} from './utils/github';
import Loader from './Loader';
import RepositoryDetailedInformation from "./RepositoryDetailedInformation";

class RepositoryDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      gitHubRepoData: {},
      readme: '',
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

    getRepositoryDetail(searchParams.githubapi)
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

    getRepositoryReadme(searchParams.githubapi)
      .then(data => {
        if (data.error) {
          return;
        }

        this.setState({
          readme: data.readme
        });
      });
  }

  render() {
    return (
      <Loader isLoading={this.state.isLoading}>
        {this.state.error && <div>{this.state.error}</div>}
        {this.state.gitHubRepoData &&
        <div className="ui divided items">
          <RepositoryDetailedInformation repo={this.state.gitHubRepoData}/>
        </div>
        }
        {this.state.readme &&
        <div>
          <h2>Read Me</h2>
          <Markdown source={this.state.readme} />
        </div>
        }
      </Loader>
    )
  }
}

export default RepositoryDetail;
