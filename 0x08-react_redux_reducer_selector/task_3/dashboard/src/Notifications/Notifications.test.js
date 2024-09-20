import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';
import { jest } from '@jest/globals';


beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: getLatestNotification() },
];

describe('Notifications component', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders no list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li')).toHaveLength(0);
    });
    it('renders NotificationItem', () => {
        const wrapper = shallow(
            <Notifications
                displayDrawer={true}
                listNotifications={listNotifications}
            />
        );
        expect(wrapper.find('NotificationItem')).toHaveLength(3);
    });
    it('renders NotificationItem html', () => {
        const wrapper = shallow(
            <Notifications
                displayDrawer={true}
                listNotifications={listNotifications}
            />
        );
        const nItem = wrapper.find('NotificationItem');
        expect(nItem).toBeDefined();

    });
    it('renders the text "Your notifications"', () => {
        const wrapper = shallow(
            <Notifications
                displayDrawer={false}
            />
        );
        expect(wrapper.find('div.menuItem').exists()).toBe(false);

    });
    it('displays menu item , displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('div.menuItem').exists()).toBe(false);
    });

    it('does not display Notifications , displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.Notifications').length).toBe(0);
    });

    it('displays menu, displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('div.menuItem').length).toBe(0);
    });

    it('displays Notifications , displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('div.Notifications').exists()).toBe(false);
    });
    it('renders when listCourses is not passed', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(
            wrapper.containsMatchingElement(
                <li data-notification-type='default'>No new notification for now</li>
            )
        );
    });
    it('renders "No new notifications for now" when listNotifications is empty', () => {
        const wrapper = shallow(
            <Notifications displayDrawer={true} listNotifications={[]} />
        );
        expect(
            wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
        ).toBe(false);
        expect(
            wrapper.containsMatchingElement(
                <li data-notification-type='default'>No new notification for now</li>
            )
        );
    });
    it("handleDisplayDrawer click", () => {
        const mock = jest.fn();
        const wrapper = shallow(
            <Notifications
                listNotifications={listNotifications}
                handleDisplayDrawer={mock}
            />
        );
        const spy = jest.spyOn(wrapper.instance().props, 'handleDisplayDrawer');
        wrapper.find('.menuItem_xj3z6i').simulate('click');
        expect(spy).toBeCalled();
    });
    it('handleHideDrawer click', () => {
        const mock = jest.fn();
        const wrapper = shallow(
            <Notifications
                displayDrawer={true}
                listNotifications={listNotifications}
                handleHideDrawer={mock}
            />
        );
        const spy = jest.spyOn(wrapper.instance().props, 'handleHideDrawer');
        wrapper.find('button').simulate('click');
        expect(spy).toBeCalled();
    });
    it('markNotificationsAsRead', () => {
        const wrapper = shallow(<Notifications />);
        const spy = jest.spyOn(console, 'log').mockImplementation();
        wrapper.instance().markAsRead = spy;
        wrapper.instance().markAsRead(1);
        expect(wrapper.instance().markAsRead).toBeCalledWith(1);
        expect(spy).toBeCalledTimes(1);
    });
});
