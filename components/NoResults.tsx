import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { useTheme } from '../utils/theme'
import { TContext } from '../types'
import { Context } from '../context/ContextApp'

const NoResults = () => {
  const { dark } = useContext(Context) as TContext
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
      <View style={{ width: 100, height: 100, backgroundColor: useTheme(dark).appColor, borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
        <FontAwesome5 name="frown" size={40} color={useTheme(dark).white} />
      </View>
      <Text style={{ color: useTheme(dark).appColor, fontSize: 20, fontWeight: "400", marginTop: 20 }}>No results found</Text>
      <Text style={{ color: useTheme(dark).defautlText, fontSize: 14, fontWeight: "400", marginTop: 5 }}>Please try another keyword</Text>
    </View>
  )
}

export default NoResults