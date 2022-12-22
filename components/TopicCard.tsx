import { ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { CheckBox } from 'react-native-btr'
import { useTheme } from '../utils/theme'
import { TContext } from '../types'
import { Context } from '../context/ContextApp'

interface IProps {
  topic: string;
  image: string
}

const TopicCard = ({ topic }) => {
  const { dark } = useContext(Context) as TContext
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <TouchableHighlight style={styles.container} onPress={() => setToggleCheckBox(!toggleCheckBox)}>
      <ImageBackground source={topic.image} resizeMode="cover" style={styles.image}>
        <View style={styles.checkbox}>
          <CheckBox
            checked={toggleCheckBox}
            color={useTheme(dark).appColor}
            disabled={false}
          />
        </View>
        <Text style={{ color: useTheme(dark).defautlText, ...styles.text }}>{topic.topic}</Text>
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
    left: 20
  }
})