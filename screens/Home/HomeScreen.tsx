import { FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TContext } from '../../types'
import { Context } from '../../context/ContextApp'
import { useTheme } from '../../utils/theme'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { globalStyles } from '../../constants/styles'
import { topics } from '../../constants/data'
import NewsCard from '../../components/NewsCard'
import FeaturedCard from '../../components/FeaturedCard'
import { StatusBar } from 'expo-status-bar'


const HomeScreen = ({ navigation }: any) => {
  const { dark } = useContext(Context) as TContext
  const [activeIndex, setActiveIndex] = useState(0)

  // const fetchData = async () => {
  //   const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=622fd3964e9b4eb391c3e56d2acc414f"
  //   await fetch(url)
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.log(error))
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <StatusBar style={dark ? "light" : "dark"} />
      {/* header */}
      <View style={styles.header}>
        <Text style={{ ...styles.headerText, color: useTheme(dark).defautlText }}>Berita</Text>
        <TouchableHighlight
          onPress={() => navigation.navigate("Notification")}
          style={{ backgroundColor: `${useTheme(dark).appColor}50`, borderRadius: 10, padding: 8, }}>
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

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}
        alwaysBounceHorizontal={true}
        bounces={true}
        decelerationRate="fast">
        {/* featured section */}
        <View>
          {/* features header */}
          <View style={{ ...styles.header }}>
            <Text style={{ color: useTheme(dark).defautlText, fontWeight: "500" }}>Featured</Text>
            <Pressable onPress={() => navigation.navigate("FeaturedNews")}>
              <Text style={{ color: useTheme(dark).appColor, fontSize: 12 }}>See all</Text>
            </Pressable>
          </View>
          {/* feature card */}
          <FeaturedCard />
        </View>

        {/* news section */}
        <View>
          <View style={{ ...styles.header, marginTop: 5 }}>
            <Text style={{ color: useTheme(dark).defautlText, fontWeight: "500" }}>News</Text>
            <Pressable>
              <Text style={{ color: useTheme(dark).appColor, fontSize: 12 }}>See all</Text>
            </Pressable>
          </View>

          {/* type of news slider */}
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
                <Text style={{ color: activeIndex === i ? useTheme(dark).white : useTheme(dark).appColor, fontSize: 14 }}>{item.topic}</Text>
              </TouchableHighlight>
            ))}
          </ScrollView>

          {/* news cards */}
          <View style={{ marginTop: 10 }}>
            {
              topics.map(((item, i) => <NewsCard navigation={navigation} key={i} data={item} />))
            }
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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