import React, { Component } from 'react';
import { createStackNavigator} from "react-navigation";

import TabViewExample from './src/component/Index'; 
import RecordAI from './src/reducers/RecordAI';
import AISummary from './src/reducers/AISummary';
import RecordPD from './src/reducers/RecordPD';
import PDSummary from './src/reducers/PDSummary';
import BodyConditionScore from './src/reducers/BodyConditionScore';
import BodyWeightManagement from './src/reducers/BodyWeightManagement';

import RecordPdSaveButton from './src/component/buttons/RecoredPdSaveButton';
import NextPDCheck from './src/component/buttons/NextPDCheck';
import SaveandPerformAi from './src/component/buttons/SaveandPerformButton/SaveandPerform';
import AIServicesSaveButton from './src/component/buttons/SaveandPerformButton/AIServicesSaveButton';
import HowToEvaluateBCSIndex from './src/component/buttons/HowToEvaluateBCSIndex';
import HowToEvaluateBCSNext from './src/component/buttons/HowToEvaluateBCSNext';
import HowToEvaluateBCSNext1 from './src/component/buttons/HowToEvaluateBCSNext1';

const RootStack = createStackNavigator(
  {
    Home: TabViewExample,
    Home1: RecordAI,
    Home2: AISummary,
    Home3: RecordPD,
    Home4: PDSummary,
    Home7: RecordPdSaveButton,
    BodyCondition: BodyConditionScore,
    BodyWeight: BodyWeightManagement,
    NextPD: NextPDCheck,
    SaveandPerform: SaveandPerformAi,
    AIServices: AIServicesSaveButton,
    HowToEvaluate: HowToEvaluateBCSIndex,
    EvaluateBCSNext: HowToEvaluateBCSNext,
    EvaluateBCSNext1: HowToEvaluateBCSNext1,
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      title: "Welcome",
      headerStyle: {
        backgroundColor: "black"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center"
      }
    }
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
 

 