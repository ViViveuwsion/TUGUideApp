import {TextInput, View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the Icon component
import { Picker } from '@react-native-picker/picker';

const BusRouteFinder = ({ navigation}) => {
  const [destination, setDestination] = useState(''); // State for user's destination input
  const [result, setResult] = useState(''); // State to hold search results
  // const [selectedDestination, setSelectedDestination] = useState();
  // const allStops = [
  //   'สถานีEV (ศูนย์ประชุม)', 'สถานี TU DOME',
  //   'SC canteen', 'GREEN CANTEEN',
  //   'รพ.ธรรมศาสตร์', 'สุขศาสตร์', 'โดมบริหาร',
  //   'ประตูเชียงราก 1', 'วิทยาศาสตร์', 
  //   'สังคมศาสตร์', 'ศูนย์กีฬา', 'หอพักโซน B', 'หอพักโซน A', 'หอพักโซน C'
  // ].sort();
  const busStop = [
    { 
      id: '1', 
      label: 'สายสีแดง (1A)', 
      path: [
        'สถานีEV (ศูนย์ประชุม)',
        'SC canteen ',
        'GREEN CANTEEN',
        
        'สังคมศาสตร์',
        'ศูนย์กีฬา',
        'หอพักโซน B','หอพักโซน A', 
        'หอพักโซน C'
      ]
    },
    { id: '2', 
    label: 'สายสีเหลือง (1B)', 
    path: [
      'สถานีEV (ศูนย์ประชุม)',
      'สังคมศาสตร์',
      'ศูนย์กีฬา',
      'SC canteen ',
      'GREEN CANTEEN',
      'หอพักโซน B','หอพักโซน A', 
        'หอพักโซน C'
    ] 
  },
    { id: '3', label: 'สายสีเขียว (2)', 
    path: [
      'สถานีEV (ศูนย์ประชุม)',
      'รพ.ธรรมศาสตร์',
      'สุขศาสตร์',
      'วิทยาศาสตร์', 
      'GREEN CANTEEN',
      'โดมบริหาร',
      'หอพักโซน B','หอพักโซน A', 
    ]  
  },
    { id: '4', label: 'สายสีม่วง (3)', 
    path: [
      'สถานี TU DOME',
      'ประตูเชียงราก 1',
      'สังคมศาสตร์',
      'ศูนย์กีฬา',
      'GREEN CANTEEN',
      'หอพักโซน B','หอพักโซน A', 

    ] 
  },
    { id: '5', label: 'สายสีฟ้า (5)', 
    path: [
      'สถานีEV (ศูนย์ประชุม)',
      'SC canteen ',
      'ศึกษาศาสตร์',
      'วิทยาศาสตร์',
      'สุขศาสตร์',
      'รพ.ธรรมศาสตร์',

    ] 
  },
  ];


  // Function to handle the search logic
  const searchRoute = () => {
    // Filter the busStop array for any bus lines whose path includes the destination.
    const matchingRoutes = busStop.filter(bus =>
      bus.path.includes(destination.trim())
    );

    // Create a string of bus line labels that include the destination.
    const matchingLabels = matchingRoutes.map(bus => bus.label).join(', ');
    const resultString = matchingLabels.length > 0
    ? `Bus lines that stop at ${destination}: ${matchingLabels}`
    : `No bus lines stop at ${destination}.`;

  // Update the result state with the string
  setResult(resultString);
    // Update the result state with the matching bus lines.
  };
  return (
    <ImageBackground source={require('../../media/background.jpg')} style={styles.container}>
      <Text style={styles.topic}>
                <Icon name="chevron-left" size={30} color="#000" onPress={() => navigation.navigate('TUBusHome')} />
                <Image source={require('../../media/TUBUStext.png')}></Image>
      </Text>
      <View style={styles.centeredContainer}>
        <ImageBackground source={require('../../media/tubusnotext.png')} style={styles.tubusContainer} resizeMode="cover" />
        <Image source={require('../../media/line-blue.png')} />
        <TouchableOpacity onPress={() => navigation.navigate('BusTable')} style={styles.menu}>
                    <Text style={styles.topicmenu}>Bus Table</Text>
        </TouchableOpacity>
        <Image source={require('../../media/line-dot-blue.png')} style={styles.centeredLine} />
        <View style={styles.listcontainer}>
        {/* <Picker
          selectedValue={selectedDestination}
          onValueChange={(itemValue, itemIndex) => setSelectedDestination(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select your destination" value="" />
          {allStops.map((stop, index) => (
            <Picker.Item key={index} label={stop} value={stop} />
          ))}
        </Picker> */}
          
          <TextInput
            style={styles.input}
            placeholder="Destination"
            value={destination}
            onChangeText={setDestination}
            // Add other props such as onChangeText if you need to handle user input
          />
          <TouchableOpacity style={styles.searchButton} onPress={searchRoute}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
          {result && (
            <Text style={styles.resultText}>{String(result)}</Text> // Convert to string just to be safe
          )}
     
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
  picker: {
    height: 50,
    width: '90%',
    color: '#000',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
  },
  resultText: {
    marginTop: 10,
    fontSize: 16,
    color: 'black',
  },
  topic: {
      marginTop: 100,
      marginLeft: 20,
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'left'
  },
  input: {
    height: 50,
    marginVertical: 10, // Space between inputs
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: '#ddd', // Light gray border for the input fields
    width: '90%', // Use a percentage of the listcontainer width
  },
  searchButton: {
    marginTop: 10,
    backgroundColor: '#6C6C6A', // Example color for the search button
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  searchButtonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    borderRadius:20,
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
  listcontainer: {
      width: 325,
      height: 268,
      backgroundColor: '#EEEEEC',
      borderRadius: 20, // Adds rounded corners
      alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    padding: 20,
  },
  menu: {
      marginTop: 20,
      width: 325,
      height: 80,
      backgroundColor: '#FFE157',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      overflow: 'hidden',
  },
  topicmenu: {
      color: 'white',
      fontSize: 28,
      fontWeight: 'bold',
      textShadowColor: 'grey',
      textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 3
  },
  centeredLine: {
      marginTop: 15,
      marginBottom: 15
  },
  menuItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#6C6C6A',
  },
  menuItemNoBorder: {
      borderBottomWidth: 0, // No border for this item
  },
  menuItemText: {
      fontSize: 18,
  },
  containerScrollView: {
      flex: 1,
      backgroundColor: 'white',
  },
});

export default BusRouteFinder