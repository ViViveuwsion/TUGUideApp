import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the Icon component

const BusTable = ({ navigation }) => {
    const menuItems = [
        { id: '1', label: 'สายสีแดง (1A)', path: 'RedBus' },
        { id: '2', label: 'สายสีเหลือง (1B)', path: 'YellowBus' },
        { id: '3', label: 'สายสีเขียว (2)', path: 'GreenBus' },
        { id: '4', label: 'สายสีม่วง (3)', path: 'PurpleBus' },
        { id: '5', label: 'สายสีฟ้า (5)', path: 'BlueBus' },
    ];

    // Function to determine the color based on the label
    const getColor = (label) => {
        if (label.includes('สายสีแดง')) return 'red';
        if (label.includes('สายสีเหลือง')) return '#F6CB03';
        if (label.includes('สายสีเขียว')) return '#66DC1C';
        if (label.includes('สายสีม่วง')) return 'purple';
        if (label.includes('สายสีฟ้า')) return 'blue';
        return 'black'; // Default color
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
                    {menuItems.map((item) => (
                        <TouchableOpacity key={item.id} style={[
                            styles.menuItem,
                            item.id === '5' ? styles.menuItemNoBorder : {}, // Conditionally apply no-border style
                        ]} onPress={() => navigation.navigate(item.path)}>
                            <Text style={[styles.menuItemText, { color: getColor(item.label) }]}>{item.label}</Text>
                            <Icon name="chevron-right" size={20} color="#000" />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ImageBackground>
    );
};

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
    listcontainer: {
        width: 325,
        height: 268,
        backgroundColor: '#EEEEEC',
        borderRadius: 20, // Adds rounded corners
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

export default BusTable;
