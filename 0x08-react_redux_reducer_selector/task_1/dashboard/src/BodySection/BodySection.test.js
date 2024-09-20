import React from 'react';
import BodySection from './BodySection';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
describe('BodySection Component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(
            <BodySection title='test title'>
                <p>test children node</p>
            </BodySection>
        );
        expect(wrapper.find('p').text()).toEqual('test children node');
        expect(wrapper.find('h2').html()).toEqual('<h2>test title</h2>');
    });
});
