import React,{useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,SafeAreaView,TouchableOpacity,onpress} from 'react-native'

//import ProgressBar from 'react-native-progress/Bar';




const Splash = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <SafeAreaView>
        <ImageBackground source={require('./images/Splash_Screen.png')}
        style={styles.container}>
           <View>
      <TouchableOpacity style={styles.button}
        onPress={onpress}
      >
        <Text style={styles.text}>Get Started</Text>
      </TouchableOpacity>
    </View>
        </ImageBackground>

        

    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
 
  container: {
   width: '100%',
   height: '100%',
   justifyContent: 'flex-end'
  },


  button:{
    backgroundColor: 'rgb(85, 206, 223)',
    alignItems: 'center',
    padding: 10,
    alignSelf: 'center',
    marginBottom: 50,
    paddingLeft: 60,
    paddingRight:60,
    borderRadius: 15,
    paddingTop: 15,
    paddingBottom:15

    
    
  },
  text:{
    color:'#fff',
    fontSize: 25,
    fontWeight: 'bold',
    borderRadius: 30,
    fontStyle: 'normal',
    textAlign: 'center',
    fontFamily: 'Roboto',
    alignSelf: 'center'
    
  }
});

export default Splash()