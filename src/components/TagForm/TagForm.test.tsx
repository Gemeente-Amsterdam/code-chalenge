import React from 'react';
import { shallow } from 'enzyme';
import TagForm from './TagForm';

describe('<TagForm />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TagForm />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
