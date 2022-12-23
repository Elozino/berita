import { FlatList, Image, ImageBackground, Linking, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TContext } from '../../types'
import { Context } from '../../context/ContextApp'
import { useTheme } from '../../utils/theme'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { globalStyles } from '../../constants/styles'
import { topics } from '../../constants/data'
import NewsTopics from '../NewsTopics'

const HomeScreen = () => {
  const { dark } = useContext(Context) as TContext
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1, padding: 20 }}>
      {/* header */}
      <View style={styles.header}>
        <Text style={{ ...styles.headerText, color: useTheme(dark).defautlText }}>Berita</Text>
        <TouchableHighlight style={{ backgroundColor: `${useTheme(dark).appColor}50`, borderRadius: 10, padding: 8, }}>
          <Ionicons name="notifications" size={18} color={useTheme(dark).appColor} />
        </TouchableHighlight>
      </View>

      {/* search */}
      <View style={{ ...styles.search }}>
        <View style={[globalStyles.searchWrapper, { backgroundColor: useTheme(dark).secBg, flex: 1 }]}>
          <TextInput
            keyboardType='default'
            placeholder='Search'
            placeholderTextColor={useTheme(dark).inputColor}
            style={[globalStyles.inputField, { color: useTheme(dark).defautlText }]} />
          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="search-outline" size={18} color={useTheme(dark).defautlText} />
          </TouchableOpacity>
        </View>
        <TouchableHighlight style={{ backgroundColor: `${useTheme(dark).appColor}50`, borderRadius: 10, padding: 8, marginLeft: 10, }}>
          <Ionicons name="filter" size={18} color={useTheme(dark).appColor} />
        </TouchableHighlight>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {/* features header */}
        <View>
          {/* featured section */}
          <View style={{ ...styles.header }}>
            <Text style={{ color: useTheme(dark).defautlText, fontWeight: "500" }}>Featured</Text>
            <Pressable>
              <Text style={{ color: useTheme(dark).appColor, fontSize: 12 }}>See all</Text>
            </Pressable>
          </View>
          <View style={{ ...styles.featureImage }}>
            <Image
              source={require("../../assets/images/new3.png")}
              style={{ ...styles.image }}
            />
            <View style={{ alignItems: "flex-start", flex: 1, justifyContent: "flex-end" }}>
              <Text style={{ color: useTheme(dark).defautlText, fontWeight: "bold", marginBottom: 10 }}>News Description | Header</Text>
              <Pressable
                style={{ backgroundColor: useTheme(dark).appColor, paddingHorizontal: 15, paddingVertical: 7, borderRadius: 20 }}
                onPress={() => Linking.openURL("www.google.com")}>
                <Text style={{ color: useTheme(dark).defautlText, fontWeight: "bold", fontSize: 12 }}>Read More</Text>
              </Pressable>
            </View>
          </View>
        </View>

        {/* news section */}
        <View>
          <View style={{ ...styles.header, marginTop: 5 }}>
            <Text style={{ color: useTheme(dark).defautlText, fontWeight: "500" }}>News</Text>
            <Pressable>
              <Text style={{ color: useTheme(dark).appColor, fontSize: 12 }}>See all</Text>
            </Pressable>
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
            alwaysBounceHorizontal={true}
            bounces={true}
            decelerationRate="fast"
            contentContainerStyle={{
              justifyContent: "space-between",
              marginVertical: 10,
              width: "250%"
            }}>
            {topics.map((item, i) => (
              <TouchableHighlight
                key={i}
                onPress={() => setActiveIndex(i)}
                style={{ ...styles.newsTopic, backgroundColor: activeIndex === i ? useTheme(dark).appColor : useTheme(dark).secBg, borderColor: useTheme(dark).appColor }}>
                <Text style={{ color: activeIndex === i ? useTheme(dark).defautlText : useTheme(dark).appColor, fontSize: 14 }}>{item.topic}</Text>
              </TouchableHighlight>
            ))}
          </ScrollView>
          {/* <FlatList
            data={topics}
            keyExtractor={(_, i) => i.toFixed()}
            renderItem={({ item }) => <Text>{item.topic}</Text>}
            showsVerticalScrollIndicator={false}
            // columnWrapperStyle={{
              //   marginBottom: 10
              // }}
            /> */}
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerText: {
    fontSize: 18,
    fontWeight: "500",
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
  },
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
  newsTopic: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    // marginRight: 5,
  }
})