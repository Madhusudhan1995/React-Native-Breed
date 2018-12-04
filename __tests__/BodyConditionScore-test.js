import 'react-native';
import React from 'react';
import BodyConditionScore from '../src/config/BodyConditionScore';

import renderer from 'react-test-renderer';

it('body condition score test case',() =>{
    let bodycondition = renderer.create(
        <BodyConditionScore />
    );
});