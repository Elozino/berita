import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Context } from '../../context/ContextApp'
import { useTheme } from '../../utils/theme'

const ForgotPassword = () => {
  const { dark } = useContext(Context)
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      {/* header */}
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} />
        </TouchableOpacity>
        <Text>Forgot Password</Text>
      </View>
      {/* image */}
      
      {/* <Image source={ } /> */}
      <Text>Select which contact details should we use to reset your password</Text>
      {/* reset mode */}
      <View>
        <TouchableOpacity>
          <View>
            <Text>via SMS:</Text>
            <Text>+234809*****90</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text>via Email</Text>
            <Text>oved********@gmail.com</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ backgroundColor: useTheme(dark).appColor, padding: 10, borderRadius: 20, alignItems: "center", marginBottom: 40 }}>
        <Text style={{ color: useTheme(dark).defautlText }}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView >
  )
}

export default ForgotPassword

const styles = StyleSheet.create({})