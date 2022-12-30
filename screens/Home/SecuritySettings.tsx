import { Pressable, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '../../utils/theme'
import { TContext } from '../../types'
import { Context } from '../../context/ContextApp'
import { globalStyles } from '../../constants/styles'

const SecuritySettings = ({ navigation }: any) => {
  const { dark, setDark } = useContext(Context) as TContext

  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }} >
        <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
        <Text style={{ color: useTheme(dark).defautlText, marginLeft: 10, fontSize: 20 }}>Security</Text>
      </View>
      <View>
        <View>
          <View
            style={{ paddingVertical: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ color: useTheme(dark).defautlText, fontSize: 13, fontWeight: "bold" }}>Face ID</Text>
            <Switch
              // onValueChange={() => setDark(!dark)}
              value={dark}
            />
          </View>
          <View style={{ backgroundColor: useTheme(dark).inputColor, height: 1, width: "100%" }} />
        </View>
        <View>
          <View
            style={{ paddingVertical: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ color: useTheme(dark).defautlText, fontSize: 13, fontWeight: "bold" }}>Remember Me</Text>
            <Switch
              // onValueChange={() => setDark(!dark)}
              value={dark}
            />
          </View>
          <View style={{ backgroundColor: useTheme(dark).inputColor, height: 1, width: "100%" }} />
        </View>
        <View>
          <View
            style={{ paddingVertical: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ color: useTheme(dark).defautlText, fontSize: 13, fontWeight: "bold" }}>Touch ID</Text>
            <Switch
              // onValueChange={() => setDark(!dark)}
              value={dark}
            />
          </View>
          <View style={{ backgroundColor: useTheme(dark).inputColor, height: 1, width: "100%" }} />
        </View>
        <TouchableOpacity
          activeOpacity={.8}
          style={{ ...globalStyles.button, borderWidth: 1, borderColor: useTheme(dark).appColor, borderRadius: 30, marginTop: 20 }}>
          <Text style={{ color: useTheme(dark).appColor }}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SecuritySettings

const styles = StyleSheet.create({})