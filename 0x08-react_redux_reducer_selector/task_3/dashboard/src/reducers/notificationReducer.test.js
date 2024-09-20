import { markAsRead, setNotificationFilter, fetchNotificationsSuccess} from '../actions/notificationActionCreators';
import { notificationReducer } from './notificationReducer';

const defaultCase = {
    notifications: [],
    filter: 'DEFAULT',
};

it('default case with no action', () => {
    const initialCase = notificationReducer(defaultCase, {});
    expect(initialCase).toEqual(defaultCase);
});
it('default case with correct action', () => {
    const data = {
        filter: 'DEFAULT',
        notifications: [
            {
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
    const action = fetchNotificationsSuccess();
    const newCase = notificationReducer(defaultCase, action);
    expect(newCase).toEqual(data);
});

it('MARK_AS_READ', () => {
    const data = {
        filter: 'DEFAULT',
        notifications: [
            {
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
    const action = markAsRead(2);
    const newCase = notificationReducer(data, action);
    const expectedCase = {
        filter: 'DEFAULT',
        notifications: [
            {
                id: 1,
                isRead: false,
                type: 'default',
                value: 'New course available',
            },
            {
                id: 2,
                isRead: true,
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

    expect(newCase).toEqual(expectedCase);
});

it('SET_TYPE_FILTER', () => {
    const data = {
        filter: 'DEFAULT',
        notifications: [
            {
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
    const action = setNotificationFilter('URGENT');
    const newCase = notificationReducer(data, action);
    const expectedCase = {
        filter: 'URGENT',
        notifications: [
            {
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

    expect(newCase).toEqual(expectedCase);
});

