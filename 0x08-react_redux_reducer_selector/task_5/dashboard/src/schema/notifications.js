import { normalize, schema } from 'normalizr';
import notificationsJson from '../../dist/notifications.json';

const userSchema = new schema.Entity('users');
const messageSchema = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notificationSchema = new schema.Entity('notification', {
    author: userSchema,
    context: messageSchema,
});

const normalizeNotifications = normalize(notificationsJson, [notificationSchema]);

export default function getAllNotificationsByUser(userId) {
  const output = [];
  const notifications = normalizeNotifications.entities.notification;
  const messages = normalizeNotifications.entities.messages;

  if (!notifications) {
    return output;
  }

  const notificationIds = Object.keys(notifications);

  for (let i = 0; i < notificationIds.length; i++) {
    const notificationId = notificationIds[i];
    const notification = notifications[notificationId];

    if (notification.author === userId) {
      output.push(messages[notification.context]);
    }
  }

  return output;
}

export function notificationsNormalizer(data) {
  return normalize(data, [notificationSchema]);
}

export { normalizeNotifications }
