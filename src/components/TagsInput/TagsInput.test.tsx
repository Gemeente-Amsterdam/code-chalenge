import { shallow } from 'enzyme';
import TagsInput from './TagsInput';

describe('<Tags />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TagsInput />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
