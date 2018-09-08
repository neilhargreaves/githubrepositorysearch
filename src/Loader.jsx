import React from 'react';

const Loader = ({children, isLoading = true}) => {
  if (isLoading)
    return (
      <div className="ui segment">
        <div className="ui active inverted dimmer">
          <div className="ui large text loader">Loading</div>
        </div>
      </div>
    );

  return children;
};

export default Loader;