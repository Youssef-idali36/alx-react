import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/uiActionTypes';

const defaultCase = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
};

export default function uiReducer(state = defaultCase, action) {
  const updateState = {
    [DISPLAY_NOTIFICATION_DRAWER]: { isNotificationDrawerVisible: true },
    [HIDE_NOTIFICATION_DRAWER]: { isNotificationDrawerVisible: false },
    [LOGIN_SUCCESS]: { isUserLoggedIn: true },
    [LOGIN_FAILURE]: { isUserLoggedIn: false },
    [LOGOUT]: { isUserLoggedIn: false },
  };

  return { ...state, ...updateState[action.type] } || state;
}
