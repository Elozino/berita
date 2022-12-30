import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '../../utils/theme'
import { TContext } from '../../types'
import { Context } from '../../context/ContextApp'

const AboutUs = ({ navigation }: any) => {
  const { dark } = useContext(Context) as TContext
  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }} >
        <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
        <Text style={{ color: useTheme(dark).defautlText, marginLeft: 10, fontSize: 20 }}>About Us</Text>
      </View>
      <View>
        <Image
          style={{ width: 200, height: 200, justifyContent: "center", alignSelf: "center" }}
          source={require("../../assets/images/logo1.png")} resizeMode="cover" />
        <Text style={{ color: useTheme(dark).defautlText, fontWeight: "bold", textAlign: "center", fontSize: 18, marginVertical: 10 }}>We Focus on the Digital News</Text>
        <Text style={{ marginTop: 10, color: useTheme(dark).defautlText,fontSize: 13, lineHeight: 18, letterSpacing: .1 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis nostrum ut molestias totam mollitia corrupti id quia magni repudiandae. Ipsam, doloribus architecto? Voluptates laboriosam dolore temporibus atque autem deleniti ea praesentium beatae, quo maiores repellendus, vero asperiores. Molestias incidunt quas illum voluptates ex atque accusantium possimus amet totam quae.
        </Text>
        <Text style={{marginTop: 10, color: useTheme(dark).defautlText,fontSize: 13, lineHeight: 18, letterSpacing: .1 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis nostrum ut molestias totam mollitia corrupti id quia magni repudiandae. Ipsam, doloribus architecto? Voluptates laboriosam dolore temporibus atque autem deleniti ea praesentium beatae, quo maiores repellendus, vero asperiores. Molestias incidunt quas illum voluptates ex atque accusantium possimus amet totam quae.
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default AboutUs

const styles = StyleSheet.create({})