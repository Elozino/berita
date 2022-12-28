import { StyleSheet, Text, Pressable, View } from 'react-native'
import React, { useContext } from 'react'
import { useTheme } from '../utils/theme'
import { TContext } from '../types'
import { Context } from '../context/ContextApp'
import { globalStyles } from '../constants/styles'
import { useNavigation } from '@react-navigation/native'


interface IProps {
  navigatingTo: any;
  text?: string;
  disabled?: boolean;
}

const StickyBottomButton: React.FC<IProps> = ({ navigatingTo, text, disabled }) => {
  const { dark } = useContext(Context) as TContext
  const navigation = useNavigation()
  return (
    <View style={[styles.bottomWrapper, { shadowColor: useTheme(dark).defautlText, }]}>
      <Pressable
        disabled={disabled}
        onPress={() => { navigation.navigate(navigatingTo) }}
        style={{ backgroundColor: disabled ? `${useTheme(dark).appColor}50` : useTheme(dark).appColor, ...globalStyles.button }}>
        <Text style={{ color: useTheme(dark).white }}>{text ? "Continue" : "Next"}</Text>
      </Pressable>
    </View>
  )
}

export default StickyBottomButton

const styles = StyleSheet.create({
  bottomWrapper: {
    justifyContent: "center",
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    elevation: 1,
    padding: 20,
  }
})