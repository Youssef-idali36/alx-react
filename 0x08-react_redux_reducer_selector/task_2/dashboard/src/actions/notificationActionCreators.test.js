import { NotificationTypeFilters, MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { markAsRead, setNotificationFilter } from './notificationActionCreators';


it('markAsRead test', () => {
    const expected = {
        type: MARK_AS_READ,
        index: 1
    };
    expect(markAsRead(1)).toEqual(expected);
});

it('setNotificationFilter test urgent', () => {
    const expected = {
        type: SET_TYPE_FILTER,
        filter: 'URGENT',
    };
    expect(setNotificationFilter(NotificationTypeFilters['URGENT'])).toEqual(expected);
});
it('setNotificationFilter test default', () => {
    const expected = {
        type: SET_TYPE_FILTER,
        filter: 'DEFAULT',
    };
    expect(setNotificationFilter(NotificationTypeFilters['DEFAULT'])).toEqual(expected);
});
