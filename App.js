import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainMenu from './screen/MainMenu';
import CariSn from './screen/CariSn';
import CariUn from './screen/CariUn';
import CariA from './screen/CariA';
import CariA2 from './screen/CariA2';
import CariB2 from './screen/CariB2';
import CariB from './screen/CariB';
import DiketA from './screen/DiketA';
import DiketB from './screen/DiketB';
import CariJmlSuku from './screen/CariJmlSuku';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: MainMenu,
    },  
    CariSn: {
      screen: CariSn
    },
    CariUn: {
      screen: CariUn
    },
    CariA: {
      screen: CariA
    },
    CariA2: {
      screen: CariA2
    },
    CariB: {
      screen: CariB
    },
    CariB2: {
      screen: CariB2
    },
    CariJmlSuku: {
      screen: CariJmlSuku
    },
    DiketA: {
      screen: DiketA
    },
    DiketB: {
      screen: DiketB
    }
  },
  {initialRouteName:'Home'}
);

export default createAppContainer(AppNavigator);