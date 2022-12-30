import { Image, ScrollView, Share, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../utils/theme'
import { TContext } from '../../types'
import { Context } from '../../context/ContextApp'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'


interface IProps {
  navigation: any;
  route: {
    params: {
      topic: string;
      image: undefined;
    }
  }
}
const NewsDetails = ({ route, navigation }: IProps) => {
  const { dark } = useContext(Context) as TContext
  const { topic, image } = route.params

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (

    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      {/* header */}
      <View style={styles.header}>
        <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "35%" }}>
          <TouchableHighlight
            onPress={onShare}
            style={{ backgroundColor: `${useTheme(dark).appColor}50`, borderRadius: 10, padding: 8, }}>
            <Ionicons name="share-social" size={18} color={useTheme(dark).appColor} />
          </TouchableHighlight>
          <TouchableHighlight
            // onPress={() => navigation.navigate("Notification")}
            style={{ backgroundColor: `${useTheme(dark).appColor}50`, borderRadius: 10, padding: 8, }}>
            <Ionicons name="bookmark-outline" size={18} color={useTheme(dark).appColor} />
          </TouchableHighlight>
          <TouchableHighlight
            // onPress={() => navigation.navigate("Notification")}
            style={{ backgroundColor: `${useTheme(dark).appColor}50`, borderRadius: 10, padding: 8, }}>
            <MaterialCommunityIcons name="dots-vertical" size={18} color={useTheme(dark).appColor} />
          </TouchableHighlight>
        </View>
      </View>

      <View style={{ flex: 1, marginTop: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image source={image} style={{ ...styles.image }} />
          <Text style={{ ...styles.headerText, color: useTheme(dark).defautlText }}>News Headline</Text>
          <View style={{ flexDirection: "row", alignItems: "center", }}>
            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", }}>
              <View style={{ width: 40, height: 40, borderRadius: 20, marginRight: 15, backgroundColor: "pink" }}></View>
              <View style={{ justifyContent: "space-between" }}>
                <Text style={{ color: useTheme(dark).appColor, fontWeight: "400" }}>BBC News</Text>
                <Text style={{ color: useTheme(dark).defautlText, fontSize: 10, letterSpacing: 1 }}>5 days ago</Text>
              </View>
            </View>
            <View style={{ borderWidth: 1, borderColor: useTheme(dark).appColor, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3 }}>
              <Text style={{ color: useTheme(dark).appColor, fontSize: 12 }}>{topic}</Text>
            </View>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ color: useTheme(dark).defautlText, lineHeight: 20, fontSize: 12, letterSpacing: 1 }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis error quasi molestias exercitationem odio. Nobis quidem illo sequi at, dolore explicabo dolores ipsam. Ex illum, necessitatibus odit velit consequatur fugiat iure modi amet quasi, perferendis, numquam neque? Reiciendis maiores harum eveniet est beatae eligendi, ut laboriosam assumenda, voluptatibus quam sed nulla necessitatibus unde sunt officia voluptate veritatis placeat similique recusandae? Enim praesentium quod doloremque optio, nostrum autem facere aliquam. Ipsa, ratione fugiat. Est non consequuntur dignissimos, corrupti officiis, excepturi ipsum eos quod nostrum fuga ullam cumque fugit harum nihil accusamus labore quia esse voluptate veniam enim illum sequi exercitationem saepe minus. Suscipit, dolore quasi nemo nostrum dolorem maiores sapiente quisquam reprehenderit enim voluptatibus iste ex vitae inventore! Quisquam quasi quaerat hic ipsa dolorem! Ipsam facere eos nam ad officia expedita eius repellendus delectus adipisci nesciunt animi iste eligendi vero exercitationem, culpa incidunt non possimus dolorem labore qui. Pariatur, ab culpa?
            </Text>
          </View>
        </ScrollView>
      </View>

    </SafeAreaView>
  )
}

export default NewsDetails

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: 250,
    borderRadius: 10
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 15,
  }
})