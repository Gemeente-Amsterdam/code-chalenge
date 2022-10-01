import React from 'react';
import { shallow } from 'enzyme';
import Tags from './Tags';

describe('<Tags />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Tags />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
