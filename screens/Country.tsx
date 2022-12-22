import { FlatList, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '../utils/theme'
import { TContext } from '../types'
import { Context } from '../context/ContextApp'
import { useNavigation } from '@react-navigation/native'
import CountryCard from '../components/CountryCard'
import { globalStyles } from '../constants/styles'
import StickyBottomButton from '../components/StickyBottomButton'

const Country = ({ navigation }: any) => {
  const { dark } = useContext(Context) as TContext
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const sortedCountries = data.sort((a: { name: { common: string } }, b: { name: { common: string } }) => { return a.name.common.localeCompare(b.name.common) })
        setCountries(sortedCountries)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10, paddingHorizontal: 20 }} >
        <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
        <Text style={{ color: useTheme(dark).defautlText, marginLeft: 10, fontSize: 20 }}>Choose Your Country</Text>
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
        data={countries}
        keyExtractor={(_, i) => i.toFixed()}
        renderItem={({ item }) => (
          <CountryCard country={item} />
        )}
      />

      {/* button */}
      <StickyBottomButton navigatingTo={"NewsTopics"} />
    </SafeAreaView >
  )
}


export default Country

const styles = StyleSheet.create({})

