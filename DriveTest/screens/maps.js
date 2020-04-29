import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, ScrollView } from 'react-native';
import { globalStyles } from '../style/global';
// import MapView, {PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

// export default class Maps extends Component{
export default function Maps() {

    // state = {
    //     coordinates: [
    //         { name: '1', latitude:37.8025259, longtitude: -122.4351431},
    //         { name: '2', latitude:37.7896386, longtitude: -122.421646},
    //         { name: '3', latitude:37.7665248, longtitude: -122.4161628},
    //         { name: '4', latitude:37.7734135, longtitude: -122.4577787},
    //         { name: '5', latitude:37.7948605, longtitude: -122.4596065},
    //         { name: '6', latitude:37.8025259, longtitude: -122.4351431}
    //     ]
    // }

        return (
            <MapView
                style={styles.mapStyle}
                provider={PROVIDER_GOOGLE}
                // region={{
                //     latitude: 37.78825,
                //     longtitude: -122.4324,
                //     latitudeDelta: 0.09,
                //     longtitudeDelta: 0.035,
                // }}>

                // initialRegion={{
                //     latitude: 37.78825,
                //     longtitude: -122.4324,
                //     latitudeDelta: 0.09,
                //     longtitudeDelta: 0.035,
                // }}
                >
                    {/* <Marker
                        coordinates={{latitude:37.8025259, longtitude: -122.4351431}}
                        title={'San Francisco'} >
                    </Marker> */}

            </MapView>
            
        // <View style={globalStyles.container}>
        //     <ScrollView>
        //         <Text style={globalStyles.titleText}>Maps Screen</Text>
        //         <Image source={require('../assets/navigation.jpg')} style={styles.imageStyle}/>
        //     </ScrollView>           
        // </View>

        )

}

const styles = StyleSheet.create({
    mapStyle: {
        height: '100%'
    }

});










// export default function Maps( {navigation} ) {


//     const pressHandler = () =>{
//         navigation.navigate('Test');
//     }


//     return (
//         <View style={globalStyles.container}> 
//             <ScrollView>
//                 <Text style={globalStyles.titleText}> Welcome ! Be Cautious, Be Safe !</Text>
//                 <Image source={require('../assets/drive.jpg')} style={styles.imageStyle}/>
//                 <Button title='Fatigue Test' onPress={pressHandler} style={styles.buttonStyle}/>
//             </ScrollView>
//         </View>
//     )
// }


// // const styles = StyleSheet.create({
// //     container: {
// //         padding:24
// //     },
// //     titleText: {
// //         fontFamily: 'nunito-bold',
// //         fontSize: 18,
// //     }
// // });


// const styles = StyleSheet.create({
//     imageStyle: {
//         width: 365,
//         height: 450,
//         marginTop: 20,
//         marginBottom:20,

//     },
//     buttonStyle: {
//         paddingTop:10,
//         marginTop:20,
//     },

// });