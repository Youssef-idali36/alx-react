import uiReducer, { defaultCase } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import { MARK_AS_READ } from '../actions/notificationActionTypes';

it('default case with no action', () => {
  const initialState = uiReducer(defaultCase, {});
  expect(initialState.toJS()).toEqual(defaultCase.toJS());
});

it('default case with incorrect action', () => {
  const initialState = uiReducer(defaultCase, {});
  const newState = uiReducer(initialState, { type: 'MARK_AS_READ' });
  expect(newState.toJS()).toEqual(defaultCase.toJS());
});

it('default case with correct action', () => {
  const initialState = uiReducer(defaultCase, {});
  const newState = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
  expect(newState.toJS().isNotificationDrawerVisible).toEqual(true);
});
