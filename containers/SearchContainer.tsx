import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Search } from '../screens/Home'

const Stack = createNativeStackNavigator()
const SearchContainer = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="Search" component={Search}/>
    </Stack.Navigator>
  
  )
}

export default SearchContainer

const styles = StyleSheet.create({})