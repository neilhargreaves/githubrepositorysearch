import React from "react";

const RepositoryDetailedInformation = ({repo, readme}) => {
  return (
    <div className="item">
      <div className="content">
        <h2>
          <a href={repo.htmlUrl} target="_blank" className="ui left floated">
            {repo.name}
          </a>
          <a href={repo.owner.htmlUrl} target="_blank"
             className="ui right floated"> {repo.owner.login}</a>
        </h2>
        <div className="description" style={{clear: 'both'}}>
          <p>{repo.description}</p>
        </div>
        <div className="ui mini statistics">
          <div className="ui small statistic">
            <div className="value">
              {repo.forks}
            </div>
            <div className="label">
              <i className="fork icon"></i> Forks
            </div>
          </div>
          <div className="ui small statistic">
            <div className="value">
              {repo.watchers}
            </div>
            <div className="label">
              Watchers
            </div>
          </div>
          <div className="ui small statistic">
            <div className="value">
              {repo.openIssues}
            </div>
            <div className="label">
              Open Issues
            </div>
          </div>
          <div className="ui small statistic">
            <div className="value">
              {repo.language}
            </div>
          </div>
        </div>
        {readme &&
        <div className="extra">
          <a href={`/repositorydetail?githubapi=${repo.apiUrl}`} className="ui right floated primary button">
            Read Me
            <i className="right chevron icon"></i>
          </a>
        </div>
        }
      </div>
    </div>
  )
};

export default RepositoryDetailedInformation;