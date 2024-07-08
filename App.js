import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import Splash from './screen/Splash';

export default function app() {
  return (
    <Splash />
  );
}

const styles = StyleSheet.create({
  continer: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
});
