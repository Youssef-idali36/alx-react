import { fetchCourseSuccess, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import courseReducer from './courseReducer';


const defaultCase = [];

it('default case with no action', () => {
    const initialState = courseReducer(defaultCase, {});
    expect(initialState).toEqual(defaultCase);
});

it('FETCH_COURSE_SUCCESS returns the data passed', () => {
    const data = [{
            id: 1,
            name: 'ES6',
            credit: 60,
        },
        {
            id: 2,
            name: 'Webpack',
            credit: 20,
        },
        {
            id: 3,
            name: 'React',
            credit: 40,
        },
    ];
    const expectedCase = data.map((course) => ({
        ...course,
        isSelected: false,
    }));
    expect(courseReducer(data, fetchCourseSuccess())).toEqual(expectedCase);
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
    const newCase = courseReducer(data, action);
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
    expect(newCase).toEqual(expectedCase);
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
    const newCase = courseReducer(data, action);
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
    expect(newCase).toEqual(expectedCase);
});
