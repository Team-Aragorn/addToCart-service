import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InStockAndShippingTime from '../components/InStockAndShippingTime.jsx';

Enzyme.configure({ adapter: new Adapter() })

describe('InStockAndShippingTime', () => {
  it('Item should render IN STOCK or OUT OF STOCK', () => {
    const wrapper = shallow(<InStockAndShippingTime game={[{inStock: true}]} />);
    const value = wrapper.find('.inStock');
    expect(value.text()).toBe('IN STOCK' || 'OUT OF STOCK');
  });
});