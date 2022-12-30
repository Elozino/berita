import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { useTheme } from '../utils/theme'
import { TContext } from '../types'
import { Context } from '../context/ContextApp'

const FeaturedCard = () => {
  const { dark } = useContext(Context) as TContext

  return (
    <View style={{ ...styles.featureImage }}>
      <Image
        source={require("../assets/images/new3.png")}
        style={{ ...styles.image }}
      />
      <View style={{ alignItems: "flex-start", flex: 1, justifyContent: "flex-end" }}>
        <Text style={{ color: useTheme(dark).white, fontWeight: "bold", marginBottom: 10 }}>News Description | Header</Text>
        <Pressable
          style={{ backgroundColor: useTheme(dark).appColor, paddingHorizontal: 15, paddingVertical: 7, borderRadius: 20 }}
          onPress={() => Linking.openURL("https://www.google.com")}>
          <Text style={{ color: useTheme(dark).white, fontWeight: "bold", fontSize: 12 }}>Read More</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default FeaturedCard

const styles = StyleSheet.create({
  featureImage: {
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
    width: "100%",
    height: 200,
    marginVertical: 15,
    padding: 20,
  },
  image: {
    position: "absolute",
    resizeMode: "cover",
  },
})