import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Maps from './screens/maps';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { startAsync } from 'expo/build/AR';
import Navigator from './routes/drawer';
import Expo, {Constants} from 'expo';

const getFonts = () => Font.loadAsync({
    'nunito-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold' : require('./assets/fonts/Nunito-Bold.ttf')
  });

// async function register(){
//       const { status } = await Expo.Permissions.askAsync(
//       Expo.Permissions.NOTIFCATIONS
//     );
    
//     if (status !== 'granted'){
//         alert("You need to enable permission in settings");
//         return;
//     }

//     const token = await Expo.Notifications.getExpoPushTokenAsync();
//     console.log(status, token);
// }

export default function App() {

  const [fontsLoaded, setFontsLoads] = useState(false);

  // componentWillMount(){
  //   register();
  //   this.listener = Expo.Notifications.addListener(this.listen)
  // }
    
  // componentWillMount = () =>{
  //   this.listener && Notifications.removeListener(this.listen)

  // } 
    
  //   listen = ({ origin, data}) =>{
  //     console.log("Be cautious", origin,data);
  //   }
  

  if(fontsLoaded){
    return (
      // <Home />
      <Navigator />
    );
  }else{
    return(
    <AppLoading
      startAsync = {getFonts}
      onFinish = {()=>setFontsLoads(true)}
    />
    )
  }
  
  
  
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //   </View>

  //   <Home />

  // );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
