import React, {Component, Fragment} from 'react';
import SearchButton from "./SearchButton";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
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

export default Search;


