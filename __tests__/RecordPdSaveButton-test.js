import 'react-native';
import React from 'react';
import RecordPdSaveButton from '../src/component/buttons/RecoredPdSaveButton';

import renderer from 'react-test-renderer';

it('record pd save button test case checking',() =>{
    let recordpdsave = renderer.create(
        <RecordPdSaveButton />
    );
});