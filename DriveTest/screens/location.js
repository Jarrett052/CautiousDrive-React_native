import React from 'react';
import { StyleSheet, View, Text, Button, Image, ScrollView } from 'react-native';
import { globalStyles } from '../style/global';


export default function Location( {navigation} ) {

    const pressHandler = () =>{
        navigation.navigate('Maps');

    }

    return (
        <View style={globalStyles.container}>
            <ScrollView>
                <Text style={globalStyles.titleText}> Location Screen</Text>
                <Image source={require('../assets/navigation.jpg')} style={styles.imageStyle}/>              
                <Button title='open map' onPress={pressHandler} style={styles.buttonStyle}/>
            </ScrollView>           
        </View>
    )

}


// const styles = StyleSheet.create({
//     container: {
//         padding:24
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