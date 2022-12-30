import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useContext, } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '../../utils/theme'
import { TContext } from '../../types'
import { Context } from '../../context/ContextApp'

const Appearance = ({ navigation }: any) => {
  const { dark, setDark } = useContext(Context) as TContext

  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }} >
        <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
        <Text style={{ color: useTheme(dark).defautlText, marginLeft: 10, fontSize: 20 }}>Appearance</Text>
      </View>
      <View>
        <View>
          <View
            style={{ paddingVertical: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ color: useTheme(dark).defautlText, fontSize: 13, fontWeight: "bold" }}>Dark Mode</Text>
            <Switch
              onValueChange={() => setDark(!dark)}
              value={dark}
            />
          </View>
          <View style={{ backgroundColor: useTheme(dark).inputColor, height: 1, width: "100%" }} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Appearance

const styles = StyleSheet.create({})