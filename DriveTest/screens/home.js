import React from 'react';
import { StyleSheet, View, Text, Button, Image, ScrollView } from 'react-native';
import { globalStyles } from '../style/global';


export default function Home( {navigation} ) {


    const pressHandler = () =>{
        navigation.navigate('Test');
    }


    return (
        <View style={globalStyles.container}> 
            <ScrollView>
                <Text style={globalStyles.titleText}> Welcome ! Be Cautious, Be Safe !</Text>
                <Image source={require('../assets/drive.jpg')} style={styles.imageStyle}/>
                <Button title='Fatigue Test' onPress={pressHandler} style={styles.buttonStyle}/>
            </ScrollView>
        </View>
    )
}


// const styles = StyleSheet.create({
//     container: {
//         padding:24
//     },
//     titleText: {
//         fontFamily: 'nunito-bold',
//         fontSize: 18,
//     }
// });
const styles = StyleSheet.create({
    imageStyle: {
        width: 365,
        height: 450,
        marginTop: 20,
        marginBottom:20,

    },
    buttonStyle: {
        paddingTop:10,
        marginTop:20,
    },

});