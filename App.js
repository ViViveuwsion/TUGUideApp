import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from "./app/Home";
import Dashboard from './app/Dashboard';
import TUBusHome from './app/TUBus/TUBusHome';
import TUSubjectHome from './app/TUSubject/TUSubjectHome';
import BusTable from './app/TUBus/BusTable/BusTable';
import BusRouteFinder from './app/TUBus/BusRouteFinder/BusRouteFinder';
import RedBus from './app/TUBus/BusTable/RedBus';
import YellowBus from './app/TUBus/BusTable/YellowBus';
import GreenBus from './app/TUBus/BusTable/GreenBus';
import PurpleBus from './app/TUBus/BusTable/PurpleBus';
import BlueBus from './app/TUBus/BusTable/BlueBus';
import TUSubjectDetail from './app/TUSubject/TUSubjectDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Dashboard" component={Dashboard} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="TUBusHome" component={TUBusHome} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="TUSubjectHome" component={TUSubjectHome} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="BusTable" component={BusTable} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="BusRouteFinder" component={BusRouteFinder} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="RedBus" component={RedBus} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="YellowBus" component={YellowBus} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="GreenBus" component={GreenBus} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="PurpleBus" component={PurpleBus} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="BlueBus" component={BlueBus} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="TUSubjectDetail" component={TUSubjectDetail} options={{
                headerShown: false
            }}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App