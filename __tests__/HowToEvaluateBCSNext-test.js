import 'react-native';
import React from 'react';
import HowToEvaluateBCSNext from '../src/component/buttons/HowToEvaluateBCSNext';

import renderer from 'react-test-renderer';

it('evaluate BCS nest button test case success' ,() =>{
    let bcsnextbutton = renderer.create(
        <HowToEvaluateBCSNext />
    );
});