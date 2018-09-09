const host = 'https://api.github.com/';

const repositorySearch = (searchTerm, language) => {
  if (!searchTerm && !language)
    return;

  const searchTermValue = searchTerm ? `topic:${searchTerm}` : '';
  const languageValue = language ? `topic:${language}` : '';

  const query = searchTerm && language ?
    `?q=${searchTermValue}+${languageValue}` :
    `?q=${searchTermValue}${languageValue}`;
  const url = `${host}search/repositories${query}`;

  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      return {'error': response}
    })
    .then(data => {
      if (data.error)
        return data;

      return {
        'hits': data.total_count,
        'items': data.items.map(item => mapRepository(item))
      };
    })
    .catch(error => {
      return {'error': error.message}
    });
};

const getRepositoryDetail = (repository) => {
  return fetch(repository)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      return {'error': response}
    })
    .then(data => {
      if (data.error)
        return data;

      return mapRepository(data);
    })
    .catch(error => {
      return {'error': error.message}
    });
};

const getRepositoryReadme = (repository) => {
  const url = `${repository}/readme`;

  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      return {'error': response}
    })
    .then(data => {
      if (data.error)
        return data;

      return mapReadme(data);
    })
    .catch(error => {
      return {'error': error.message}
    });
};

const mapRepository = (item) => {
    return {
      'name': item.name,
      'fullName': item.full_name,
      'owner': mapRepositoryOwner(item.owner),
      'apiUrl': item.url,
      'htmlUrl': item.html_url,
      'description': item.description,
      'language': item.language,
      'forks': item.forks,
      'openIssues': item.open_issues,
      'watchers': item.watchers,
      'creationDate': item.created_at,
      'updateDate': item.updated_at
    }
};

const mapRepositoryOwner = (owner) => {
  return {
    'login': owner.login,
    'apiUrl': owner.url,
    'htmlUrl': owner.html_url
  };
};

const mapReadme = (readme) => {
  return {
    'readme': atob(readme.content)
  }
};

module.exports = {
  repositorySearch,
  getRepositoryDetail,
  getRepositoryReadme
};