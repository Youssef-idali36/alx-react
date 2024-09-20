import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const appStyles = StyleSheet.create({
  urgent: {
    color: 'red',
    '@media (max-width: 375px)': {
      borderBottom: '1px solid black',
      listStyle: 'none',
      fontSize: '20px',
      padding: '10px 8px',
    },
  },
  default: {
    color: 'blue',
    '@media (max-width: 375px)': {
      borderBottom: '1px solid black',
      listStyle: 'none',
      fontSize: '20px',
      padding: '10px 8px',
    },
  },
});

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
    }
  render() {
    const { type = 'default', html, value, markAsRead, id } = this.props;

    let li;

    if (type && value) {
      li = (
        <li className={css(appStyles[type])} data-notification-type={type} onClick={() => markAsRead(id)}>
          {value}
        </li>
      );
    } else if (html) {
      li = (
        <li
          className={css(appStyles[type])}
          data-notification-type={type}
          onClick={() => markAsRead(id)}
          dangerouslySetInnerHTML={{ __html: html }}
        ></li>
      );
    } else {
      li = null;
    }

    return li;
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  html: {},
  value: '',
  markAsRead: () => {},
  id: NaN,
};

export default NotificationItem;
