import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';

describe('Error Boundary tests', () => {
  it('renders the app component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});



