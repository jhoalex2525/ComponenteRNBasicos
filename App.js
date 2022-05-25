/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize:20, color:"red"}}>Hola App</Text>      
        <Text style={estilos.texto}>Prueba2</Text>      
      </View>
      <View>
        <Image source={{uri:"https://www.fillmurray.com/640/360"}}></Image>
      </View>
    </SafeAreaView>
  );
};

let estilos = StyleSheet.create({
  texto: {
    fontSize: 30,
    color: "blue",
    fontWeight: "bold"
  },
  imagenes:{}
})

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
