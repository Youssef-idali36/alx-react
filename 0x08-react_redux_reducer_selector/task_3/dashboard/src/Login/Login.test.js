import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
describe('Login component', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders input', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(3);
  });
  it('renders label', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label')).toHaveLength(2);
  });
  it('button disabled - default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('.button_ciim7').props().disabled).toBe(true);
  });

  it('button enabled - password and email', () => {
    const wrapper = shallow(<Login />);
    wrapper.find({ name: 'email' }).simulate('change', {
      target: {
        name: 'email',
        value: 'test@email.com',
      },});
    wrapper.find({ name: 'password' }).simulate('change', {
      target: {
        name: 'password',
        value: 'test_password',
      },});
    expect(wrapper.find('.button_ciim7').prop('disabled')).toBe(false);
  });
});
