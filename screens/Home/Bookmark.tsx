import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TContext } from '../../types'
import { Context } from '../../context/ContextApp'
import { useTheme } from '../../utils/theme'
import { GoogleSigninButton } from '@react-native-google-signin/google-signin'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { globalStyles } from '../../constants/styles'


const Bookmark = ({ navigation }: any) => {
  const { dark } = useContext(Context) as TContext
  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1, paddingHorizontal: 20 }}>
      {/* header */}
      <View style={{ ...styles.header }}>
        <View style={{ flexDirection: "row", alignItems: "center" }} >
          <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
          <Text style={{ color: useTheme(dark).defautlText, marginLeft: 10, fontSize: 20 }}>My Bookmark</Text>
        </View>
        {/* <TouchableHighlight
          style={{ backgroundColor: `${useTheme(dark).appColor}50`, borderRadius: 10, padding: 8, }}
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons name="dots-vertical" size={18} color={useTheme(dark).appColor} />
        </TouchableHighlight> */}
      </View>

      {/* search */}
      <View style={{ ...styles.search }}>
        <View style={[globalStyles.searchWrapper, { backgroundColor: useTheme(dark).secBg, flex: 1 }]}>
          <TextInput
            keyboardType='default'
            placeholder='Search'
            placeholderTextColor={useTheme(dark).inputColor}
            style={[globalStyles.inputField, { color: useTheme(dark).defautlText }]} />
          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="search-outline" size={18} color={useTheme(dark).defautlText} />
          </TouchableOpacity>
        </View>
        <TouchableHighlight style={{ backgroundColor: `${useTheme(dark).appColor}50`, borderRadius: 10, padding: 8, marginLeft: 10, }}>
          <Ionicons name="filter" size={18} color={useTheme(dark).appColor} />
        </TouchableHighlight>
      </View>

      {/* no notification */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
        <View style={{ width: 100, height: 100, backgroundColor: useTheme(dark).appColor, borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
          <Ionicons name="bookmark" size={40} color={useTheme(dark).white} />
        </View>
        <Text style={{ color: useTheme(dark).appColor, fontSize: 20, fontWeight: "400", marginTop: 20 }}>You have no bookmarked news</Text>
      </View>
      <TouchableHighlight style={{ backgroundColor: useTheme(dark).appColor, marginBottom: 20, ...globalStyles.button }}>
        <Text style={{ color: useTheme(dark).white, letterSpacing: 1, }}>Explore News</Text>
      </TouchableHighlight>
    </SafeAreaView>
  )
}

export default Bookmark

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "500",
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
  },
})