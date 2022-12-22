import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '../utils/theme'
import { globalStyles } from '../constants/styles'
import StickyBottomButton from '../components/StickyBottomButton'
import { TContext } from '../types'
import { Context } from '../context/ContextApp'
import { useNavigation } from '@react-navigation/native'
import NewsSourceCard from '../components/NewsSourceCard'


const NewsSource = () => {
  const { dark } = useContext(Context) as TContext
  const [newsSource, setNewsSource] = useState([])
  const navigation = useNavigation()

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines/sources?apiKey=622fd3964e9b4eb391c3e56d2acc414f")
      .then(response => response.json())
      .then(data => {
        const newsName = data.sources.map((item: { name: string }, i: any) => item)
        setNewsSource(newsName)
      })
      .catch(err => console.log(err))
  }, [])

  // console.log(newsSource)

  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10, paddingHorizontal: 20 }} >
        <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
        <Text style={{ color: useTheme(dark).defautlText, marginLeft: 10, fontSize: 20 }}>Choose Your News Sources</Text>
      </View>
      {/* search field */}
      <View style={[globalStyles.searchWrapper, { backgroundColor: useTheme(dark).secBg, marginHorizontal: 20, }]}>
        <TextInput
          placeholder='Search'
          placeholderTextColor={useTheme(dark).inputColor}
          style={[globalStyles.inputField, { color: useTheme(dark).defautlText }]} />
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="search-outline" size={18} color={useTheme(dark).defautlText} />
        </TouchableOpacity>
      </View>

      {/* list of countries */}
      <FlatList
        data={newsSource}
        keyExtractor={(_, i) => i.toFixed()}
        renderItem={({ item }) => <NewsSourceCard source={item} />}
        numColumns={2}
        contentContainerStyle={{
          padding: 20
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingBottom: 15,
        }}
      />

      {/* button */}
      <StickyBottomButton navigatingTo={"Profile"} />
    </SafeAreaView >
  )
}

export default NewsSource

const styles = StyleSheet.create({})