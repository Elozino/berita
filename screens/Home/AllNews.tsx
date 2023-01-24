import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../utils/theme'
import { NewsData, TContext } from '../../types'
import { Context } from '../../context/ContextApp'
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { globalStyles } from '../../constants/styles'
import { categories } from '../../constants/data'
import NewsCard from '../../components/NewsCard'
import { API_KEY } from '@env';
import Loader from '../../components/Loader'


const AllNews = ({ navigation }: any) => {
  const { dark, news, category } = useContext(Context) as TContext
  const [activeIndex, setActiveIndex] = useState(0)
  const [allNews, setAllNews] = useState<NewsData[]>([])
  const [filteredNews, setFilteredNews] = useState<NewsData[]>([])


  const fetchData = async () => {
    const url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${API_KEY}`
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setAllNews(data.articles)
        setFilteredNews(data.articles)
      })
      .catch(error => console.log(error))
  }

  useLayoutEffect(() => {
    fetchData()
  }, [category])


  const handleFilter = (searchValue: string) => {
    const filter = allNews?.filter((item) => {
      if (item.content != null && item.title != null) {
        return item.content.toLowerCase().includes(searchValue.toLowerCase()) || item.title.toLowerCase().includes(searchValue.toLowerCase())
      }
    })
    setFilteredNews(filter)
  }

  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      {/* header */}
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }} >
          <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
          <Text style={{ color: useTheme(dark).defautlText, marginLeft: 10, fontSize: 20 }}>All News</Text>
        </View>
      </View>

      {/* search */}
      <View style={{ ...styles.search }}>
        <View style={[globalStyles.searchWrapper, { backgroundColor: useTheme(dark).secBg, flex: 1 }]}>
          <TextInput
            keyboardType='default'
            placeholder='AllNews'
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
            width: "160%"
          }}>
          {categories.map((item, i) => (
            <TouchableHighlight
              key={i}
              onPress={() => setActiveIndex(i)}
              style={{ ...styles.newsTopic, backgroundColor: activeIndex === i ? useTheme(dark).appColor : "transparent", borderColor: useTheme(dark).appColor }}>
              <Text style={{ color: activeIndex === i ? useTheme(dark).white : useTheme(dark).appColor, fontSize: 14 }}>{item.category}</Text>
            </TouchableHighlight>
          ))}
        </ScrollView>
      </View>

      {/* search results */}
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={{ marginTop: 10 }}>
            {
              filteredNews.length < 0 ? (
                <Loader handleTryAgain={fetchData} />
              ) :
                filteredNews.map(((item, i) => <NewsCard navigation={navigation} key={i} data={item} />))
            }
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default AllNews

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