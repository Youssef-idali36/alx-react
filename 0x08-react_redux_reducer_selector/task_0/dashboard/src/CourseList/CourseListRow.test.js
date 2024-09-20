import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('CourseListRow Component', () => {
    it('renders without crashing', () => {
        shallow(<CourseListRow isHeader={true} textFirstCell="Header Cell" />);
    });
    it('renders two cells', () => {
        const wrapper = shallow(
            <CourseListRow
        isHeader={true}
        textFirstCell='test'
        textSecondCell='second'
      />
        );
        wrapper.update();
        expect(wrapper.find('th')).toHaveLength(2);
        expect(wrapper.find('th').at(0).text()).toEqual('test');
        expect(wrapper.find('th').at(1).text()).toEqual('second');
    });
    it('renders two td', () => {
        const wrapper = shallow(
            <CourseListRow
        isHeader={false}
        textFirstCell='test'
        textSecondCell='second'
      />
        );
        wrapper.update();
        expect(wrapper.find('tr')).toHaveLength(1);
        expect(wrapper.find('tr').children('td')).toHaveLength(2);
    });
    it('renders two cells when textSecondCell is present', () => {
        const wrapper = shallow(
            <CourseListRow isHeader={true} textFirstCell="Header Cell" textSecondCell="Second Cell" />
        );
        expect(wrapper.find('th').at(0).text()).toBe('Header Cell');
        expect(wrapper.find('th').at(1).text()).toBe('Second Cell');
    });

});
