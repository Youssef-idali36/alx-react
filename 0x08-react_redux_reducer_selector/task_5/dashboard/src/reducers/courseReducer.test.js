import { fetchCourseSuccess, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import courseReducer from './courseReducer';
import { fromJS, Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

const defaultCase = [];

it('default case with no action', () => {
    const initialCase = courseReducer(defaultCase, {});
    expect(initialCase).toEqual(Map(defaultCase));
});

it('FETCH_COURSE_SUCCESS returns the data passed', () => {
    const expectedCase = [
            {
                id: 1,
                name: 'ES6',
                isSelected: false,
                credit: 60,
            },
            {
                id: 2,
                name: 'Webpack',
                isSelected: false,
                credit: 20,
            },
            {
                id: 3,
                name: 'React',
                isSelected: false,
                credit: 40,
            },
    ];
    expect(courseReducer(defaultCase, fetchCourseSuccess()).toJS()).toEqual(coursesNormalizer(expectedCase));
});

it('SELECT_COURSE returns the data with the right item updated', () => {
    const data = [{
            id: 1,
            name: 'ES6',
            isSelected: false,
            credit: 60,
        },
        {
            id: 2,
            name: 'Webpack',
            isSelected: false,
            credit: 20,
        },
        {
            id: 3,
            name: 'React',
            isSelected: false,
            credit: 40,
        },
    ];
    const action = selectCourse(2);
    const newCase = courseReducer(fromJS(coursesNormalizer(data)), action);
    const expectedCase = [{
            id: 1,
            name: 'ES6',
            isSelected: false,
            credit: 60,
        },
        {
            id: 2,
            name: 'Webpack',
            isSelected: true,
            credit: 20,
        },
        {
            id: 3,
            name: 'React',
            isSelected: false,
            credit: 40,
        },
    ];
    expect(newCase.toJS()).toEqual(coursesNormalizer(expectedCase));
});

it('UNSELECT_COURSE returns the data with the right item updated', () => {
    const data = [{
            id: 1,
            name: 'ES6',
            isSelected: false,
            credit: 60,
        },
        {
            id: 2,
            name: 'Webpack',
            isSelected: true,
            credit: 20,
        },
        {
            id: 3,
            name: 'React',
            isSelected: false,
            credit: 40,
        },
    ];
    const action = unSelectCourse(2);
    const newCase = courseReducer(fromJS(coursesNormalizer(data)), action);
    const expectedCase = [{
            id: 1,
            name: 'ES6',
            isSelected: false,
            credit: 60,
        },
        {
            id: 2,
            name: 'Webpack',
            isSelected: false,
            credit: 20,
        },
        {
            id: 3,
            name: 'React',
            isSelected: false,
            credit: 40,
        },
    ];
    expect(newCase.toJS()).toEqual(coursesNormalizer(expectedCase));
});
