import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from '../App/AppContext';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
describe('Login component', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });
  it('renders Footer', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find('footer')).toHaveLength(1);
  });
  it('renders footer copyright', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find('.footer').text()).toContain('Copyright');
  });
  it('user is logged in', () => {
    const test = {
      user: { email: 'test@email.com', password: 'testpassword', isLoggedIn: true },
      logOut: () => {},
    };
    const wrapper = mount(
      <AppContext.Provider value={test}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').exists()).toBe(true);
  });
  it('user is logged out', () => {
    const test = {
      user: { email: 'test@email.com', password: 'testpassword', isLoggedIn: false },
      logOut: () => {},
    };
    const wrapper = mount(
      <AppContext.Provider value={test}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').exists()).toBe(false);
  });
});
