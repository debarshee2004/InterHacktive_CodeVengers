import { StyleSheet, Text, View, TouchableOpacity, StatusBar,TextInput,searchText,handleSearch,Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
          <TouchableOpacity>
            <Ionicons name="menu" size={35} color="white" />
          </TouchableOpacity>
          <Text style={styles.home}>Home</Text>
          <TouchableOpacity>
            <AntDesign name="github" size={35} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.namebox}>
          <Text style={styles.name}>Hello James!</Text>
        </View>
      </View>
    <View style={styles.searchBar}>    
    <FontAwesome name="search" size={24} color="black" />          
    <TextInput
        style={styles.searchText}
        placeholder="Search..."
        value={searchText}
        onChangeText={handleSearch}
      />
    </View>
    <View style={styles.recent}>
      <Text style={styles.text}>Recent Places</Text>
    </View>
    <View>
      <View>
        <Image source={require('./images/Car_garage.png')}
         style={styles.pictures}/>
      </View>
    </View>
      <View>
        <TouchableOpacity>
          <View>
            <MaterialIcons name="message" size={24} color="black" />
            <Text>Message</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Feather name="edit" size={24} color="black" />
            <Text>Edit</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Ionicons name="settings" size={24} color="black" />
            <Text>Settings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <FontAwesome5 name="car-side" size={24} color="black" />
            <Text>Trips</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <MaterialCommunityIcons name="human-handsup" size={24} color="black" />
            <Text>Help</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <FontAwesome5 name="money-check" size={24} color="black" />
            <Text>Transaction History</Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#3392ea',
    margin: 10,
    borderRadius: 32
  },
  title:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    

  },
  home:{
    fontSize: 25,
    color: 'white'
  },
  namebox:{
    alignItems: 'center'
  },
  name:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  
  searchBar: {
    padding: 10,
    borderWidth: 1, 
    borderColor: 'black' ,
    paddingRight: 270,
    borderRadius: 12,
    justifyContent: 'space-between',
    borderBlockColor: 'transparent',
    flexDirection: 'row',

  },

  recent: {
   
    padding: 10,
    borderRadius: 12,
    justifyContent: 'center',
    borderBlockColor: 'transparent',
  },

  text: {
    fontSize: 25,
    color: 'black',
  },
  pictures: {
    width: 100,
    height: 80,
    borderRadius: 12,
    margin: 10,
  },
})