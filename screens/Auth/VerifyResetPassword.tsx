import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from '../../utils/theme'
import { TContext } from '../../types'
import { Context } from '../../context/ContextApp'

const VerifyResetPassword = () => {
  const navigation = useNavigation()
  const { dark } = useContext(Context) as TContext
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} />
        </TouchableOpacity>
        <Text>Forgot Password</Text>
      </View>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>Code has been sent to 234809*****90</Text>
        <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 40 }}>
          <View>
            <TextInput
              value=''
              onChangeText={() => { }}
              keyboardType="phone-pad"
              style={{ flex: 1 }}
            />
          </View>
          <View>
            <TextInput
              value=''
              onChangeText={() => { }}
              keyboardType="phone-pad"
              style={{ flex: 1 }}
            />
          </View>
          <View>
            <TextInput
              value=''
              onChangeText={() => { }}
              keyboardType="phone-pad"
              style={{ flex: 1 }}
            />
          </View>
          <View>
            <TextInput
              value=''
              onChangeText={() => { }}
              keyboardType="phone-pad"
              style={{ flex: 1 }}
            />
          </View>
        </View>
        <Text>Resend code in <Text>X</Text>s</Text>
      </View>

      <TouchableOpacity style={{ backgroundColor: useTheme(dark).appColor, padding: 10, borderRadius: 20, alignItems: "center", marginBottom: 40 }}>
        <Text style={{ color: useTheme(dark).defautlText }}>Verify</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default VerifyResetPassword

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})