import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

const Dashboard = ({ navigation }) => {  // Ensure that navigation is passed to your component if using this outside of navigation context
  return (
    <ImageBackground source={require('./media/background.jpg')} style={styles.container}>
      <Text style={styles.topic}>MENU</Text>
      <View style={styles.centeredContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('TUBusHome')}>
          <ImageBackground 
            source={require('./media/tubus.png')} 
            style={styles.tubusContainer}
            resizeMode="cover"
          >         
            {/* Content inside tubus background if any */}
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.centeredContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('TUSubjectHome')}>
          <ImageBackground 
            source={require('./media/tusubject.png')} 
            style={styles.tubusContainer}
            resizeMode="cover"
          >         
            {/* Content inside tusubject background if any */}
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  topic:{
    marginTop: 100,
    marginLeft: 20, 
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'left' 
  },
  centeredContainer: {
    marginTop: 20,
    alignItems: 'center',  // Centers content horizontally
    width: '100%',  // Ensures the container takes full width
  },
  tubusContainer: {
    width: 350,
    height: 150,
    alignItems: 'center', // Centers content horizontally inside the ImageBackground
    justifyContent: 'center', // Centers content vertically inside the ImageBackground
    borderRadius: 30, // Adds rounded corners
    overflow: 'hidden', // Ensures the corners remain rounded
  },
  profileContainer: {
    width:'90%',
    height:150,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileDetail: {
    fontSize: 16,
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 20,
  },
  navItem: {
    alignItems: 'center',
  },
});

export default Dashboard;
