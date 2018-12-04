import 'react-native';
import React from 'react';
import RecordAI from '../src/config/RecordAI';

import renderer from 'react-test-renderer';

it('RecordAI test case', () => {
    let home = renderer.create(
        <RecordAI />
    );
});