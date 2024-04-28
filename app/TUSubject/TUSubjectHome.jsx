import React,{ useState } from 'react';
import { ScrollView,View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image , TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the Icon component

const TUSubjectHome = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const subjectList = [
        { id: 1, course_name: "Operating Systems", course_no: "CN311" },
        { id: 2, course_name: "Software Engineering", course_no: "CN331" },
        { id: 3, course_name: "Object-Oriented", course_no: "CN332" },
        { id: 4, course_name: "Mobile Application Development", course_no: "CN333" },
      ];
  const handleSearch = () => {
    const results = subjectList.filter(subject =>
      subject.course_no.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.course_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
      setSearchResults(results);
  };
  return (
    <ImageBackground source={require('../media/background.jpg')} style={styles.container}>
      <Text style={styles.topic}>
        <Icon 
        name="chevron-left" size={30} color="#000" 
        onPress={() => navigation.navigate('Dashboard')}        />  {/* Use the Icon component */}
        <Image source={require('../media/TUSUBJECTtext.png')}></Image>
      </Text>
      <View style={styles.centeredContainer}>
        <ImageBackground 
                  source={require('../media/tusubjectnotext.png')} 
                  style={styles.tubusContainer}
                  resizeMode="cover"
              >
        </ImageBackground>
        <Image  source={require('../media/line-yellow.png')} style={styles.centeredLine}></Image>
        <TextInput 
          style={styles.input}
          placeholder="Enter subject"
          onChangeText={setSearchTerm}
          value={searchTerm}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
        {searchResults.length > 0 && (
          <>
          <Image source={require('../media/line-dot-yellow.png')} style={styles.centeredLine} />
          <ScrollView style={styles.resultsContainer}>
          {searchResults.map((subject, index) => (
            <TouchableOpacity
              key={subject.id}
              style={[
                styles.resultItem,
                index === searchResults.length - 1 && styles.lastResultItem // Apply additional style if it's the last item
              ]}
              onPress={() => navigation.navigate('TUSubjectDetail')}
            >
              <Text style={styles.resultText}>
                {subject.course_name} ({subject.course_no})
              </Text>
              <Icon name="chevron-right" size={15} color="#000" />

            </TouchableOpacity>
          ))}
          </ScrollView>
          </>         
          )}

        

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
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

export default TUSubjectHome;
