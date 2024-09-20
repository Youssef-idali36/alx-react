import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

const defaultCase = {
    notifications: [],
    filter: 'DEFAULT',
};
export function notificationReducer(state = defaultCase, action) {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            return { ...state,
                notifications: action.data.map((notification) => ({
                    ...notification,
                    isRead: false,
                })),
            };
        case MARK_AS_READ:
            return { ...state,
                notifications: state.notifications.map((notification) => {
                    if (action.index === notification.id) {
                        return { ...notification, isRead: true };
                    }
                    return { ...notification };
                }),
            };
        case SET_TYPE_FILTER:
            return { ...state,
                filter: action.filter,
            };
        default:
            return state;
    }
}
