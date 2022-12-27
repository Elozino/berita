import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { UserProfile } from '../screens/Home'

const Stack = createNativeStackNavigator()
const ProfileContainer = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="UserProfile" component={UserProfile} />
    </Stack.Navigator>

  )
}

export default ProfileContainer

const styles = StyleSheet.create({})