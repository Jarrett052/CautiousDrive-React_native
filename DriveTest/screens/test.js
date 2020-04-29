import React from 'react';
import { StyleSheet, View, Text, Button, Image, ScrollView, Dimensions } from 'react-native';
import { globalStyles } from '../style/global';
import { WebView } from 'react-native-webview';
import { render } from 'react-dom';
// import { ScrollView } from 'react-native-gesture-handler';
import HTML from 'react-native-render-html';
import HTMLView from 'react-native-htmlview';


// const responseHTML = require('../assets/index.html');
// import responeTest from '../index.html'





// const htmlContent = ``;





export default function Test( {navigation} ) {
   

    const pressHandler = () =>{
        navigation.navigate('Maps');
    }


    const source = (Platform.OS == 'ios') ? require('../assets/index.html') : { uri: 'file:///android_asset/pages/index.html' }


    const htmlContent2 = `
    <div>
        <iframe src="http://info.cern.ch/" width="360" height="300" />
    </div>
    `;




    const htmlContent = `<!DOCTYPE html>
    <head>
        <meta charset="UTF-8">
        <title>Fatigue test</title>

        <style>
            body {
            font-family: Verdana, Geneva, sans-serif;
        }

        #box {
            width: 200px;
            height: 200px;
            background-color: blue;
            display: none;
            position: relative; 
        }   
        
    </style>

    </head>

    <body>

    <h1>Test your reaction time!</h1>
    <p>Click on the boxes and circles as quickly as you can. Your reaction time will be posted below: </p>
    <p id="printReactionTime"></p>
    <div id="box"></div>
    </body>

    <script>
        function getRandomColor() {
				
				var letters = "0123456789ABCDEF".split('');
				var color = "#";
				for (var i = 0; i < 6; i++) {
					color += letters[Math.round(Math.random() * 15)];
				} //ends for loop 
				return color; 
			
			
			} // ends getRandomColor Function
		
		
			var clickedTime; var createdTime; var reactionTime; 
		
			function makeBox() {
					var time=Math.random();
					time=time*3000;
				
				setTimeout(function() {
				
					if (Math.random()>0.5) {
					
						document.getElementById("box").style.borderRadius="100px";
						
						} else {
						
							document.getElementById("box").style.borderRadius="0";
						}
						
					var top= Math.random();
						top= top*300;
					var left= Math.random();
						left= left*500; 
						
					document.getElementById("box").style.top = top + "px";
					document.getElementById("box").style.left = left + "px"; 
				
					document.getElementById("box").style.backgroundColor=getRandomColor();
				
					document.getElementById("box").style.display="block";
					
					createdTime=Date.now();
					
				}, time); 
			
			}
			
			document.getElementById("box").onclick=function() {
			
				clickedTime=Date.now();
				
				reactionTime=(clickedTime-createdTime)/1000;
				
				document.getElementById("printReactionTime").innerHTML="Your Reaction Time is: " + reactionTime + "seconds";
				
				this.style.display="none";
				
				makeBox();
				
				
			}
			
			makeBox(); 
			
    </script>

  </html>

  `;






    // if(Platform.OS === 'android' ){
    //     const responseHTML = require('file:///android_asset/assets/index.html');

    // }else{
    //     const responseHTML = require('../assets/index.html');
    // }

    // let responseHTML = Platform.OS === 'ios'
    //       ? require('../assets/index.html')
    //       : {uri: 'file:///android_asset/index.html'};
    
    const responseHTML = require('../assets/index.html');

        
    // const responseHTML = require('https://www.google.com/');
    // const responseHTML = require('../assets/index.html');
    return (

           <WebView 
            style={styles.webSetting}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
            scalesPageToFit={true}
            source={require('../android/app/src/main/assets/index.html')}
            // source={responseHTML}
            // source={{uri: 'https://www.google.com/'}} 
            // source={{ uri: 'file:///android_asset/index.html' }}
            // originWhitelist={['*']}

            />

        //  {/* <Button title='Next Test' onPress={pressHandler} /> */}
         
        // <ScrollView style={{ flex: 1 }}>
        //         <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />
        // </ScrollView>

        //     {/* <WebView
        //     javaScriptEnabled={true}
        //     domStorageEnabled={true}
        //     source={{html: htmlContent}}
        //     automaticallyAdjustContentInsets={false}
        //     scalesPageToFit={true}
        //     // onScroll={this._onScroll}
        //     // scrollEnabled={this.state.scrollEnabled}
        //   /> */}

     
        // <WebView
        //         originWhitelist={['*']}
        //         javaScriptEnabled={true}
        //         domStorageEnabled={true}
        //         source={{ html: '<h1>Hello world</h1>' }}>

        //     {/* <Button title='Fatigue Test' onPress={pressHandler}/>     */}
        // </WebView>
        
            // <Button title='Fatigue Test' onPress={pressHandler} style={styles.buttonStyle}/>
    
            // <HTMLView value={htmlContent2} renderNode={renderNode} />

        //     <WebView
        //     source={{ uri: 'https://logrocket.com/' }}
        //     style={{ marginTop: 20 }}
        //   />

        // <View style={{ height: 150, width: 150,overflow:'hidden' }}>
        //     <WebView
        //       source={{ uri: 'https://github.com/facebook/react-native' }}
        //       scalesPageToFit={true}
        //     />
        // </View>



                // <WebView 
                // javaScriptEnabled={true}
                // domStorageEnabled={true}
                // source={source} 
                // mixedContentMode={'compatibility'}/>
                
                // <WebView
                //     source={{ uri: 'https://github.com/facebook/react-native' }}
                //     scalesPageToFit={true}
                // />

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
        marginTop:20,
    },
    webSetting: {
        width: '100%',
        height: '50%',
    }

});