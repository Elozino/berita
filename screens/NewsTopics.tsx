import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useTheme } from '../utils/theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { TContext } from '../types'
import { Context } from '../context/ContextApp'
import { globalStyles } from '../constants/styles'
import { useNavigation } from '@react-navigation/native'
import StickyBottomButton from '../components/StickyBottomButton'
import TopicCard from '../components/TopicCard'
import { categories } from "../constants/data"

const NewsTopics = () => {
  const { dark } = useContext(Context) as TContext
  const [check, setCheck] = useState(true)
  const navigation = useNavigation()

  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10, marginHorizontal: 20 }} >
        <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
        <Text style={{ color: useTheme(dark).defautlText, marginLeft: 10, fontSize: 20, }}>Choose Your Topics</Text>
      </View>
      {/* search field */}
      <View style={[globalStyles.searchWrapper, { backgroundColor: useTheme(dark).secBg, marginHorizontal: 20 }]}>
        <TextInput
          placeholder='Search'
          placeholderTextColor={useTheme(dark).inputColor}
          style={[globalStyles.inputField, { color: useTheme(dark).defautlText }]} />
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="search-outline" size={18} color={useTheme(dark).defautlText} />
        </TouchableOpacity>
      </View>

      {/* cards */}
      <FlatList
        data={categories}
        keyExtractor={(_, i) => i.toFixed()}
        renderItem={({ item, index }) => (
          <TopicCard data={item}
            setCheck={setCheck}
          />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: "space-between",
          paddingBottom: 15
        }}
      />

      {/* button */}
      <StickyBottomButton navigatingTo={"NewsSource"} disabled={check} />
    </SafeAreaView>
  )
}

export default NewsTopics

const styles = StyleSheet.create({})