import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
describe('BodySectionWithMarginBottom Component', () => {
    it('render margin bottom to child', () => {
        const wrapper = shallow(<BodySectionWithMarginBottom title='test title' />);

        expect(wrapper.find(BodySection).html()).toEqual(
            '<div class="bodySection"><h2>test title</h2></div>'
        );
    });
});
