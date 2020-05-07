import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InStockAndShippingTime from '../components/InStockAndShippingTime.jsx';

describe('InStockAndShippingTime', () => {
  it('should be true', () => {
    const foo = true;
    expect(foo).toBe(true);
  })
  it('should be false', () => {
    const foo = false;
    expect(foo).toBe(false);
  })
});