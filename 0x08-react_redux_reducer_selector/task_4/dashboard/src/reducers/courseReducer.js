import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

const initialState = Map({});

export default function courseReducer(state = initialState, action) {
    state = Map(state);
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            {
                const normalizedData = coursesNormalizer(action.data.map((item) => ({
                    id: item.id,
                    name: item.name,
                    isSelected: false,
                    credit: item.credit,
                })));
                return state.merge(normalizedData);
            }
        case SELECT_COURSE:
            {
                const courseId = action.index.toString();
                return state.setIn(['entities', 'courses', courseId, 'isSelected'], true);
            }
        case UNSELECT_COURSE:
            {
                const courseId = action.index.toString();
                return state.setIn(['entities', 'courses', courseId, 'isSelected'], false);
            }
        default:
            return state;
    }
}
