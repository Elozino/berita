import { Image, Linking, Pressable, ScrollView, Share, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
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
      title: string;
      urlToImage: string;
      source: {
        name: string;
      };
      content: string;
      publishedAt: string;
      author: string;
      url: string;
    }
  }
}
const NewsDetails = ({ route, navigation }: IProps) => {
  const { dark, category } = useContext(Context) as TContext
  const { title, urlToImage, source, content, publishedAt, author, url } = route.params

  const datePublished: any = new Date(publishedAt)
  const currentDate: any = new Date()

  const date = (currentDate - datePublished) / (1000 * 3600 * 24)


  const formatDate = (value: number) => {
    let formattedDate: any
    if (date < 1) {
      formattedDate = value * 24
    } else {
      formattedDate = date
    }
  }

  // / (1000 * 3600 * 24)

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
          <Image source={{ uri: urlToImage }} style={{ ...styles.image }} />
          <Text style={{ ...styles.headerText, color: useTheme(dark).defautlText }}>
            {title}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", }}>
            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", }}>
              <View style={{ width: 40, height: 40, borderRadius: 20, marginRight: 15, backgroundColor: "pink" }}></View>
              <View style={{ justifyContent: "space-between" }}>
                <Text style={{ color: useTheme(dark).appColor, fontWeight: "400" }}>
                  {source.name}
                </Text>
                <Text style={{ color: useTheme(dark).defautlText, fontSize: 10, letterSpacing: 1 }}>
                  {date < 1 ? `${Math.round(date * 24)} hours ago` : `${date} days ago`}
                </Text>
              </View>
            </View>
            <View style={{ borderWidth: 1, borderColor: useTheme(dark).appColor, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3 }}>
              <Text style={{ color: useTheme(dark).appColor, fontSize: 12 }}>{category.charAt(0).toUpperCase() + category.slice(1)}</Text>
            </View>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ color: useTheme(dark).defautlText, lineHeight: 20, fontSize: 12, letterSpacing: 1 }}>
              {content}
            </Text>
          </View>
          <View>
            <Text style={{ color: useTheme(dark).defautlText, fontWeight: "bold", letterSpacing: 1 }}>
              Author : {author?.split(",")[0]}
            </Text>
            <Pressable
              style={{
                backgroundColor: useTheme(dark).appColor,
                width: 80,
                justifyContent: "center",
                alignContent: "center",
                paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20,
                marginTop: 10
              }}
              onPress={() => Linking.openURL(url)}>
              <Text style={{ color: useTheme(dark).white, fontWeight: "bold", fontSize: 12, textAlign: "center" }}>Read More</Text>
            </Pressable>
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