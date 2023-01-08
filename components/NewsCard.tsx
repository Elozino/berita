import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { TContext } from '../types'
import { Context } from '../context/ContextApp'
import { useTheme } from '../utils/theme'

interface IProps {
  navigation: any;
  data: {
    image: any;
    topic: string;
    title: string;
    urlToImage: string;
    content: string;
    source: {
      name: string;
    }
  }
}

const NewsCard = ({ navigation, data }: IProps) => {
  const { dark, category } = useContext(Context) as TContext

  // console.log(data.urlToImage)
  return (
    <TouchableOpacity
      activeOpacity={.8}
      onPress={() => navigation.navigate("NewsDetails", data)}>
      <View style={{ ...styles.wrapper, backgroundColor: useTheme(dark).secBg }}>
        <Image source={{ uri: data?.urlToImage }} style={{ ...styles.image }} />
        <View style={{ ...styles.content }}>
          <Text style={{ color: useTheme(dark).defautlText, fontSize: 14, fontWeight: "bold" }}>
            {data.title?.slice(0, 40)}...
          </Text>
          <View style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <Text style={{ color: useTheme(dark).defautlText, fontSize: 12, }}>{data.source.name}</Text>
            <View
              style={{ ...styles.newsTopic, backgroundColor: useTheme(dark).secBg, borderColor: useTheme(dark).appColor }}>
              <Text style={{ color: useTheme(dark).appColor, fontSize: 12 }}>{category.charAt(0).toUpperCase() + category.slice(1)}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
    width: "60%"
  },
  newsTopic: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20,
    borderWidth: 1,
    marginLeft: 10
  }
})