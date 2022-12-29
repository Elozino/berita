import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '../utils/theme'
import { TContext } from '../types'
import { Context } from '../context/ContextApp'
import CountryCard from '../components/CountryCard'
import { globalStyles } from '../constants/styles'
import StickyBottomButton from '../components/StickyBottomButton'
import { countryCode } from '../constants/data'


const Country = ({ navigation }: any) => {
  const { dark } = useContext(Context) as TContext
  const [countries, setCountries] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("")
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  let check = activeIndex === null

  const searchFilterFunction = (text: string) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = countries.filter(
        (item: any) => {
          const itemData = item.name.common
            ? item.name.common.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
      setFilteredResults(newData);
      setSearchInput(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredResults(countries);
      setSearchInput(text);
    }
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const sortedCountries = data.sort((a: { name: { common: string } }, b: { name: { common: string } }) => { return a.name.common.localeCompare(b.name.common) })
        let filterApiCountries = sortedCountries.filter((item: { cca2: string }) =>
          countryCode.includes(item.cca2.toLowerCase())
        );
        setCountries(filterApiCountries)
        setFilteredResults(filterApiCountries)
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
          value={searchInput}
          onChangeText={(text) => searchFilterFunction(text)}
          placeholder='Search'
          placeholderTextColor={useTheme(dark).inputColor}
          style={[globalStyles.inputField, { color: useTheme(dark).defautlText }]} />
        <TouchableOpacity
          onPress={() => searchFilterFunction(searchInput)}
          style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="search-outline" size={18} color={useTheme(dark).defautlText} />
        </TouchableOpacity>
      </View>

      {/* list of countries */}
      {countries.length < 1 ?
        (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" color={useTheme(dark).appColor} />
          </View>
        ) : filteredResults.length < 1 ? (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
            <View style={{ width: 100, height: 100, backgroundColor: useTheme(dark).appColor, borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
              <FontAwesome5 name="frown" size={40} color={useTheme(dark).white} />
            </View>
            <Text style={{ color: useTheme(dark).appColor, fontSize: 20, fontWeight: "400", marginTop: 20 }}>Oops! Country not found</Text>
          </View>

        ) :
          (<FlatList
            data={filteredResults}
            keyExtractor={(_, i) => i.toFixed()}
            renderItem={
              ({ item, index }) => (
                <CountryCard country={item} index={index} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
              )}
          />)
      }

      {/* button */}
      <StickyBottomButton navigatingTo={"NewsTopics"} disabled={check} />
    </SafeAreaView >
  )
}


export default Country

const styles = StyleSheet.create({})

