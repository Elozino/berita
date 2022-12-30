import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '../../utils/theme'
import { TContext } from '../../types'
import { Context } from '../../context/ContextApp'
import { globalStyles } from '../../constants/styles'

const ContactUs = ({ navigation }: any) => {
  const { dark } = useContext(Context) as TContext
  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }} >
        <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
        <Text style={{ color: useTheme(dark).defautlText, marginLeft: 10, fontSize: 20 }}>Contact Us</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "space-between", marginVertical: 20 }}>
        <View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ marginLeft: 20, color: useTheme(dark).defautlText }}>Full Name</Text>
            <View style={[globalStyles.inputWrapper, { backgroundColor: useTheme(dark).secBg }]}>
              <TextInput
                // value={userInfo.fullname}
                // onChangeText={(text) => handleUserInputs("fullname", text)}
                keyboardType="default"
                placeholder='Full Name'
                placeholderTextColor={useTheme(dark).inputColor}
                style={[globalStyles.input, { color: useTheme(dark).defautlText }]}
              />
            </View>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ marginLeft: 20, color: useTheme(dark).defautlText }}>Email</Text>
            <View style={[globalStyles.inputWrapper, { backgroundColor: useTheme(dark).secBg }]}>
              <TextInput
                // value={userInfo.website}
                // onChangeText={(text) => handleUserInputs("website", text)}
                placeholder='Email'
                keyboardType="default"
                placeholderTextColor={useTheme(dark).inputColor}
                style={[globalStyles.inputField, globalStyles.input, { color: useTheme(dark).defautlText }]} />
              <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons name="email" size={18} color={useTheme(dark).inputColor} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ marginLeft: 20, color: useTheme(dark).defautlText }}>Message</Text>
            <View style={{ backgroundColor: useTheme(dark).secBg, height: 150, borderRadius: 15, marginTop: 10 }}>
              <TextInput
                // value={userInfo.website}
                // onChangeText={(text) => handleUserInputs("website", text)}
                placeholder='Message'
                multiline={true}
                keyboardType="default"
                placeholderTextColor={useTheme(dark).inputColor}
                style={{ color: useTheme(dark).defautlText, paddingHorizontal: 20, paddingVertical: 10 }} />
            </View>
          </View>
        </View>
        <Pressable style={{ backgroundColor: useTheme(dark).appColor, ...globalStyles.button }}>
          <Text style={{ color: useTheme(dark).white }}>Continue</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default ContactUs

const styles = StyleSheet.create({})