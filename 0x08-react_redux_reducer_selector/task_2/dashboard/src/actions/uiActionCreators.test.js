import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginSuccess, loginFailure, loginRequest } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';


it('LOGIN test', () => {
    const email = 'test_email@gmail.com';
    const password = 'test_password';

    const expected = {
        type: LOGIN,
        user: {
            email: email,
            password: password
        },
    };
    expect(login(email, password)).toEqual(expected);
});

it('LOGOUT test', () => {
    const expected = {
        type: LOGOUT
    };
    expect(logout()).toEqual(expected);
});

it('DISPLAY_NOTIFICATION_DRAWER test', () => {
    const expected = {
        type: DISPLAY_NOTIFICATION_DRAWER
    };
    expect(displayNotificationDrawer()).toEqual(expected);
});

it('HIDE_NOTIFICATION_DRAWER test', () => {
    const expected = {
        type: HIDE_NOTIFICATION_DRAWER
    };
    expect(hideNotificationDrawer()).toEqual(expected);
});

describe('LOGIN Actions', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  afterEach(() => {
    fetchMock.restore();
  });
  it('verify that if the API returns the right response, the store received two actions LOGIN and LOGIN_SUCCESS', () => {
    fetchMock.get('http://localhost:3000/login-success.json', {
      "first_name": "Johann",
      "last_name": "Salva",
      "email": "johann.salva@holberton.nz",
      "profile_picture": "http://placehold.it/32x32"
    }, 200);

    const store = mockStore({});
    const email = 'johann.salva@holberton.nz';
    const password = 'password';

    return store.dispatch(loginRequest(email, password)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(login(email, password));
    });
  });

  it('verify that if the API query fails, the store received two actions LOGIN and LOGIN_FAILURE', () => {
    fetchMock.get('http://localhost:3000/login-success.json', 400);

    const store = mockStore({});
    const email = 'johann.salva@holberton.nz';
    const password = 'password';

    return store.dispatch(loginRequest(email, password)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(login(email, password));
      expect(actions[1]).toEqual(loginFailure());
    });
  });
});
