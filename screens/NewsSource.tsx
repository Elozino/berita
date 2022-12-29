import { ActivityIndicator, FlatList, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
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
  const [filteredNewsSource, setFilteredNewsSource] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const navigation = useNavigation()
  const [check, setCheck] = useState(true)

  const searchFilterFunction = (text: string) => {
    if (text) {
      const newData = newsSource.filter(
        (item: any) => {
          const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
      setFilteredNewsSource(newData);
      setSearchInput(text);
    } else {
      setFilteredNewsSource(newsSource);
      setSearchInput(text);
    }
  };

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines/sources?apiKey=622fd3964e9b4eb391c3e56d2acc414f")
      .then(response => response.json())
      .then(data => {
        const newsName = data.sources.map((item: { name: string }, i: any) => item)
        setNewsSource(newsName)
        setFilteredNewsSource(newsName)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10, paddingHorizontal: 20 }} >
        <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
        <Text style={{ color: useTheme(dark).defautlText, marginLeft: 10, fontSize: 20 }}>Choose Your News Sources</Text>
      </View>
      {/* search field */}
      <View style={[globalStyles.searchWrapper, { backgroundColor: useTheme(dark).secBg, marginHorizontal: 20, }]}>
        <TextInput
          value={searchInput}
          onChangeText={(text) => searchFilterFunction(text)}
          placeholder='Search'
          placeholderTextColor={useTheme(dark).inputColor}
          style={[globalStyles.inputField, { color: useTheme(dark).defautlText }]} />
        <TouchableOpacity
          onPress={() => {
            searchFilterFunction(searchInput)
            Keyboard.dismiss()
          }}
          style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="search-outline" size={18} color={useTheme(dark).defautlText} />
        </TouchableOpacity>
      </View>

      {/* list of countries */}
      {newsSource.length < 1 ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color={useTheme(dark).appColor} />
        </View>
      ) : filteredNewsSource.length < 1 ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
          <View style={{ width: 100, height: 100, backgroundColor: useTheme(dark).appColor, borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
            <FontAwesome5 name="frown" size={40} color={useTheme(dark).white} />
          </View>
          <Text style={{ color: useTheme(dark).appColor, fontSize: 20, fontWeight: "400", marginTop: 20 }}>Oops! Source not found</Text>
        </View>
      ) : (
        <FlatList
          data={filteredNewsSource}
          keyExtractor={(_, i) => i.toFixed()}
          renderItem={({ item }) =>
            <NewsSourceCard
              source={item}
              setCheck={setCheck}
            />}
          numColumns={2}
          contentContainerStyle={{
            padding: 20
          }}
          columnWrapperStyle={{
            justifyContent: "space-between",
            paddingBottom: 15,
          }}
        />
      )
      }

      {/* button */}
      <StickyBottomButton navigatingTo={"Profile"} disabled={check} />
    </SafeAreaView >
  )
}

export default NewsSource

const styles = StyleSheet.create({})