import { markAsRead, setNotificationFilter, fetchNotificationsSuccess } from '../actions/notificationActionCreators';
import { notificationReducer } from './notificationReducer';
import { fromJS, Map, List } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

const defaultCase = {
    notifications: [],
    filter: 'DEFAULT',
};

it('default case with no action', () => {
    const initialCase = notificationReducer(defaultCase, {});
    expect(initialCase.toJS()).toEqual(defaultCase);
});

it('MARK_AS_READ', () => {
    const data = Map({
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
    });

    const action = markAsRead(2);
    const newCase = notificationReducer(data, action);
    const expectedCase = Map({
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
        });

    expect(newCase.toJS()).toEqual(expectedCase.toJS());
});


it('SET_TYPE_FILTER', () => {
    const data = {
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
    const action = setNotificationFilter('URGENT');
    const newCase = notificationReducer(data, action);
    const expectedCase = {
        filter: 'URGENT',
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

    expect(newCase.toJS()).toEqual(expectedCase);
});
