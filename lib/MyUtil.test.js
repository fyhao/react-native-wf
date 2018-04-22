import React from 'react';
import MyUtil from './MyUtil';

import renderer from 'react-test-renderer';

it('renders MasterDetail without crashing', () => {
  MyUtil.loadList(function(jsn) {
	  console.log(jsn)
  });
});
