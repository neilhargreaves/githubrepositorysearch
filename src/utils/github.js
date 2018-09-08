const host = 'https://api.github.com/';

const repositorySearch = (searchTerm, language) => {
  if(!searchTerm && !language)
    return null;

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

      return data;
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

      return data;
    })
    .catch(error => {
      return {'error': error.message}
    });
};

const getRepositortyReadme = (repository) => {
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

      return data;
    })
    .catch(error => {
      return {'error': error.message}
    });
};

module.exports = {
  repositorySearch,
  getRepositoryDetail,
  getRepositortyReadme
};