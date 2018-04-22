import React from 'react';
import MasterDetail from './MasterDetail';

import renderer from 'react-test-renderer';

it('renders MasterDetail without crashing', () => {
  const rendered = renderer.create(<MasterDetail />).toJSON();
  expect(rendered).toBeTruthy();
});
