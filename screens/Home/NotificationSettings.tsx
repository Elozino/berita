import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '../../utils/theme'
import { TContext } from '../../types'
import { Context } from '../../context/ContextApp'

const NotificationSettings = ({ navigation }: any) => {
  const { dark } = useContext(Context) as TContext

  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }} >
        <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
        <Text style={{ color: useTheme(dark).defautlText, marginLeft: 10, fontSize: 20 }}>Notification</Text>
      </View>
      <View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("NotificationSettings")}
            style={{ paddingVertical: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ color: useTheme(dark).defautlText, fontSize: 13, fontWeight: "bold" }}>Sound</Text>
            <Switch
              // onValueChange={() => setDark(!dark)}
              value={true}
            />
          </TouchableOpacity>
          <View style={{ backgroundColor: useTheme(dark).inputColor, height: 1, width: "100%" }} />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("NotificationSettings")}
            style={{ paddingVertical: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ color: useTheme(dark).defautlText, fontSize: 13, fontWeight: "bold" }}>Vibrate</Text>
            <Switch
              // onValueChange={() => setDark(!dark)}
              value={true}
            />
          </TouchableOpacity>
          <View style={{ backgroundColor: useTheme(dark).inputColor, height: 1, width: "100%" }} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NotificationSettings

const styles = StyleSheet.create({})