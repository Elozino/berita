import { ActivityIndicator, Pressable, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Context } from '../context/ContextApp';
import { TContext } from '../types';
import { useTheme } from '../utils/theme';
import { FontAwesome5 } from '@expo/vector-icons';


interface IProps {
  handleTryAgain: () => void;
}

const Loader = ({ handleTryAgain }: IProps) => {
  const { dark } = useContext(Context) as TContext
  const [networkError, setNetworkError] = useState(false)

  setTimeout(() => {
    setNetworkError(true)
  }, 30000);

  if (networkError) {
    return (
      <>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: useTheme(dark).appColor,
            width: 80, height: 80, borderRadius: 50,
            marginBottom: 20
          }}>
          <FontAwesome5 name="frown" color={useTheme(dark).white} size={26} />
        </View>
        <Pressable style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: useTheme(dark).appColor,
          paddingHorizontal: 20,
          paddingVertical: 5,
          borderRadius: 50
        }}
          onPress={() => {
            setNetworkError(false)
            handleTryAgain
          }}
        >
          <Text style={{ color: useTheme(dark).white, fontSize: 12, fontWeight: "bold" }}>Try again</Text>
        </Pressable>
      </>
    )
  } else {
    return (
      <ActivityIndicator size="large" color={useTheme(dark).appColor} />
    )
  }
}

export default Loader