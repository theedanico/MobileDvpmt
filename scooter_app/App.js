import 'react-native-gesture-handler';
import  React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import MapScreen from './screens/MapScreen';

const Stack = createStackNavigator();

export default function App() {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName = 'Home'>
          <Stack.Screen name='Home' component={FirstScreen} options={{headerShown: false}}/>
          <Stack.Screen name='Second' component={SecondScreen}/>
          <Stack.Screen name='Map' component={MapScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}