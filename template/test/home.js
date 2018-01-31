/* eslint-disable */

import { mount } from '@vue/test-utils';
import Component from '../app/home/HomePage';

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Component);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
