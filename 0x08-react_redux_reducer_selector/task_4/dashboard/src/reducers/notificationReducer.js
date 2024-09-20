import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from '../actions/notificationActionTypes';
import { Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';


const defaultCase = Map({
    notifications: [],
    filter: 'DEFAULT',
});
export function notificationReducer(state = defaultCase, action) {
    state = Map(state);
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            {
                const notificationData = action.data.map((item) => ({
                    id: item.id,
                    type: item.type,
                    value: item.value,
                    isRead: false,
                }));
                const newState = state.merge({
                    filter: NotificationTypeFilters.DEFAULT,
                    notifications: notificationsNormalizer(notificationData),
                });
                return newState;
            }
        case MARK_AS_READ:
          {
            const notificationId = action.index.toString();
            const newState = state.setIn(
              ['notifications', 'entities', 'notifications', notificationId, 'isRead'],
              true
            );
            return newState;
          }
        case SET_TYPE_FILTER:
            {
                const newState = state.set('filter', action.filter);
                return newState;
            }
        default:
            return state;
    }
}
