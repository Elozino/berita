import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useContext } from 'react'
import { TContext } from '../types'
import { Context } from '../context/ContextApp'
import { useTheme } from '../utils/theme'

interface IProps {
  navigation: any;
  data: {
    image: any;
    topic: string;
  }
}

const NewsCard = ({ navigation, data }: IProps) => {
  const { dark } = useContext(Context) as TContext

  return (
    <TouchableHighlight onPress={() => navigation.navigate("NewsDetails", data)}>
      <View style={{ ...styles.wrapper, backgroundColor: useTheme(dark).secBg }}>
        <Image source={data.image} style={{ ...styles.image }} />
        <View style={{ ...styles.content }}>
          <Text style={{ color: useTheme(dark).defautlText }}>News Headline</Text>
          <View style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center"
          }}>
            <Text style={{ color: useTheme(dark).defautlText }}>News Source</Text>
            <View
              style={{ ...styles.newsTopic, backgroundColor: useTheme(dark).secBg, borderColor: useTheme(dark).appColor }}>
              <Text style={{ color: useTheme(dark).appColor, fontSize: 14 }}>{data.topic}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default NewsCard

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flex: 1,
    // backgroundColor: "#fff",
    marginBottom: 10,
    height: 120,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    resizeMode: "cover",
    width: "40%",
    height: "100%",
  },
  content: {
    padding: 15,
    paddingVertical: 15,
    paddingLeft: 15,
  },
  newsTopic: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20,
    borderWidth: 1,
    marginLeft: 10
  }
})