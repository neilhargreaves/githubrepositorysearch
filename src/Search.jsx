import React, {Component, Fragment} from 'react';
import SearchButton from "./SearchButton";
import {withRouter} from "react-router";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleEnterKeypress = this.handleEnterKeypress.bind(this);
  }

  handleSearchChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  handleEnterKeypress = (e) => {
    if (e.keyCode === 13) {
      const history = this.props.history;
      const searchTerm = this.state.searchTerm;
      history.push(`/searchresult?searchterm=${searchTerm}`)
    }
  };

  render() {
    return (
      <Fragment>
        <div className="ui massive icon input search-container">
          <input
            type="text"
            placeholder="Search..."
            value={this.state.searchTerm}
            onChange={this.handleSearchChange}
            onKeyUp={this.handleEnterKeypress}
          />
          <i className="search icon"></i>
        </div>
        <div className="button-container">
          <SearchButton searchTerm={this.state.searchTerm}/>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Search);


