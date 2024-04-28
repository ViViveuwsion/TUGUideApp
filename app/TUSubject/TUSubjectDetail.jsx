import React,{ useState } from 'react';
import { ScrollView,View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image , TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const TUSubjectDetail = ({ navigation }) => {
  return (
    <ImageBackground source={require('../media/background.jpg')} style={styles.container}>
        <Text style={styles.topic}>
        <Icon 
        name="chevron-left" size={30} color="#000" 
        onPress={() => navigation.navigate('Dashboard')}        />  {/* Use the Icon component */}
        <Image source={require('../media/TUSUBJECTtext.png')}></Image>
      </Text>
      <View style={styles.centeredContainer}>
        <View style={styles.menu}>
            <Text style={styles.courseTopic}>CN 333 : Mobile Application Development</Text>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start'
    },
    courseTopic:{
        color:'white',
        fontWeight:'bold',
        fontSize:23
    },
    menu:{
        marginTop:15,
        width: 325,
        height: 100,
        backgroundColor: '#E3645D',
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 20, 
        overflow: 'hidden',
      },
    resultsContainer: {
      marginTop: 10,
      width: 325,
      backgroundColor: '#EEEEEC',
      borderRadius: 20,
      minHeight: 30, // Set a minimum height
      // Remove the fixed height to allow the container to grow
    },
    resultItem: {
      height:50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#6C6C6A',
    },
    lastResultItem: {
      borderBottomWidth: 0, // No bottom border for the last item
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
      centeredLine: {
        marginTop: 15,
        marginBottom: 15
    },
    
      topicmenu:{
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        textShadowColor: 'grey',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 3
      },
      input: {
        height: 50,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: '#E3645D',
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white',
        width: '80%',
        alignSelf: 'center',
      },
      searchButton: {
        backgroundColor: '#E3645D',
        borderRadius: 10,
        padding: 10,
        width: '80%',
        height: 50,
        alignSelf: 'center',
        
      },
      searchButtonText: {
        textAlign: 'center',
        alignContent:'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize:25
      },
  });

export default TUSubjectDetail