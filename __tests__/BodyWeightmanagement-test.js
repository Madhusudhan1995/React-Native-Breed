import 'react-native';
import React from 'react';
import BodyWeightManagement from '../src/config/BodyWeightManagement';

import renderer from 'react-test-renderer';

it('body wight management state test case',() =>{
    let bodyweight = renderer.create(
        <BodyWeightManagement />
    ); 
});