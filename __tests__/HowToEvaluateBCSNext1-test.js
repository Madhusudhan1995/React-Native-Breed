import 'react-native';
import React from 'react';
import HowToEvaluateBCSNext1 from '../src/component/buttons/HowToEvaluateBCSNext1';

import renderer from 'react-test-renderer';

it('how to evaluate BCS nest button test case working success', () =>{
    let besnextbutton = renderer.create(
        <HowToEvaluateBCSNext1 />
    );
});