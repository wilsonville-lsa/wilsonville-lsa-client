import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('Home', () => {
  it('matches snapshot for Home', () => {
    const tree = renderer.create(
      <Home />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
