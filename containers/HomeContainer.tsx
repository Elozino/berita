import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AllNews, FeaturedNews, HomeScreen, NewsDetails, Notification } from '../screens/Home'


const Stack = createNativeStackNavigator()
const HomeContainer = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="FeaturedNews" component={FeaturedNews} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
      <Stack.Screen name="AllNews" component={AllNews} />
    </Stack.Navigator>


  )
}

export default HomeContainer

const styles = StyleSheet.create({})