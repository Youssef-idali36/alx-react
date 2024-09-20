import { Map, List } from 'immutable';
import {
    filterTypeSelected,
    getNotifications,
    getUnreadNotifications,
} from './notificationSelector';
import { markAsRead } from '../actions/notificationActionCreators';
import { notificationReducer } from '../reducers/notificationReducer';
import { notificationsNormalizer } from '../schema/notifications';

// Create a sample state using the reducer
const defaultCase = Map({
    notifications: List(),
    filter: 'DEFAULT',
});

const expectedCase = {
    filter: 'DEFAULT',
    notifications: [{
            id: 1,
            isRead: false,
            type: 'default',
            value: 'New course available',
        },
        {
            id: 2,
            isRead: false,
            type: 'urgent',
            value: 'New resume available',
        },
        {
            id: 3,
            isRead: false,
            type: 'urgent',
            value: 'New data available',
        },
    ],
};

it('returns filter as expected', () => {
    const filter = filterTypeSelected(defaultCase);
    expect(filter).toEqual('DEFAULT');
});

it('returns notifications as expected', () => {
    const notifications = notificationsNormalizer(expectedCase);
    expect(getNotifications(notifications)).toEqual(notifications.notifications);
});

it('returns unread notifications as expected', () => {
    const notificationsData = notificationsNormalizer(expectedCase);
    const state = notificationReducer(defaultCase, markAsRead(2));
    const immutableState = Map(state);
    const unreadNotifications = getUnreadNotifications(immutableState);
    expect(unreadNotifications.toJS()).toEqual(
      Map.isMap(state)
        ? state.getIn(['notifications', 'entities', 'notifications'])?.toJS() ?? {}
        : {}
    );
});
