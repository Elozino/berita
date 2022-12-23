import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TContext } from '../../types'
import { Context } from '../../context/ContextApp'
import { useTheme } from '../../utils/theme'


const Bookmark = () => {
  const { dark } = useContext(Context) as TContext
  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1 }}>
      <Text>Bookmark</Text>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
    </SafeAreaView>
  )
}

export default Bookmark

const styles = StyleSheet.create({})