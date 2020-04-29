import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
// import Home from '../screens/home';
// import Test from '../screens/test';
import Location from '../screens/location';
// import Report from '../screens/report';
import Header from '../shared/header';
import Maps from '../screens/maps';
import React from 'react';


const screens = {
    Location: {
        screen: Location,
        // navigationOptions:{
        //     title: 'Maps and Statistic',
        //     headerStyle: { backgroundColor: '#eee'}
        // }
        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: () => <Header navigation={navigation} />,
                headerStyle: { backgroundColor: '#eee'}
            }
          }
    },
    Maps: {
        screen: Maps,
        navigationOptions:{
            title: 'Navigation',
            headerStyle: { backgroundColor: '#eee'}
        }
    },

}

const LocationStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle: { backgroundColor: '#1C773B'}
    }
});

// export default createAppContainer(LocationStack);
export default LocationStack;