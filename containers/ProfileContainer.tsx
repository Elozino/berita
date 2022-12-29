import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { EditProfile, Settings, UserProfile } from '../screens/Home'

const Stack = createNativeStackNavigator()
const ProfileContainer = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>

  )
}

export default ProfileContainer

const styles = StyleSheet.create({})