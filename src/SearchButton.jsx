import React from 'react';
import {withRouter} from 'react-router-dom'

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