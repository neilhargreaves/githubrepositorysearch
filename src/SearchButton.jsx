import React from 'react';
import {withRouter} from 'react-router-dom'
// this also works with react-router-native

const SearchButton = withRouter(({history, searchTerm}) => (
  <button
    className="large ui button"
    type='button'
    onClick={() => {
      history.push(`/searchresult?searchterm=${searchTerm}`)
    }}
  >
    Search
  </button>
));

export default SearchButton;