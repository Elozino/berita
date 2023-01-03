import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React, { useContext } from 'react'
import { TContext } from '../../types'
import { Context } from '../../context/ContextApp'
import * as ImagePicker from 'expo-image-picker';
import { useTheme } from '../../utils/theme';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../../constants/styles';

const EditUserProfile = ({ navigation }: any) => {
  const { dark, userInfo, setUserInfo } = useContext(Context) as TContext


  const handleUserInputs = (name: string, value: string) => {
    setUserInfo({ ...userInfo, [name]: value })
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setUserInfo({ ...userInfo, profilePicture: result.assets[0].uri });
    }
  }

  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      {/* header */}
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 20 }} >
        <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
        <Text style={{ color: useTheme(dark).defautlText, marginLeft: 10, fontSize: 20 }}>Edit Your Profile</Text>
      </View>


      {/* profile avatar */}
      <View style={styles.avatarWrapper}>
        <View style={[{ backgroundColor: useTheme(dark).defautlText }, styles.avatarBox]}>
          {userInfo.profilePicture && <Image source={{ uri: userInfo.profilePicture }} style={{ width: "100%", height: "100%", borderRadius: 100 }} resizeMode="cover" />}
          <TouchableHighlight
            onPress={pickImage}
            style={{ backgroundColor: useTheme(dark).appColor, position: "absolute", bottom: -5, right: 10, borderRadius: 50, padding: 4 }}>
            <MaterialIcons name="edit" size={24} color={useTheme(dark).white} />
          </TouchableHighlight>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* profile form */}
        <View style={{ paddingVertical: 20, flex: 1 }}>
          {/* fullname */}
          <View style={{ marginBottom: 10 }}>
            <Text style={{ color: useTheme(dark).defautlText }}>Full Name</Text>
            <View style={[globalStyles.inputWrapper, { backgroundColor: useTheme(dark).secBg }]}>
              <TextInput
                value={userInfo.fullname}
                onChangeText={(text) => handleUserInputs("fullname", text)}
                keyboardType="default"
                placeholder='Full Name'
                placeholderTextColor={useTheme(dark).inputColor}
                style={[globalStyles.input, { color: useTheme(dark).defautlText }]}
              />
            </View>
          </View>
          {/* username */}
          <View style={{ marginBottom: 10 }}>
            <Text style={{ color: useTheme(dark).defautlText }}>Username</Text>
            <View style={[globalStyles.inputWrapper, { backgroundColor: useTheme(dark).secBg }]}>
              <TextInput
                value={userInfo.username}
                onChangeText={(text) => handleUserInputs("username", text)}
                keyboardType="default"
                placeholder='Username'
                placeholderTextColor={useTheme(dark).inputColor}
                style={[globalStyles.input, { color: useTheme(dark).defautlText }]}
              />
            </View>
          </View>
          {/* website */}
          <View style={{ marginBottom: 10 }}>
            <Text style={{ color: useTheme(dark).defautlText }}>Website</Text>
            <View style={[globalStyles.inputWrapper, { backgroundColor: useTheme(dark).secBg }]}>
              <TextInput
                value={userInfo.website}
                onChangeText={(text) => handleUserInputs("website", text)}
                placeholder='Website Domain'
                keyboardType="default"
                placeholderTextColor={useTheme(dark).inputColor}
                style={[globalStyles.inputField, globalStyles.input, { color: useTheme(dark).defautlText }]} />
              <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons name="web" size={18} color={useTheme(dark).inputColor} />
              </Pressable>
            </View>
          </View>
          {/* telephone */}
          <View>
            <Text style={{ color: useTheme(dark).defautlText }}>Phone Number</Text>
            <View style={[globalStyles.inputWrapper, { backgroundColor: useTheme(dark).secBg }]}>
              <TextInput
                value={userInfo.telephone}
                onChangeText={(text) => handleUserInputs("telephone", text)}
                keyboardType="phone-pad"
                placeholder='Phone Number'
                placeholderTextColor={useTheme(dark).inputColor}
                style={[globalStyles.inputField, globalStyles.input, { color: useTheme(dark).defautlText }]} />
              <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons name="phone" size={18} color={useTheme(dark).inputColor} />
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


export default EditUserProfile

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "500",
  },
  avatarWrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  avatarBox: {
    width: 150,
    height: 150,
    borderRadius: 100,
    position: "relative",
  }
})