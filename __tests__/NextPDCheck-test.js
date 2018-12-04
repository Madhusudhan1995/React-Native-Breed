import 'react-native';
import React from 'react';
import NextPDCheck from '../src/component/buttons/NextPDCheck';

import renderer from 'react-test-renderer';

it('next pd check button test case checking',() => {
    let nextpdchecking = renderer.create(
        <NextPDCheck />
    );
});