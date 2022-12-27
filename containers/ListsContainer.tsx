import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Lists, CreateNews } from '../screens/Home'


const Stack = createNativeStackNavigator()
const ListsContainer = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="Lists" component={Lists} />
      <Stack.Screen name="CreateNews" component={CreateNews} />
    </Stack.Navigator>

  )
}

export default ListsContainer

const styles = StyleSheet.create({})