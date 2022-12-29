import { ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { CheckBox } from 'react-native-btr'
import { useTheme } from '../utils/theme'
import { TContext } from '../types'
import { Context } from '../context/ContextApp'

interface IProps {
  data: {
    category: string;
    image: any;
  };
  setCheck: React.Dispatch<React.SetStateAction<boolean>>
}

const TopicCard = ({ data, setCheck }: IProps) => {
  const { dark, setUserInfo, userInfo, } = useContext(Context) as TContext
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const handleSelectedCategories = () => {
    setToggleCheckBox(!toggleCheckBox)
    if (!toggleCheckBox) {
      userInfo.category.push(data.category)
    } else {
      const filtered = userInfo.category.filter((item: string) => item !== data.category)
      setUserInfo({ ...userInfo, category: filtered })
    }
  }

  useEffect(() => {
    if (userInfo.category.length === 0) {
      setCheck(true)
    } else {
      setCheck(false)
    }
  })

  return (
    <TouchableHighlight
      onPress={handleSelectedCategories}
      style={styles.container}
    >
      <ImageBackground source={data.image} resizeMode="cover" style={styles.image}>
        <View style={styles.checkbox}>
          <CheckBox
            checked={toggleCheckBox}
            color={useTheme(dark).appColor}
            disabled={false}
          />
        </View>
        <Text style={{ color: useTheme(dark).defautlText, ...styles.text }}>{data.category}</Text>
      </ImageBackground>
    </TouchableHighlight>
  )
}

export default TopicCard

const styles = StyleSheet.create({
  container: {
    width: "48%",
    height: 150,
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  image: {
    position: "relative",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  checkbox: {
    position: "absolute",
    right: 15,
    top: 10,
    alignItems: "center",
    justifyContent: "center",

  },
  text: {
    position: "absolute",
    bottom: 15,
    left: 20,
    fontWeight: "bold",
  }
})