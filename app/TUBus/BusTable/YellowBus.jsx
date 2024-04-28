import React, { useState } from 'react';
import { Modal,View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image , ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the Icon component
import ImageViewer from 'react-native-image-zoom-viewer';

const YellowBus = ({ navigation }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const menuItems = [
        { id: '1', label: 'สายสีแดง (1A)' ,path:'RedBus'},
        { id: '2', label: 'สายสีเหลือง (1B)' ,path:'YellowBus'},
        { id: '3', label: 'สายสีเขียว (2)' ,path:'GreenBus'},
        { id: '4', label: 'สายสีม่วง (3)',path:'PurpleBus' },
        { id: '5', label: 'สายสีฟ้า (5)',path:'BlueBus' },
  
        // Add more menu items as needed
      ];
    const images = [{
        // Use `props` for local images in react-native-image-zoom-viewer
        props: {
          source: require('../../media/YellowBusMap.png')
        }
      }];
  return (
    <ScrollView style={{ flex: 1 }}>
    <ImageBackground source={require('../../media/background.jpg')} style={styles.container}>
        <Text style={styles.topic}>
            <Icon 
            name="chevron-left" size={30} color="#000" 
            onPress={() => navigation.navigate('BusTable')}        />  {/* Use the Icon component */}
            <Image source={require('../../media/TUBUStext.png')}></Image>
        </Text>
        <View style={styles.centeredContainer}>
            <ImageBackground 
                source={require('../../media/tubusnotext.png')} 
                style={styles.tubusContainer}
                resizeMode="cover"
            >       
            </ImageBackground>   
            <Image  source={require('../../media/line-blue.png')} ></Image>
            <TouchableOpacity 
                onPress={() => navigation.navigate('BusTable')}
                style={styles.menu}>
                    <Text style={styles.topicmenu}>Bus Table</Text>
            </TouchableOpacity> 
            <Image  source={require('../../media/line-dot-blue.png')} style={styles.centeredLine}></Image>
            <TouchableOpacity 
                style={styles.listcontainer} 
                onPress={() => setIsModalVisible(true)}
            >
                <Text style={styles.topicbus}>{menuItems[1].label}</Text>

                <Image 
                source={require('../../media/YellowBusMap.png')} 
                style={styles.map} 
                />
                <Text>Click to zoom</Text>
                <Text style={styles.detailbusHead}>Bus Stop ทั้งหมด  </Text>
                <Text style={styles.detailbus}>สถานีEV (ศูนย์ประชุม) / สังคมศาสตร์ / ศูนย์กีฬา / หอพักโซน C-B-A / GREEN CANTEEN / SC canteen / สถานีEV (เดินรถทางเดียว) </Text>
            </TouchableOpacity>
            

            {/* Modal for Image Zoom Viewer */}
            <Modal visible={isModalVisible} transparent={true}>
                <ImageViewer 
                imageUrls={images}
                enableSwipeDown={true}
                onSwipeDown={() => setIsModalVisible(false)}
                onClick={() => setIsModalVisible(false)}
                />
            </Modal>
            
        </View>
    </ImageBackground>    
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start'
    },
    detailbus: {
        width: '100%', // Ensure full width usage for alignment
        textAlign: 'left', // Explicitly align text to the left
        fontSize: 16,
        marginTop: 10, // Space between lines if needed
        color:'#6C6C6A' // Space between lines if needed
    },
    detailbusHead: {
        width: '100%', // Ensure full width usage for alignment
        textAlign: 'left', // Explicitly align text to the left
        fontSize: 18,
        marginTop: 20, 
        fontWeight:'bold'
    },
    topicbus:{
        fontSize: 18,
        color:'#F6CB03',
        fontWeight: '600',    },
    map: {
        width: 300, // Slightly less than container width to account for padding
        height: 200, // Fixed height, adjust as necessary
        resizeMode: 'contain', // Keep aspect ratio
        marginBottom: 10, // Space between map and text
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
        width: 350,
        height: 150,
        alignItems: 'center', // Centers content horizontally inside the ImageBackground
        justifyContent: 'center', // Centers content vertically inside the ImageBackground
        borderRadius: 30, // Adds rounded corners
        overflow: 'hidden', // Ensures the corners remain rounded
    },
    listcontainer: {
        width: 325,
        height: 420, // Adjust height as needed
        backgroundColor: '#EEEEEC',
        borderRadius: 20,
        padding: 10, // Ensure there's padding to not touch the edges
        alignItems: 'center', // Center content horizontally
        justifyContent: 'flex-start', // Align content to the top
        overflow: 'hidden', 
        marginBottom:30
        // Prevents content from overflowing the rounded corners
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
        borderBottomColor: '#E0E0E0',
      },
      menuItemText: {
        fontSize: 18,
      },
      containerScrollView: {
        flex: 1,
        backgroundColor: 'white',
      },
})

export default YellowBus