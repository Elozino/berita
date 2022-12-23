import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { CheckBox } from 'react-native-btr'
import { useTheme } from '../utils/theme'
import { Context } from '../context/ContextApp'
import { TContext } from '../types'


interface IProps {
  source: {
    name: string,
  }
}
const NewsSourceCard = ({ source }: IProps) => {
  const { dark } = useContext(Context) as TContext
  const [toggleCheckBox, setToggleCheckBox] = useState(false)


  return (
    <TouchableHighlight style={{ width: "48%" }}
      onPress={() => setToggleCheckBox(!toggleCheckBox)}
    >
      <View style={{ backgroundColor: useTheme(dark).inputColor, ...styles.container }}>
        <View style={styles.checkbox}>
          <CheckBox
            checked={toggleCheckBox}
            color={useTheme(dark).appColor}
            disabled={false}
          />
        </View>
        {/* <Image source={""} resizeMode="cover" style={styles.image} /> */}
        <Text style={{ color: useTheme(dark).defautlText }}>{source.name}</Text>
      </View>
    </TouchableHighlight>
  )
}

export default NewsSourceCard

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    borderRadius: 10,
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