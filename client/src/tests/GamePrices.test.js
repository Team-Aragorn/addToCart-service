import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GamePrices from '../components/GamePrices.jsx';

Enzyme.configure({ adapter: new Adapter() })

const gameState = [{
  0: {
    newPrice: 60,
    digitalPrice: 50,
    usedPrice: 30
  }
}]

describe('GamePrices', () => {
  it('newPrice should be a number', () => {
    const wrapper = shallow(<GamePrices game={gameState} />);
    const value = wrapper.find('.nPrice');
    expect(60);
  });
  it('usedPrice should be a number', () => {
    const wrapper = shallow(<GamePrices game={gameState} />);
    const value = wrapper.find('.uPrice');
    expect(30);
  });
  it('digitalPrice should be a number', () => {
    const wrapper = shallow(<GamePrices game={gameState} />);
    const value = wrapper.find('.dPrice');
    expect(50);
  });
});