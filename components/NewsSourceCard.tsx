import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { CheckBox } from 'react-native-btr'
import { useTheme } from '../utils/theme'
import { Context } from '../context/ContextApp'
import { TContext } from '../types'


interface IProps {
  source: {
    name: string,
  };
  setCheck: React.Dispatch<React.SetStateAction<boolean>>
}
const NewsSourceCard = ({ source, setCheck }: IProps) => {
  const { dark, newSourceList, setNewSourceList } = useContext(Context) as TContext
  const [toggleCheckBox, setToggleCheckBox] = useState(true)

  const selectedNewsSource = () => {
    if (toggleCheckBox) {
      newSourceList.push(source.name)
    } else {
      const filtered = newSourceList.filter((item: string) => item !== source.name)
      setNewSourceList(filtered)
    }
  }


  useEffect(() => {
    if (newSourceList.length === 0) {
      setCheck(true)
    } else {
      setCheck(false)
    }
  })


  return (
    <TouchableOpacity style={{ width: "48%", borderRadius: 10, backgroundColor: useTheme(dark).inputColor, }}
      activeOpacity={0.8}
      onPress={() => {
        setToggleCheckBox(!toggleCheckBox)
        selectedNewsSource()
      }}
    >
      <View style={{ ...styles.container }}>
        <View style={styles.checkbox}>
          <CheckBox
            checked={!toggleCheckBox}
            color={useTheme(dark).appColor}
            disabled={false}
            onPress={() => {
              setToggleCheckBox(!toggleCheckBox)
              selectedNewsSource()
            }}
          />
        </View>
        {/* <Image source={""} resizeMode="cover" style={styles.image} /> */}
        <Text style={{ color: useTheme(dark).defautlText }}>{source.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NewsSourceCard

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 150,

    // backgroundColor: "#cecbcd",
    position: "relative",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 50,
  },
  checkbox: {
    position: "absolute",
    right: 15,
    top: 10,
    alignItems: "center",
    justifyContent: "center",

  },
})