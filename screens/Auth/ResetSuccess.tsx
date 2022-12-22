import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Context } from '../../context/ContextApp'
import { useTheme } from '../../utils/theme'
import { TContext } from '../../types'

const ResetSuccess = () => {
  const { dark } = useContext(Context) as TContext

  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          source={require("../../assets/images/logo1.png")}
          style={styles.image}
        />
        <Text>Congratulations!</Text>
        <Text style={{ color: useTheme(dark).defautlText }}>Your account is ready to use</Text>
      </View>
      <TouchableOpacity style={{ backgroundColor: useTheme(dark).appColor, alignItems: "center", padding: 20 }}>
        <Text style={{ color: useTheme(dark).defautlText }}>Go to Homepage</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ResetSuccess

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    flex: 1
  },
})