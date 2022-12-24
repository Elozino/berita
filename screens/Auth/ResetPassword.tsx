import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '../../utils/theme'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import { Context } from '../../context/ContextApp'
import { TContext } from '../../types'

const ResetPassword = () => {
  const navigation = useNavigation()
  const { dark } = useContext(Context) as TContext
  return (
    <SafeAreaView>
      {/* header */}
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} />
        </TouchableOpacity>
        <Text>Forgot Password</Text>
      </View>
      {/* image */}

      {/* password form */}
      <View>
        <Text>Create a new password</Text>
        <View>
          <Text>New Password</Text>
          <View>
            <TextInput placeholder='New Password' keyboardType='default' />
            <MaterialCommunityIcons name="eye" size={18} color={useTheme(dark).appColor} />
          </View>
        </View>
        <View>
          <Text>Confirm New Password</Text>
          <View>
            <TextInput placeholder='Confirm New Password' keyboardType='default' />
            <MaterialCommunityIcons name="eye" size={18} color={useTheme(dark).appColor} />
          </View>
        </View>
        <View style={{ paddingTop: 5, flexDirection: "row", alignItems: "center" }}>
          <Switch
            value={true}
            onValueChange={() => { }}
            thumbColor={useTheme(dark).defautlText}
          />
          <Text style={{ paddingLeft: 10, color: useTheme(dark).defautlText }}>Remember me</Text>
        </View>
      </View>

      {/* button */}
      <TouchableOpacity style={{ backgroundColor: useTheme(dark).appColor, padding: 10, borderRadius: 20, alignItems: "center", marginBottom: 40 }}>
        <Text style={{ color: useTheme(dark).defautlText }}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ResetPassword

const styles = StyleSheet.create({})