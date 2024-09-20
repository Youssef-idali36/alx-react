import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import { MARK_AS_READ } from '../actions/notificationActionTypes';

const defaultCase = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
};

it('default case with no action', () => {
    expect(uiReducer(defaultCase, 'null')).toEqual(defaultCase);
});

it('default case with incorrect action', () => {
    expect(uiReducer(defaultCase, { type: MARK_AS_READ })).toEqual(defaultCase);
});

it('default case with correct action', () => {
    expect(uiReducer(defaultCase, { type: DISPLAY_NOTIFICATION_DRAWER })).toEqual({ ...defaultCase, isNotificationDrawerVisible: true });
});
