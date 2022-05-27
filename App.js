import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {Home,Order,Restaurant} from './screens'
import tabs from './navigation/tabs'

const Stack = createStackNavigator();

export default function App()
{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"} screenOptions={{headerShown:false}}> 
        <Stack.Screen name="Tabs" component={tabs} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}