import React from 'react';
import renderer from 'react-test-renderer';
import TableApp from './index';

test('MatchSnap', () => {
    const component = renderer.create(
      <TableApp list={[]}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

