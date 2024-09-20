import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export function selectCourse(index) {
    return {
        type: SELECT_COURSE,
        index: index,
    };
}
export const bndSelectCourse = (index) => (dispatch) => {
    dispatch(selectCourse(index));
};

export function unSelectCourse(index) {
    return {
        type: UNSELECT_COURSE,
        index: index,
    };
}
export const bndUnSelectCourse = (index) => (dispatch) => {
    dispatch(unSelectCourse(index));
};
