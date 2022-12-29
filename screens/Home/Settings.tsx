import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../utils/theme'
import { TContext } from '../../types'
import { Context } from '../../context/ContextApp'
import { FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { BottomSheet } from 'react-native-btr'
// import BottomSheet from 'react-native-simple-bottom-sheet';


const Settings = ({ navigation }: any) => {
  const { dark } = useContext(Context) as TContext
  const [visible, setVisible] = useState(false);

  function toggle() {
    setVisible((visible) => !visible);
  }
  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }} >
        <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
        <Text style={{ color: useTheme(dark).defautlText, marginLeft: 10, fontSize: 20 }}>Settings</Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          marginTop: 15
        }}
      >
        <View>
          <View style={{ backgroundColor: useTheme(dark).inputColor, height: 1, width: "100%" }} />
          <TouchableOpacity
            style={{ paddingVertical: 15, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ backgroundColor: `${useTheme(dark).appColor}20`, width: 40, height: 40, borderRadius: 25, alignItems: "center", justifyContent: "center" }}>
                <Ionicons name="person" size={14} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
              </View>
              <Text style={{ marginLeft: 10, color: useTheme(dark).defautlText, fontSize: 13, fontWeight: "bold" }}>Edit Profile</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
          </TouchableOpacity>
        </View>
        <View>
          <View style={{ backgroundColor: useTheme(dark).inputColor, height: 1, width: "100%" }} />
          <TouchableOpacity
            style={{ paddingVertical: 15, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ backgroundColor: `${useTheme(dark).appColor}20`, width: 40, height: 40, borderRadius: 25, alignItems: "center", justifyContent: "center" }}>
                <Ionicons name="notifications" size={14} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
              </View>
              <Text style={{ marginLeft: 10, color: useTheme(dark).defautlText, fontSize: 13, fontWeight: "bold" }}>Notification</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
          </TouchableOpacity>
        </View>
        <View>
          <View style={{ backgroundColor: useTheme(dark).inputColor, height: 1, width: "100%" }} />
          <TouchableOpacity
            style={{ paddingVertical: 15, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ backgroundColor: `${useTheme(dark).appColor}20`, width: 40, height: 40, borderRadius: 25, alignItems: "center", justifyContent: "center" }}>
                <FontAwesome5 name="unlock-alt" size={14} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
              </View>
              <Text style={{ marginLeft: 10, color: useTheme(dark).defautlText, fontSize: 13, fontWeight: "bold" }}>Security</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
          </TouchableOpacity>
        </View>
        <View>
          <View style={{ backgroundColor: useTheme(dark).inputColor, height: 1, width: "100%" }} />
          <TouchableOpacity
            style={{ paddingVertical: 15, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ backgroundColor: `${useTheme(dark).appColor}20`, width: 40, height: 40, borderRadius: 25, alignItems: "center", justifyContent: "center" }}>
                <MaterialIcons name="visibility" size={16} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
              </View>
              <Text style={{ marginLeft: 10, color: useTheme(dark).defautlText, fontSize: 13, fontWeight: "bold" }}>Appearance</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
          </TouchableOpacity>
        </View>
        <View>
          <View style={{ backgroundColor: useTheme(dark).inputColor, height: 1, width: "100%" }} />
          <TouchableOpacity
            style={{ paddingVertical: 15, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ backgroundColor: `${useTheme(dark).appColor}20`, width: 40, height: 40, borderRadius: 25, alignItems: "center", justifyContent: "center" }}>
                <MaterialCommunityIcons name="alert-circle" size={14} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
              </View>
              <Text style={{ marginLeft: 10, color: useTheme(dark).defautlText, fontSize: 13, fontWeight: "bold" }}>Help</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
          </TouchableOpacity>
        </View>
        <View>
          <View style={{ backgroundColor: useTheme(dark).inputColor, height: 1, width: "100%" }} />
          <TouchableOpacity
            onPress={toggle}
            style={{ paddingVertical: 15, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ backgroundColor: `${useTheme(dark).appColor}20`, width: 40, height: 40, borderRadius: 25, alignItems: "center", justifyContent: "center" }}>
                <MaterialIcons name="logout" size={14} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
              </View>
              <Text style={{ marginLeft: 10, color: useTheme(dark).defautlText, fontSize: 13, fontWeight: "bold" }}>Logout</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggle}
        onBackdropPress={toggle}
      >
        <View style={[styles.card,
        { backgroundColor: useTheme(dark).bg}
        ]}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <MaterialIcons name="logout" size={40} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
          </View>
          <Text style={{ color: useTheme(dark).defautlText, textAlign: "center", fontWeight: "bold", fontSize: 13 }}>Are you sure you want to logout?</Text>
          <View
            style={{ width: "90%", flexDirection: "row", justifyContent: "space-between" }}>
            <Pressable
              onPress={toggle}
              style={{ ...styles.pressable, borderColor: useTheme(dark).appColor }}>
              <Text style={{ color: useTheme(dark).defautlText }}>Cancel</Text>
            </Pressable>
            <Pressable style={{ ...styles.pressable, backgroundColor: useTheme(dark).appColor, borderColor: useTheme(dark).appColor }}>
              <Text style={{ color: useTheme(dark).white }}>Yes, Logout</Text>
            </Pressable>
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView >
  )
}

export default Settings

const styles = StyleSheet.create({
  card: {
    backgroundColor: "green",
    height: 220,
    paddingBottom: 35,
    paddingTop: 30,
    justifyContent: "space-between",
    alignItems: "center",
     borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    elevation: 10,
  },
  pressable: {
    padding: 10,
    alignItems: "center",
    width: "47%",
    borderWidth: 2,
    borderRadius: 20,

  }
})