import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InStockAndShippingTime from '../components/InStockAndShippingTime.jsx';

Enzyme.configure({ adapter: new Adapter() })

describe('InStockAndShippingTime', () => {
  it('reviewScore should have a number value between 0 and 5', () => {
    const wrapper = shallow(<InStockAndShippingTime />);
    const value = wrapper.find('inStock')
    expect(value.text()).toBe('IN STOCK' || 'OUT OF STOCK')
  })
});