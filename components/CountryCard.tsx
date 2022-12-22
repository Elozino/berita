import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/ContextApp'
import { TContext } from '../types'
import { useTheme } from '../utils/theme'

const CountryCard = ({ country }) => {
  const { dark } = useContext(Context) as TContext
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: useTheme(dark).secBg }]}>
      <View style={styles.countryInfo}>
        <Image source={{ uri: country.flags.png }} style={styles.countryIcon} />
        <Text style={{ color: useTheme(dark).inputColor, marginHorizontal: 15, }}>{country.cca2}</Text>
        <Text style={{ color: useTheme(dark).defautlText }}>{country.name.common}</Text>
      </View>
      <View>

      </View>
    </TouchableOpacity>
  )
}

export default CountryCard

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 20,
    borderRadius: 7,

  },
  countryInfo: {
    flexDirection: "row",
    alignItems: "center"
  },
  countryIcon: {
    width: 25,
    height: 25,
    borderRadius: 5,
  },
  countryName: {},
})