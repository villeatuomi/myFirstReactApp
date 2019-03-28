const apiUrl = 'http://media.mw.metropolia.fi/wbma/media/';
const loginUrl = 'http://media.mw.metropolia.fi/wbma/login';

const getAllMedia = () => {
  return fetch(apiUrl).then(response => {
    return response.json();
  }).then(json => {
    console.log(json);
    return Promise.all(json.map(pic => {
      return fetch(apiUrl + pic.file_id).then(response => {
        return response.json();
      });
    })).then(pics => {
      console.log(pics);
      return pics;
    });
  });
};

const getSingleMedia = (id) => {
  return fetch(`${apiUrl}${id}`).then(response => {
    return response.json();
  }).then(json => {
    console.log(json);
    return json;
  });
};

const register = () => {
};

const login = (username, password) => {
  const data = {
    'username': username,
    'password': password,
  };
  return fetch(`${loginUrl}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  }).then(response => {
  return response.json();
  }).then(json => {
    return json;
  });
};

const isUserLoggedIn = () => {

  return fetch()

};


const checkIfUserNameExists = () => {
};

export {getAllMedia};
export {getSingleMedia};
export {register};
export {login};
export {checkIfUserNameExists};