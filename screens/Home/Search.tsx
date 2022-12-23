import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../utils/theme'
import { TContext } from '../../types'
import { Context } from '../../context/ContextApp'
import { Ionicons } from '@expo/vector-icons'
import { globalStyles } from '../../constants/styles'
import { topics } from '../../constants/data'
import NewsCard from '../../components/NewsCard'

const Search = () => {
  const { dark } = useContext(Context) as TContext
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
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
              style={{ ...styles.newsTopic, backgroundColor: activeIndex === i ? useTheme(dark).appColor : useTheme(dark).secBg, borderColor: useTheme(dark).appColor }}>
              <Text style={{ color: activeIndex === i ? useTheme(dark).defautlText : useTheme(dark).appColor, fontSize: 14 }}>{item.topic}</Text>
            </TouchableHighlight>
          ))}
        </ScrollView>
      </View>

      {/* search results */}
      <View style={{ flex: 1 }}>
        <View style={{ ...styles.header, marginVertical: 10 }}>
          <Text style={{ color: useTheme(dark).defautlText, fontWeight: "500" }}>Search Results</Text>
          <Text style={{ color: useTheme(dark).appColor, fontSize: 12 }}>100 founds</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={{ marginTop: 10 }}>
            {
              topics.map(((item, i) => <NewsCard key={i} data={item} />))
            }
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Search

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
  }
})