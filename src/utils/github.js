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

  console.log(url);

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

      console.log(data);

      return {
        'hits': data.total_count,
        'items': mapSearchItems(data.items)
      };
    })
    .catch(error => {
      return {'error': error.message}
    });
};

const getRepositoryDetail = (repository) => {
  console.log(repository);

  return fetch(repository)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      return {'error': response}
    })
    .then(data => {
      console.log(data);

      if (data.error)
        return data;

      return data;
    })
    .catch(error => {
      return {'error': error.message}
    });
};

const getRepositoryReadme = (repository) => {
  const url = `${repository}/readme`;

  console.log(url);

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

      return data;
    })
    .catch(error => {
      return {'error': error.message}
    });
};

const mapSearchItems = (items) => {
  return items.map(item => {
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
  });
};

const mapRepositoryOwner = (owner) => {
  return {
    'login': owner.login,
    'apiUrl': owner.url,
    'htmlUrl': owner.html_url
  };
};

module.exports = {
  repositorySearch,
  getRepositoryDetail,
  getRepositoryReadme
};