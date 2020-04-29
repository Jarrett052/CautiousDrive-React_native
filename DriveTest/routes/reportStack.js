import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Test from '../screens/test';
import Location from '../screens/location';
import Report from '../screens/report';
import Header from '../shared/header';
import React from 'react';

const screens = {

    Report: {
        screen: Report,
        // navigationOptions:{
        //     title: 'User Report',
        //     headerStyle: { backgroundColor: '#eee'}
        // }

        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: () => <Header navigation={navigation} />,
                headerStyle: { backgroundColor: '#eee'}
            }
          }
    },

}

const ReportStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle: { backgroundColor: '#1C773B'}
    }
});

// export default createAppContainer(ReportStack);
export default ReportStack;