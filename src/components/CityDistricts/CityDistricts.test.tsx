import React from 'react';
import { shallow } from 'enzyme';
import CityDistricts from './CityDistricts';

describe('<CityDistricts />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CityDistricts />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
