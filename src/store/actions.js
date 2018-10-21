export const ADD_USER = 'ADD_USER'
export const ADD_USER_BEGIN = 'ADD_USER_BEGIN'
export const ADD_USER_ERROR = 'ADD_USER_ERROR'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const USER_DETAIL_SUCCESS = 'USER_DETAIL_SUCCESS';
export const USER_DETAIL_CLEAR = 'USER_DETAIL_CLEAR';
export const USER_EDIT_SUCCESS = 'USER_EDIT_SUCCESS';
export const CLOSE_SNACK = 'CLOSE_SNACK';
export const SET_SNACK_MESSAGE = 'SET_SNACK_MESSAGE';


export function fetchUsers(id) {
  return dispatch => {
    dispatch(fetchUsersBegin())
    let url = id ? `/api/users/${id}/` : `/api/users/`
    let successFunction = id ? fetchDetailSuccess : fetchUsersSuccess
    return fetch(url)
      .then(handleErrors)
      .then(response => response.json())
      .then(json => dispatch(successFunction(json)))
      .catch(error => dispatch(fetchUsersError(error)));
  }
}

export function fetchAddUsers(data) {
  return dispatch => {
    dispatch(fetchAddUserBegin())
    return fetch(`/api/users/`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json; charset=utf-8",}
    })
      .then(handleErrors)
      .then(response => response.json())
      .then(json => dispatch(fetchAddUserSuccess(json)))
      .catch(error => dispatch(fetchUsersError(error)));
  }
}

export function fetchEditUser(data) {
  return dispatch => {
    return fetch(`/api/users/${data.id}/`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json; charset=utf-8",}
    })
      .then(handleErrors)
      .then(response => response.json())
      .then(json => dispatch(fetchEditUserSuccess(json)))
      .catch(error => dispatch(fetchUsersError(error)));
  }
}

export function fetchDeleteUser(data) {
  return dispatch => {
    return fetch(`/api/users/${data.id}/`, {
      method: 'DELETE',
      headers: {"Content-Type": "application/json; charset=utf-8",}
    })
  }
}


export function clearUserDetails() {
  return dispatch => {
    dispatch(clearUserDetailsState())
  }
}


// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchUsersBegin = () => ({
  type: FETCH_USERS_BEGIN
});

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: {users}
});

export const fetchAddUserSuccess = data => ({
  type: ADD_USER,
  payload: {data}
});

export const fetchAddUserBegin = () => ({
  type: ADD_USER_BEGIN,
});

export const fetchDetailSuccess = (user) => ({
  type: USER_DETAIL_SUCCESS,
  payload: {user}
});

export const clearUserDetailsState = (user) => ({
  type: USER_DETAIL_CLEAR,
  payload: {user}
});
export const fetchEditUserSuccess = (user) => ({
  type: USER_EDIT_SUCCESS,
  payload: {user}
});


export const fetchUsersError = error => ({
  type: FETCH_USERS_FAILURE,
  payload: {error}
});

export const closeSnackAction = () => ({
  type: CLOSE_SNACK,
});
export const setSnackMessage = (message) => ({
  type: SET_SNACK_MESSAGE,
  payload: {error: {message: message}},
});


