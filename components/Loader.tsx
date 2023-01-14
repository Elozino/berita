import { ActivityIndicator, Pressable, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Context } from '../context/ContextApp';
import { TContext } from '../types';
import { useTheme } from '../utils/theme';
import { FontAwesome5 } from '@expo/vector-icons';

const Loader = () => {
  const { dark } = useContext(Context) as TContext
  const [networkError, setNetworkError] = useState(false)

  setTimeout(() => {
    setNetworkError(true)
  }, 3000);

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
          <FontAwesome5 name="frown" color={useTheme(dark).appColor} size={40}/>
          <Text style={{ color: useTheme(dark).white, fontSize: 18, fontWeight: "bold" }}>Oops!!</Text>
        </View>
        <Pressable style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: useTheme(dark).appColor,
          paddingHorizontal: 20,
          paddingVertical: 5,
          borderRadius: 50
        }}>
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