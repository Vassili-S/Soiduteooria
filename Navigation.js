import  React from 'react';
import Profile from './tabs/Profile'
import Lessons from './tabs/Lessons'
import Search from './tabs/Search'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={Profile} options={{title: "Profile"}}/>
            <Tab.Screen name="Lessons" component={Lessons} options={{title: "Lessons"}}/>
            <Tab.Screen name="Search" component={Search} options={{title: "Search"}}/>
        </Tab.Navigator>
    );
}
  
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}