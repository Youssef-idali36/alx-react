import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import {AppContext, defaultUser, defaultLogout } from '../App/AppContext';




beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
describe('Header component', () => {
  it('renders without crashing', () => {
    shallow(<AppContext.Provider>
            	<Header />
            </AppContext.Provider>);
  });

  it('renders header', () => {
    const wrapper = shallow(<AppContext.Provider>
              <Header />
            </AppContext.Provider>);
    expect(wrapper.exists()).toBe(true);
  });
  it('renders h1', () => {
    const wrapper = shallow(<AppContext.Provider>
              <Header />
            </AppContext.Provider>);
    expect(wrapper.exists()).toBe(true);
  });
  it('renders img', () => {
    const wrapper = shallow(<AppContext.Provider value={{ user:defaultUser, logOut:defaultLogout }}>
              <Header />
            </AppContext.Provider>);
    expect(wrapper.exists()).toBe(true);
  });
  it('default context', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user:defaultUser, logOut:defaultLogout }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toEqual(true);
  });

  it('logoutSection', () => {
    const test = {
      email: 'test@gmail.com',
      password: 'testpassword',
      isLoggedIn: true,
    };
    const wrapper = shallow(
      <AppContext.Provider value={{ user: test, logOut:defaultLogout }}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find('#logoutSection').exists()).toBe(false);
  });

  it('logOut call', () => {
    const test = {
      user: {
        email: 'test@gmail.com',
        password: 'testpassword',
        isLoggedIn: true,
      },
      logOut: () => {},
    };
    const spy = jest.spyOn(test, 'logOut');
    const wrapper = shallow(
      <AppContext.Provider value={test}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toEqual(true);

  });
});
