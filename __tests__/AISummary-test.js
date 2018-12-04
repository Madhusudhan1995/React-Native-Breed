import 'react-native';
import React from 'react';
import AISummary from '../src/config/AISummary';

import renderer from 'react-test-renderer';

it('AISummary test case', () =>{
    let SummaryData = renderer.create(
     <AISummary />
    );
});