import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { TContext } from '../../types'
import { Context } from '../../context/ContextApp'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../utils/theme'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const EditProfile = ({ navigation }: any) => {
  const { dark } = useContext(Context) as TContext
  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10}} >
        <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
        <Text style={{ color: useTheme(dark).defautlText, marginLeft: 10, fontSize: 20 }}>Edit Profile</Text>
      </View>


    </SafeAreaView>
  )
}

export default EditProfile

const styles = StyleSheet.create({})