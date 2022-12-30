import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MyNews, CreateNews } from '../screens/Home'


const Stack = createNativeStackNavigator()
const MyNewsContainer = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="MyNews" component={MyNews} />
      <Stack.Screen name="CreateNews" component={CreateNews} />
    </Stack.Navigator>

  )
}

export default MyNewsContainer

const styles = StyleSheet.create({})