import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import LocationStack from './locationStack';
import ReportStack from './reportStack';
import Header from '../shared/header';
import React from 'react';

const RootDrawerNavigator = createDrawerNavigator( {
    Home: {
        screen: HomeStack
    },
    Location: {
        screen: LocationStack
    },
    Report: {
        screen: ReportStack
    }
});

export default createAppContainer(RootDrawerNavigator);
