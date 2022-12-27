import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Bookmark } from '../screens/Home'


const Stack = createNativeStackNavigator()
const BookmarkContainer = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="Bookmark" component={Bookmark} />
    </Stack.Navigator>

  )
}

export default BookmarkContainer

const styles = StyleSheet.create({})