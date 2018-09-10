import React from 'react';
import {withRouter} from 'react-router-dom'

const BackButton = withRouter(({history}) => (
  <button
    className="small ui button"
    type='button'
    onClick={() => {
      history.goBack()
    }}
  >
    Back To Search Results
  </button>
));

export default BackButton;