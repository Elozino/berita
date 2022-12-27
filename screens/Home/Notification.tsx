import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../utils/theme'
import { Context } from '../../context/ContextApp'
import { TContext } from '../../types'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

const Notification = ({ navigation }: any) => {
  const { dark } = useContext(Context) as TContext

  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1, paddingHorizontal: 20 }}>
      {/* header */}
      <View style={{ ...styles.header }}>
        <View style={{ flexDirection: "row", alignItems: "center" }} >
          <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
          <Text style={{ color: useTheme(dark).defautlText, marginLeft: 10, fontSize: 20 }}>Notification</Text>
        </View>
        <TouchableHighlight
          style={{ backgroundColor: `${useTheme(dark).appColor}50`, borderRadius: 10, padding: 8, }}
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons name="dots-vertical" size={18} color={useTheme(dark).appColor} />
        </TouchableHighlight>
      </View>

      {/* no notification */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
        <View style={{ width: 100, height: 100, backgroundColor: useTheme(dark).appColor, borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
          <Ionicons name="notifications" size={40} color={useTheme(dark).white} />
        </View>
        <Text style={{ color: useTheme(dark).appColor, fontSize: 20, fontWeight: "400", marginTop: 20 }}>You have no notifications</Text>
      </View>
    </SafeAreaView>
  )
}

export default Notification

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "500",
  },
})