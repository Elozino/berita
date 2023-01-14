import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { useTheme } from '../utils/theme'
import { NewsData, TContext } from '../types'
import { Context } from '../context/ContextApp'


interface IProps {
  headLines: {
    url: string;
    title: string;
    urlToImage: string;
  }
}
const FeaturedCard = ({ headLines }: IProps) => {
  const { dark } = useContext(Context) as TContext

  return (
    <View style={{ ...styles.featureImage }}>
      <Image
        source={{ uri: headLines?.urlToImage }}
        style={{ ...styles.image }}
      />
      <View style={{ position: "absolute", bottom: 10 }}>
        <View style={{ alignItems: "flex-start", flex: 1, justifyContent: "flex-end", paddingHorizontal: 20 }}>
          <Text style={{ color: useTheme(dark).white, fontWeight: "bold", marginBottom: 10 }}>{headLines?.title}</Text>
          <Pressable
            style={{ backgroundColor: useTheme(dark).appColor, paddingHorizontal: 15, paddingVertical: 7, borderRadius: 20 }}
            onPress={() => Linking.openURL(headLines.url)}>
            <Text style={{ color: useTheme(dark).white, fontWeight: "bold", fontSize: 12 }}>Read More</Text>
          </Pressable>
        </View>
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
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: 200
  },
})