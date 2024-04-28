import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the Icon component

const TUBusHome = ({ navigation }) => {
  return (
    <ImageBackground source={require('../media/background.jpg')} style={styles.container}>
        <Text style={styles.topic}>
        <Icon 
        name="chevron-left" size={30} color="#000" 
        onPress={() => navigation.navigate('Dashboard')}        />  {/* Use the Icon component */}
        <Image source={require('../media/TUBUStext.png')}></Image>
        </Text>
        <View style={styles.centeredContainer}>
            <ImageBackground 
                source={require('../media/tubusnotext.png')} 
                style={styles.tubusContainer}
                resizeMode="cover"
            >         
            </ImageBackground>    
            <Image  source={require('../media/line-blue.png')} style={styles.centeredLine}></Image>
            <TouchableOpacity 
                onPress={() => navigation.navigate('BusTable')}
                style={styles.menu}>
                    <Text style={styles.topicmenu}>Bus Table</Text>
            </TouchableOpacity> 
            <TouchableOpacity 
                onPress={() => navigation.navigate('BusRouteFinder')}
                style={styles.menu}>
                    <Text style={styles.topicmenu}>Bus Router Finder</Text>
            </TouchableOpacity> 
        </View>
        
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start'
    },
    topic: {
      marginTop: 100,
      marginLeft: 20,
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'left'
    },
    centeredContainer: {
        marginTop: 20,
        alignItems: 'center',  // Centers content horizontally
        width: '100%',  // Ensures the container takes full width
      },
      tubusContainer: {
        width: 400,
        height: 150,
        alignItems: 'center', // Centers content horizontally inside the ImageBackground
        justifyContent: 'center', // Centers content vertically inside the ImageBackground
        borderRadius: 30, // Adds rounded corners
        overflow: 'hidden', // Ensures the corners remain rounded
      },
      centeredLine:{
        // marginLeft: 190

      },
      menu:{
        marginTop:20,
        width: 325,
        height: 80,
        backgroundColor: '#FFE157',
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 20, 
        overflow: 'hidden',
      },
      topicmenu:{
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        textShadowColor: 'grey',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 3
      }
  });

export default TUBusHome