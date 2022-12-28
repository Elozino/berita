import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Context } from '../context/ContextApp'
import { TContext } from '../types'
import { useTheme } from '../utils/theme'


interface IProps {
  country: {
    name: { common: string },
    flags: { png: string },
    cca2: string
  };
  index: number;
  activeIndex: null | number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
}
const CountryCard = ({ country, index, activeIndex, setActiveIndex }: IProps) => {
  const { dark, userInfo, setUserInfo } = useContext(Context) as TContext

    return (
    <TouchableOpacity
      onPress={() => {
        setActiveIndex(index)
        setUserInfo({ ...userInfo, ["country"]: country.name.common })
      }}
      style={[styles.container, { backgroundColor: activeIndex == index ? useTheme(dark).appColor : useTheme(dark).secBg }]}>
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