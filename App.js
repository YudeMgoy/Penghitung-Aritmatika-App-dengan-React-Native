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
import AritmatikaMenu from './screen/AritmatikaMenu';
import GeometriMenu from './screen/GeometriMenu';
import CariUnGeometri from './screen/CariUnGeometri';
import CariSnGeometri from './screen/CariSnGeometri';
import CariSnGeometriTakHingga from './screen/CariSnGeometriTakHingga';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: MainMenu,
    },  
    CariSn: {
      screen: CariSn
    },
    CariSnGeometri: {
      screen: CariSnGeometri
    },   
    CariSnGeometriTakHingga: {
      screen: CariSnGeometriTakHingga
    },    
    CariUn: {
      screen: CariUn
    },
    CariUnGeometri:{
      screen: CariUnGeometri
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
    },
    AritmatikaMenu: {
      screen: AritmatikaMenu
    },
    GeometriMenu:{
      screen: GeometriMenu
    }
  },
  {initialRouteName:'Home'}
);

export default createAppContainer(AppNavigator);