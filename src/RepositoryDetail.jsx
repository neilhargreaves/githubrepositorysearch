import React, {Component} from "react";
import qs from 'qs';
import {getRepositoryDetail, getRepositoryReadme} from './utils/github';
import Loader from './Loader';
import RepositoryInformation from "./RepositoryInformation";

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
          readme: data
        });
      });
  }

  render() {
    return (
      <Loader isLoading={this.state.isLoading}>
        {this.state.error && <div>{this.state.error}</div>}
        {this.state.gitHubRepoData &&
        <div>
          <h2>Header</h2>
          <div className="ui labeled button">
            <div className="ui basic blue button">
              <i className="fork icon"></i> Forks
            </div>
            <p className="ui basic left pointing label">
              forks
            </p>
          </div>
          <div>
            description
          </div>
        </div>
        }
        {this.state.gitHubRepoData &&
        <div>
          <h2>Read Me</h2>
          reeadme
        </div>
        }
      </Loader>
    )
  }
}

export default RepositoryDetail;
