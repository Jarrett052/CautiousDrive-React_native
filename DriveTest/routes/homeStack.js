import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Test from '../screens/test';
import Location from '../screens/location';
import Report from '../screens/report';
import Header from '../shared/header';
import React from 'react';



const screens = {
    Home : {
        screen: Home,
        navigationOptions: ({ navigation }) => {
        return{
            headerTitle: () => <Header navigation={navigation} />,
            // headerStyle: { backgroundColor: '#eee'}
        }
      }
    },
    
    Test : {
        screen: Test,
        navigationOptions:{
            title: 'Fatigue Test',
            headerStyle: { backgroundColor: '#eee'}
        }
    },
    // Location: {
    //     screen: Location,
    //     navigationOptions:{
    //         headerStyle: { backgroundColor: '#eee'}
    //     }
    // },
    // Report: {
    //     screen: Report,
    //     navigationOptions:{
    //         headerStyle: { backgroundColor: '#eee'}
    //     }
    // }

}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        herderTinColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60,}
    }
});

// export default createAppContainer(HomeStack);
export default HomeStack;