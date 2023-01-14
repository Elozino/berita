import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../utils/theme'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Context } from '../../context/ContextApp'
import { TContext } from '../../types'
import FeaturedCard from '../../components/FeaturedCard'

const FeaturedNews = ({ navigation, route }: any) => {
  const data = route.params
  const { dark } = useContext(Context) as TContext
  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1, paddingHorizontal: 20 }}>
      {/* header */}
      <View style={{ ...styles.header }}>
        <View style={{ flexDirection: "row", alignItems: "center" }} >
          <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
          <Text style={{ color: useTheme(dark).defautlText, marginLeft: 10, fontSize: 20 }}>Featured News</Text>
        </View>
        {/* <TouchableHighlight
          style={{ backgroundColor: `${useTheme(dark).appColor}50`, borderRadius: 10, padding: 8, }}
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons name="dots-vertical" size={18} color={useTheme(dark).appColor} />
        </TouchableHighlight> */}
      </View>

      {/* feature card */}
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        {data.map((item: any, i: React.Key | null | undefined) => <FeaturedCard headLines={item} key={i} />)}
      </ScrollView>
    </SafeAreaView>
  )
}

export default FeaturedNews

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "500",
  },
})