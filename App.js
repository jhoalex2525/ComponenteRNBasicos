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
  Button,
  Alert,
  TouchableOpacity
} from 'react-native';


const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize:20, color:"red"}}>Hola App</Text>      
        <Text style={estilos.texto}>Prueba2</Text>      
      </View>
      <View>
        <Image style={estilos.imagenes} source={{uri:"https://www.fillmurray.com/640/360"}}></Image>
        <Image style={estilos.imagenes} source={require("./imagenes/foto1.jpg")}></Image>
      </View>
      <View>
        <Button title='Click aqui' color='red' onPress={()=> Alert.alert("Le di click al boton")}></Button>
        <TouchableOpacity onPress={()=> Alert.alert("Hola desde Alert")} >
          <Text>Click aqui 2</Text>
        </TouchableOpacity>
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
  imagenes:{
    width:200,
    height:200
  },
  boton:{
    backgroundColor: "blue",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  texto2:{
    color: "white",
    fontSize: 20
  }
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
