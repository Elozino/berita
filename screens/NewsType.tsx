import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { FC, useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../utils/theme';
import { Context } from '../context/ContextApp';
import { useNavigation } from '@react-navigation/native';
import { TContext } from '../types';

const NewsType: FC = ({ navigation }: any) => {
  const { dark } = useContext(Context) as TContext
  const [activeBtn, setActiveBtn] = useState<boolean>(false)
  const [activeIndex, setActiveIndex] = useState<null | number>(null)
 

  const selectedBtn = (index: number) => {
    if (index === 0) {
      setActiveIndex(0)
      setActiveBtn(true)
    } else if (index === 1) {
      setActiveIndex(1)
      setActiveBtn(true)
    }
  }

  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1, paddingHorizontal: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10, }} >
        <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
        <Text style={{ color: useTheme(dark).defautlText, marginLeft: 10, fontSize: 20 }}>Do You?</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View>
          <Text style={{ color: useTheme(dark).defautlText, fontSize: 14, lineHeight: 20 }}>Choose the role that best describe you now, whether you are a news agency or personal</Text>
          <TouchableOpacity
            onPress={() => selectedBtn(0)}
            style={{ flexDirection: "row", borderWidth: 1, borderColor: useTheme(dark).appColor, borderRadius: 10, marginTop: 20, alignItems: "center", padding: 20, backgroundColor: activeBtn && activeIndex == 0 ? useTheme(dark).appColor : "transparent" }}>
            <View style={{ backgroundColor: activeBtn && activeIndex == 0 ? useTheme(dark).white : useTheme(dark).appColor, padding: 20, borderRadius: 50, }}>
              <Ionicons name="md-newspaper-outline" size={24} color={activeBtn && activeIndex == 0 ? useTheme(dark).appColor : useTheme(dark).white} />
            </View>
            <View style={{ flex: 1, marginLeft: 20 }}>
              <Text style={{ color: useTheme(dark).defautlText, fontSize: 20 }}>News Agency</Text>
              <Text style={{ color: useTheme(dark).defautlText, ...styles.newsTypeText }}>You will need further verification if you are a news agency company.</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "row", borderWidth: 1, borderColor: useTheme(dark).appColor, borderRadius: 10, marginTop: 20, alignItems: "center", padding: 20, backgroundColor: activeBtn && activeIndex == 1 ? useTheme(dark).appColor : "transparent" }}
            onPress={() => selectedBtn(1)}
          >
            <View style={{ backgroundColor: activeBtn && activeIndex == 1 ? useTheme(dark).white : useTheme(dark).appColor, padding: 20, borderRadius: 50, }}>
              <Ionicons name="ios-person-sharp" size={24} color={activeBtn && activeIndex == 1 ? useTheme(dark).appColor : useTheme(dark).white} />
            </View>
            <View style={{ flex: 1, marginLeft: 20, }}>
              <Text style={{ color: useTheme(dark).defautlText, fontSize: 20 }}>Personal</Text>
              <Text style={{ color: useTheme(dark).defautlText, ...styles.newsTypeText }}>Suitable for those of you who use this application to read news (you ca still make your own news).</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Country")}
          style={{ backgroundColor: useTheme(dark).appColor, padding: 15, borderRadius: 50, alignItems: "center", marginBottom: 40 }}>
          <Text style={{ color: useTheme(dark).white }}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  )
}

export default NewsType

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newsTypeText: {
    fontSize: 14,
    marginTop: 10, lineHeight: 20
  }
}
)
