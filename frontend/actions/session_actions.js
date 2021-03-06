import * as APIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = user => {
  return {
  type: RECEIVE_CURRENT_USER,
  user
  }
};

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS
})


export const signup = formUser => dispatch => APIUtil.signup(formUser)
            .then(user => (dispatch(receiveCurrentUser(user))),
                  err => (console.log(err), dispatch(receiveErrors(err.responseJSON))));

export const login = formUser => dispatch => APIUtil.login(formUser)
            .then(user => (dispatch(receiveCurrentUser(user))),
                  err => (dispatch(receiveErrors(err.responseJSON))));

export const logout = () => dispatch => APIUtil.logout()
            .then(user => dispatch(logoutCurrentUser()));
