import { ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TContext } from '../../types'
import { Context } from '../../context/ContextApp'
import { useTheme } from '../../utils/theme'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { globalStyles } from '../../constants/styles'
import { categories, topics } from '../../constants/data'
import NewsCard from '../../components/NewsCard'


const MyNews = ({ navigation }: any) => {
  const { dark, news } = useContext(Context) as TContext
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      {/* header */}
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }} >
          <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
          <Text style={{ color: useTheme(dark).defautlText, marginLeft: 10, fontSize: 20 }}>My News</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableHighlight style={{ backgroundColor: `${useTheme(dark).appColor}50`, borderRadius: 10, padding: 8, }}>
            <Ionicons name="archive" size={18} color={useTheme(dark).appColor} />
          </TouchableHighlight>
          {/* <TouchableHighlight style={{ backgroundColor: `${useTheme(dark).appColor}50`, borderRadius: 10, padding: 8, marginLeft: 10 }}>
            <MaterialCommunityIcons name="dots-vertical" size={18} color={useTheme(dark).appColor} />
          </TouchableHighlight> */}
        </View>
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

      {/* type of news slider */}
      <View>
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
              style={{ ...styles.newsTopic, backgroundColor: activeIndex === i ? useTheme(dark).appColor : "transparent", borderColor: useTheme(dark).appColor }}>
              <Text style={{ color: activeIndex === i ? useTheme(dark).white : useTheme(dark).appColor, fontSize: 14 }}>{item.topic}</Text>
            </TouchableHighlight>
          ))}
        </ScrollView>
      </View>

      {/* news lists */}
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={{ marginTop: 10 }}>
            {
              news.map(((item, i) => <NewsCard navigation={navigation} key={i} data={item} />))
            }
          </View>
        </ScrollView>
      </View>

      <View>
        <TouchableHighlight
          onPress={() => navigation.navigate("CreateNews")}
          style={{ ...styles.floatBtn, backgroundColor: useTheme(dark).appColor }}>
          <Ionicons name="add" size={28} color={useTheme(dark).white} />
        </TouchableHighlight>
      </View>

    </SafeAreaView>
  )
}

export default MyNews

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
  newsTopic: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
  },
  floatBtn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 15,
    right: 0
  }
})