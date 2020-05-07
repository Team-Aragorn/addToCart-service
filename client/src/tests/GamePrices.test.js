import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GamePrices from '../components/GamePrices.jsx';

describe('GamePrices', () => {
  it('should be true', () => {
    const foo = true;
    expect(foo).toBe(true);
  })
  it('should be false', () => {
    const foo = false;
    expect(foo).toBe(false);
  })
});