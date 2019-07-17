/* eslint-disable no-unused-vars */
/**
 * @format
 */

import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find());
});
