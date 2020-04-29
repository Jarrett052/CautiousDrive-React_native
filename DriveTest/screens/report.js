import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, Image, ScrollView } from 'react-native';
import { globalStyles } from '../style/global';
import { WebView } from 'react-native-webview';
import { render } from 'react-dom';
// import { ThemeProvider, createGlobalStyle } from "styled-components";
// import { getFromTheme } from "../src/utils";
// import "../assets/css";

// import { ScrollView } from 'react-native-gesture-handler';



export default function Report( {navigation} ) {
   
    // const [themeName, toggleTheme] = useTheme("darkTheme");

    // const GlobalStyle = createGlobalStyle`
    //   body {
    //       background: ${getFromTheme("body.bg")};
    //       color: ${getFromTheme("body.color")};
    //       transition: background .3s ease;
    //   }
    // `;
  
    return (
      <ThemeProvider theme={themes[themeName]}>
        <React.Fragment>
          <GlobalStyle />
          <Game toggleTheme={toggleTheme} />
        </React.Fragment>
      </ThemeProvider>
    )
  }
  
//   function useTheme(defaultThemeName) {
//     const [themeName, setTheme] = useState(defaultThemeName);
  
//     function switchTheme(name) {
//       setTheme(themeName === "darkTheme" ? "lightTheme" : "darkTheme");
//     }
  
//     return [themeName, switchTheme];
  
// }


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
    
    // buttonStyle: {
    //     marginTop:20,
    // },
    // webSetting: {
    //     width: '100%',
    //     height: '50%',
    // }

});