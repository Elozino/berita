import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../screens/Home'


const Stack = createNativeStackNavigator()
const HomeContainer = () => {
  return (
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>


  )
}

export default HomeContainer

const styles = StyleSheet.create({})