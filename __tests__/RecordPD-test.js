import 'react-native';
import React from 'react';
import RecordPD from '../src/config/RecordPD';

import renderer from 'react-test-renderer';

it('recordPD test case', () => {
    let recordpd = renderer.create(
        <RecordPD />
    );
});