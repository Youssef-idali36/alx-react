import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, } from './uiActionTypes';

export function login(email, password) {
    return {
        type: LOGIN,
        user: { email, password },
    };
}
export const bndLogin = (email, password) => (dispatch) => {
    dispatch(login(email, password));
};

export const logout = () => ({
    type: LOGOUT
});
export const bndLogout = () => (dispatch) => {
    dispatch(logout());
};


export const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER,
});
export const bndDisplayNotificationDrawer = () => (dispatch) => {
    dispatch(displayNotificationDrawer());
};


export const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER,
});
export const bndHideNotificationDrawer = () => (dispatch) => {
    dispatch(hideNotificationDrawer());
};


export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});
export const loginFailure = () => ({
    type: LOGIN_FAILURE
});

export function loginRequest(email, password) {
  return async (dispatch) => {
    dispatch(bndLogin(email, password));

    try {
      const res = await fetch('http://localhost:3000/login-success.json');
      const json = await res.json();
      dispatch(loginFailure());
    } catch (error) {
      dispatch(loginFailure());
    }
  };
}
