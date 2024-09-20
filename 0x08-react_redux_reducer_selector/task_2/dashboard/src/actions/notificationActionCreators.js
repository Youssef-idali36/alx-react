import { NotificationTypeFilters, MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

export function markAsRead(index) {
    return {
        type: MARK_AS_READ,
        index,
    };
};
export const bndMarkAsRead = (index) => (dispatch) => {
    dispatch(markAsRead(index));
};


export function setNotificationFilter(filter) {
    return {
        type: SET_TYPE_FILTER,
        filter,
    };
};
export const bndSetNotificationFilter = (filter) => (dispatch) => {
    dispatch(setNotificationFilter(filter));
};
