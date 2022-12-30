import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '../../utils/theme'
import { TContext } from '../../types'
import { Context } from '../../context/ContextApp'

const Help = ({ navigation }: any) => {
  const { dark } = useContext(Context) as TContext
  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }} >
        <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
        <Text style={{ color: useTheme(dark).defautlText, marginLeft: 10, fontSize: 20 }}>Help</Text>
      </View>
      <ScrollView>
        <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 20 }}>
          <Text style={{ color: useTheme(dark).defautlText, fontWeight: "bold", fontSize: 13 }}>FAQ</Text>
          <MaterialCommunityIcons name="chevron-right" size={24} color={useTheme(dark).appColor} />
        </TouchableOpacity>
        <View style={{ backgroundColor: useTheme(dark).inputColor, height: 1, width: "100%" }} />
        <TouchableOpacity
          onPress={() => navigation.navigate("ContactUs")}
          style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 20 }}>
          <Text style={{ color: useTheme(dark).defautlText, fontWeight: "bold", fontSize: 13 }}>Contact Us</Text>
          <MaterialCommunityIcons name="chevron-right" size={24} color={useTheme(dark).appColor} />
        </TouchableOpacity>
        <View style={{ backgroundColor: useTheme(dark).inputColor, height: 1, width: "100%" }} />
        <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 20 }}>
          <Text style={{ color: useTheme(dark).defautlText, fontWeight: "bold", fontSize: 13 }}>Terms & Conditions</Text>
          <MaterialCommunityIcons name="chevron-right" size={24} color={useTheme(dark).appColor} />
        </TouchableOpacity>
        <View style={{ backgroundColor: useTheme(dark).inputColor, height: 1, width: "100%" }} />
        <TouchableOpacity
          //  onPress={()=> navigation.navigate("ContactUs")}
          style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 20 }}>
          <Text style={{ color: useTheme(dark).defautlText, fontWeight: "bold", fontSize: 13 }}>Privacy Policy</Text>
          <MaterialCommunityIcons name="chevron-right" size={24} color={useTheme(dark).appColor} />
        </TouchableOpacity>
        <View style={{ backgroundColor: useTheme(dark).inputColor, height: 1, width: "100%" }} />
        <TouchableOpacity
          onPress={() => navigation.navigate("AboutUs")}
          style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 20 }}>
          <Text style={{ color: useTheme(dark).defautlText, fontWeight: "bold", fontSize: 13 }}>About Us</Text>
          <MaterialCommunityIcons name="chevron-right" size={24} color={useTheme(dark).appColor} />
        </TouchableOpacity>
        <View style={{ backgroundColor: useTheme(dark).inputColor, height: 1, width: "100%" }} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Help

const styles = StyleSheet.create({})