import 'react-native';
import React from 'react';
import Home from '../src/Home';

import renderer from 'react-test-renderer';

it('home test case', () => {
    let home = renderer.create(
        <Home />
    );
});