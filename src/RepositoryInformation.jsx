import React from 'react';

const RepositoryInformation = ({repos}) => {
  return (
    <div className="ui grid">
      {
        repos.map((repo, key) => {
          return (
            <div key={key} className="eight wide column">
              <h3 className="header">{repo.name}</h3>
              <p>{repo.description}</p>
              <a href={`/repositorydetail?githubapi=${repo.apiUrl}`} className="ui primary button">
                View Detail
              </a>
            </div>
          )
        })
      }
    </div>
  );
};

export default RepositoryInformation;