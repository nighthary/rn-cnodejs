
let basePath = process.env.NODE_ENV === 'production' ? '' : '';

export async function get(url, headers = {}){
  if(!url) {
    new Error('param url is undefined!');
  } else if( url.startsWith('http')) {
    url = basePath + url;
  }

  const options = {
    method: 'GET',
    headers: headers
  }
  return fetch(url, options)
    .then((response) => response.json())
    .catch( err => ({ err }));
}

export async function post (url, body) {
  if(!url) {
    new Error('param url is undefined!');
  } else if( url.startsWith('http')) {
    url = basePath + url;
  }

  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: body
  }

  return fetch(url, options)
    .then((response) => response.json())
    .catch(err => ({ err }));
}
