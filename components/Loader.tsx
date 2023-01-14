import { ActivityIndicator, Pressable, Text } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/ContextApp';
import { TContext } from '../types';
import { useTheme } from '../utils/theme';

const Loader = () => {
  const { dark, news, } = useContext(Context) as TContext
  if (news.length < 1) {
    setTimeout(() => {
      return (
        <>
          <ActivityIndicator size="large" color={useTheme(dark).appColor} />
          <Pressable>
            <Text style={{ color: useTheme(dark).appColor, fontSize: 18, fontWeight: "bold" }}>Try again</Text>
          </Pressable>
        </>
      )
    }, 10000);
  }

  return (
    <>
      <ActivityIndicator size="large" color={useTheme(dark).appColor} />
    </>
  )
}

export default Loader