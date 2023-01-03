import { Image, Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TContext } from '../../types'
import { Context } from '../../context/ContextApp'
import { useTheme } from '../../utils/theme'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';

const UserProfile = ({ navigation }: any) => {
  const { dark, userInfo, setUserInfo } = useContext(Context) as TContext

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

      {/* name */}
      <Text style={{ color: useTheme(dark).defautlText, marginTop: 20, fontSize: 22, fontWeight: "bold" }}>Elozino A. Ovedhe</Text>

      {/* username */}
      <Text>Username</Text>

      {/* about */}
      <Text>About You</Text>

      {/* website */}
      <Pressable>
        <Text>Website</Text>
      </Pressable>

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