import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../screens/Home'
import Notification from '../screens/Home/Notification'
import FeaturedNews from '../screens/Home/FeaturedNews'


const Stack = createNativeStackNavigator()
const HomeContainer = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="FeaturedNews" component={FeaturedNews} />
    </Stack.Navigator>


  )
}

export default HomeContainer

const styles = StyleSheet.create({})