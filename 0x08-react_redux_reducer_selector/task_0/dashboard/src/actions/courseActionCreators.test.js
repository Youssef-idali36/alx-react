import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { selectCourse, unSelectCourse } from './courseActionCreators';


it('Calling the creator with 1 as argument should return: { type: SELECT_COURSE, index: 1 }', () => {
    const expected = { type: SELECT_COURSE, index: 1 };
    expect(selectCourse(1)).toEqual(expected);
});
it('Calling the creator with 1 as argument should return: { type: UNSELECT_COURSE, index: 1 }', () => {
    const expected = { type: UNSELECT_COURSE, index: 1 };
    expect(unSelectCourse(1)).toEqual(expected);
});
