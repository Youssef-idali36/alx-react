import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const fadeInAnimation = {
  '0%': {
    opacity: 0.5,
  },
  '100%': {
    opacity: 1,
  },
};

const bounceAnimation = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
};
const appStyles = StyleSheet.create({
    Notifications: {
        padding: '1em',
        border: '2px dashed red',
    },

    notificationHeader: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    menuItem: {
      marginRight: '16px',
      textAlign: 'right',
      float: 'right',
      cursor: 'pointer',
      ':hover': {
        animationName: [fadeInAnimation, bounceAnimation],
        animationDuration: '1s, 0.5s',
        animationIterationCount: '3',
      },
    },
    mobile: {
      '@media (max-width: 375px)': {
        display: 'block',
        height: '100vh',
        width: '100vw',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: 'none',
        fontSize: '20px',
        padding: '0',
      },
    },
  flexArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});


class Notifications extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.displayDrawer ? (
          <div className={css(appStyles['flexArea'])}>
            <div className={css(this.props.displayDrawer ? appStyles['menuItem'] : null)} onClick={() => {this.props.handleDisplayDrawer();}}>
              <p>Your notifications</p>
            </div>
            <div className={css(appStyles['Notifications'], appStyles.mobile)}>
              <ul>
                {this.props.listNotifications &&
                this.props.listNotifications.length > 0 ? (
                  this.props.listNotifications.map(
                    ({ type, html, value, id }) => (
                      <NotificationItem
                        type={type}
                        html={html}
                        value={value}
                        key={id}
                        id={id}
                        markAsRead={this.props.markNotificationAsRead}
                      />
                    )
                  )
                ) : (
                <NotificationItem value='No new notification for now' />
              )}
            </ul>

                    <button
                      aria-label='Close'
                      onClick={() => {
                        console.log('Close button has been clicked');
                        this.props.handleHideDrawer();
                      }}
                    >
                      <img
                        style={{ width:"8px", height:"8px" }}
                        src={closeIcon}
                        alt='Close'

                      />
                    </button>
            </div>
          </div>
        ) : (
          <div className={css(appStyles['menuItem'])} onClick={() => {this.props.handleDisplayDrawer();}}>
            <p>Your notifications</p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  markNotificationAsRead: () => {},
};

export default Notifications;
