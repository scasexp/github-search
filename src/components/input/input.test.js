import React from 'react';
import renderer from 'react-test-renderer';
import InputApp from './index';

test('MatchSnap', () => {
    const component = renderer.create(
      <InputApp />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

