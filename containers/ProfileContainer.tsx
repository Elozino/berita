import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AboutUs, Appearance, ContactUs, EditProfile, Help, NotificationSettings, SecuritySettings, Settings, UserProfile } from '../screens/Home'

const Stack = createNativeStackNavigator()
const ProfileContainer = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="Appearance" component={Appearance} />
      <Stack.Screen name="NotificationSettings" component={NotificationSettings} />
      <Stack.Screen name="SecuritySettings" component={SecuritySettings} />
    </Stack.Navigator>

  )
}

export default ProfileContainer

const styles = StyleSheet.create({})