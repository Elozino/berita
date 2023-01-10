import { Image, Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TContext } from '../../types'
import { Context } from '../../context/ContextApp'
import { useTheme } from '../../utils/theme'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';

const UserProfile = ({ navigation }: any) => {
  const { dark, userInfo, setUserInfo, news } = useContext(Context) as TContext

  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      {/* header */}
      <View style={styles.header}>
        <Text style={{ ...styles.headerText, color: useTheme(dark).defautlText }}>My Profile</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableHighlight
            onPress={() => navigation.navigate("EditUserProfile")}
            style={{ backgroundColor: `${useTheme(dark).appColor}50`, borderRadius: 10, padding: 8, }}>
            <MaterialIcons name="edit" size={18} color={useTheme(dark).appColor} />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigation.navigate("Settings")}
            style={{ backgroundColor: `${useTheme(dark).appColor}50`, borderRadius: 10, padding: 8, marginLeft: 10 }}>
            <Ionicons name="settings" size={18} color={useTheme(dark).appColor} />
          </TouchableHighlight>
        </View>
      </View>

      {/* profile avatar */}
      <View style={styles.avatarWrapper}>
        <View style={[{ backgroundColor: useTheme(dark).defautlText }, styles.avatarBox]}>
          {userInfo.profilePicture && <Image source={{ uri: userInfo.profilePicture }} style={{ width: "100%", height: "100%", borderRadius: 100 }} resizeMode="cover" />}
        </View>
      </View>

      <View style={{ flexDirection: "column", alignItems: "center" }}>
        {/* name */}
        <Text style={{ color: useTheme(dark).defautlText, marginTop: 20, fontSize: 22, fontWeight: "bold" }}>Elozino A. Ovedhe</Text>
        {/* about */}
        <Text style={{ color: useTheme(dark).defautlText, marginVertical: 10, textAlign: "center" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A illum velit doloribus exercitationem quidem que!
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: useTheme(dark).appColor, fontSize: 16, fontWeight: "bold" }}>
            Total News
          </Text>
          <Text style={{ color: useTheme(dark).defautlText, fontSize: 22, marginTop: 5 }}>
            {news.length}
          </Text>
        </View>
        <View style={{ height: 60, width: 1, backgroundColor: useTheme(dark).appColor }} />
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: useTheme(dark).appColor, fontSize: 16, fontWeight: "bold" }}>
            Total News
          </Text>
          <Text style={{ color: useTheme(dark).defautlText, fontSize: 22, marginTop: 5 }}>
            300
          </Text>
        </View>
        <View style={{ height: 60, width: 1, backgroundColor: useTheme(dark).appColor }} />
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: useTheme(dark).appColor, fontSize: 16, fontWeight: "bold" }}>
            My News
          </Text>
          <Text style={{ color: useTheme(dark).defautlText, fontSize: 22, marginTop: 5 }}>
            0
          </Text>
        </View>
      </View>
      {/* website */}
      <Pressable style={{ marginTop: 20, backgroundColor: useTheme(dark).appColor, flexDirection: "row", justifyContent: "center", alignItems: "center", paddingVertical: 10, borderRadius: 30 }}>
        <MaterialCommunityIcons name="web" color={useTheme(dark).white} size={16} />
        <Text style={{ color: useTheme(dark).white }}> Website</Text>
      </Pressable>
      {/* username */}
      <Text>Username</Text>
    </SafeAreaView >
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