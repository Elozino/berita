import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TContext } from '../../types'
import { Context } from '../../context/ContextApp'
import { useTheme } from '../../utils/theme'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

const UserProfile = () => {
  const { dark } = useContext(Context) as TContext
  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      {/* header */}
      <View style={styles.header}>
        <Text style={{ ...styles.headerText, color: useTheme(dark).defautlText }}>My Profile</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableHighlight style={{ backgroundColor: `${useTheme(dark).appColor}50`, borderRadius: 10, padding: 8, }}>
            <MaterialIcons name="edit" size={18} color={useTheme(dark).appColor} />
          </TouchableHighlight>
          <TouchableHighlight style={{ backgroundColor: `${useTheme(dark).appColor}50`, borderRadius: 10, padding: 8, marginLeft: 10 }}>
            <Ionicons name="settings" size={18} color={useTheme(dark).appColor} />
          </TouchableHighlight>
        </View>
      </View>

      {/* profile avatar */}
      <View style={styles.avatarWrapper}>
        <View style={[{ backgroundColor: useTheme(dark).defautlText }, styles.avatarBox]}>
          <TouchableHighlight style={{ backgroundColor: useTheme(dark).appColor, position: "absolute", bottom: -5, right: 10, borderRadius: 50, padding: 4 }}>
            <MaterialIcons name="edit" size={24} color={useTheme(dark).white} />
          </TouchableHighlight>
        </View>
        <Text style={{ color: useTheme(dark).defautlText, marginTop: 20, fontSize: 22, fontWeight: "bold" }}>Elozino Ovedhe</Text>
      </View>


    </SafeAreaView>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "500",
  },
  avatarWrapper: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  avatarBox: {
    width: 150,
    height: 150,
    borderRadius: 100,
    position: "relative",
  },
})