import React from 'react';
import RepositoryDetailedInformation from "./RepositoryDetailedInformation";

const RepositoryInformation = ({repos}) => {
  return (
    <div className="ui divided items">
      {
        repos.map((repo, key) => {
          return (
            <RepositoryDetailedInformation key={key} repo={repo} readme="true"/>
          )
        })
      }
    </div>
  );
};

export default RepositoryInformation;