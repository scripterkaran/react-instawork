import {combineReducers} from 'redux'

import {
    ADD_USER,
    ADD_USER_BEGIN,
    CLOSE_SNACK,
    FETCH_USERS_BEGIN,
    FETCH_USERS_FAILURE,
    FETCH_USERS_SUCCESS,
    USER_DETAIL_CLEAR,
    USER_DETAIL_SUCCESS,
    USER_EDIT_SUCCESS,
} from './actions'

const initialState = {
  users: [],
  loading: false,
  error: null,
  listLoading: false,
  userEditInstance: {},
  snackOpen: false,
  snackMessage: 'Error'
};


function users(state = initialState, action) {
  switch (action.type) {
    case ADD_USER_BEGIN:
      return {
        ...state,
        listLoading: true
      }

    case ADD_USER:
      return {
        ...state,
        loading: false,
        listLoading: false,
        users: state.users.concat([action.payload.data])
      }
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        listLoading: false,
        snackOpen: true,
        snackMessage: action.payload.error,
        error: action.payload.error
      }
    case FETCH_USERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users
      };
    case USER_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        userEditInstance: action.payload.user
      };
    case USER_DETAIL_CLEAR:
      return {
        ...state,
        userEditInstance: {}
      };
    case USER_EDIT_SUCCESS:
      return {
        ...state,
        userEditInstance: action.payload.user
      };
    case CLOSE_SNACK:
      return {
        ...state,
        snackOpen: false,
        snackMessage: {},
        error: {}

      }
    default:
      return state
  }
}

const InstaWorkApp = combineReducers({
  users
})
export default InstaWorkApp