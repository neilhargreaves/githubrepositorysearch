import React, {Fragment} from 'react';

const Search = () => {
  return (
    <Fragment>
      <div className="ui massive icon input">
        <input type="text" placeholder="Search..."/>
        <i className="search icon"></i>
      </div>
      <button className="large ui button">
        Search
      </button>
    </Fragment>
  );
};

export default Search;
