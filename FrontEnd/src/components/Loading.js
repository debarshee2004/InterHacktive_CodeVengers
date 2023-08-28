import React from 'react';
import { StyleSheet, SafeAreaView,Image } from 'react-native';
//import MyScreen from './components/timeout';



const Loading = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Image source={require('./images/Loading_Screen.png')}
        style={styles.container}/>

    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
 
  container: {
   width: '100%',
   height: '100%'
    
  },
});

export default Loading