import { Map } from 'immutable';

export const filterTypeSelected = (state) => state.get('filter');

export const getNotifications = (state) => state.notifications;

export const getUnreadNotifications = (state) => {
  const notifications = state.getIn([
    'notifications',
    'entities',
    'notifications',
  ]);

  if (!notifications || !Map.isMap(notifications)) {
    return Map();
  } else {
    const unread = notifications.filter(
      (notification) => !notification.isRead
    );
    return Map(unread);
  }
};
