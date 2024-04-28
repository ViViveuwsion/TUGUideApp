import React, { useEffect } from 'react'; // Make sure to import useEffect
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { Link, Redirect,router,useRouter } from 'expo-router';

export default function Home({navigation})  {
    const router = useRouter();
    // console.log(router);

  return (
    <ImageBackground source={require('./media/background.jpg')} style={styles.container}>
      <Image source={require('./media/logo.png')} style={styles.logo} />
      <TouchableOpacity 
        style={styles.startButton} 
        onPress={() => navigation.navigate('Dashboard')}>         
        <Text style={styles.buttonText}>START !</Text>
      </TouchableOpacity>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,  // Added some space between logo and button
  },
  startButton: {
    backgroundColor: 'red',  // Corrected typo and applied to TouchableOpacity
    padding: 10,
    borderRadius: 5, // Optional: adds rounded corners
    elevation: 2, // Optional: adds shadow on Android
    shadowColor: '#000', // Optional: shadow settings for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: 'white',  // Ensures text is visible on the red background
    fontSize: 16
  }
});
