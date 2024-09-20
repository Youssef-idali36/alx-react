import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/uiActionTypes';
import { Map } from 'immutable';

export const defaultCase = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: Map({}),
});

export default function uiReducer(state = defaultCase, action) {
  const updateState = Map({
    [DISPLAY_NOTIFICATION_DRAWER]: Map({ isNotificationDrawerVisible: true }),
    [HIDE_NOTIFICATION_DRAWER]: Map({ isNotificationDrawerVisible: false }),
    [LOGIN_SUCCESS]: Map({ isUserLoggedIn: true }),
    [LOGIN_FAILURE]: Map({ isUserLoggedIn: false }),
    [LOGOUT]: Map({ isUserLoggedIn: false }),
  });

  return state.merge(updateState.get(action.type, Map()));
}
