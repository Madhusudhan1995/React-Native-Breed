import 'react-native';
import React from 'react';
import PDSummary from '../src/config/PDSummary';

import renderer from 'react-test-renderer';

it('pdsummary test case', () =>{
    let pdSummaryData = renderer.create(
     <PDSummary />
    );
});