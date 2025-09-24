import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigatorScreen from '../screens/bottomNavigator/BottomNavigatorScreen';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="BottomNavigator" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomNavigator" component={BottomNavigatorScreen} />

    </Stack.Navigator>
  )
}

export default AppNavigator