import { Alert, Image, Modal, Pressable, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { TContext } from '../../types'
import { Context } from '../../context/ContextApp'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../utils/theme'
import { globalStyles } from '../../constants/styles'


const Profile = ({ navigation }: any) => {
  const { dark, userInfo, setUserInfo } = useContext(Context) as TContext
  const [modalVisible, setModalVisible] = useState(false);
  const [check, setCheck] = useState(true)

  const handleUserInputs = (name: string, value: string) => {
    setUserInfo({ ...userInfo, [name]: value })
  }

  const submitInfo = () => {
    setModalVisible(true)
  }


  useEffect(() => {
    if (userInfo.username === "" || userInfo.fullname === "" || userInfo.website === "" || userInfo.telephone === "") {
      setCheck(true)
    } else {
      setCheck(false)
    }
  }, [userInfo])


  console.log(userInfo)
  return (
    <SafeAreaView style={{ backgroundColor: useTheme(dark).bg, flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10, paddingHorizontal: 20 }} >
        <MaterialCommunityIcons name="arrow-left" size={24} color={useTheme(dark).appColor} onPress={() => navigation.goBack()} />
        <Text style={{ color: useTheme(dark).defautlText, marginLeft: 10, fontSize: 20 }}>Fill Your Profile</Text>
      </View>

      {/* profile avatar */}
      <View style={styles.avatarWrapper}>
        <View style={[{ backgroundColor: useTheme(dark).defautlText }, styles.avatarBox]}>
          <TouchableHighlight style={{ backgroundColor: useTheme(dark).appColor, position: "absolute", bottom: -5, right: 10, borderRadius: 50, padding: 4 }}>
            <MaterialIcons name="edit" size={24} color={useTheme(dark).white} />
          </TouchableHighlight>
        </View>
      </View>

      {/* profile form */}
      <View style={{ padding: 20, flex: 1 }}>
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
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons name="web" size={18} color={useTheme(dark).inputColor} />
            </TouchableOpacity>
          </View>
        </View>
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
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons name="phone" size={18} color={useTheme(dark).inputColor} />
            </TouchableOpacity>
          </View>
        </View>
      </View>


      {/* modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={[styles.centeredView, { backgroundColor: useTheme(dark).layerBg }]}>
          <View style={[styles.modalView, { backgroundColor: useTheme(dark).modalBg, shadowColor: useTheme(dark).defautlText }]}>
            <View style={{ alignItems: "center", justifyContent: "center", padding: 10 }}>
              <Image source={require("../../assets/images/logo1.png")} style={{ width: 150, height: 150, resizeMode: "contain", }} />
            </View>
            <Text style={[styles.modalText, { color: useTheme(dark).defautlText }]}>Great!</Text>
            <Text style={[styles.modalText, { color: useTheme(dark).defautlText }]}>Your account has been created successfully</Text>
            <Pressable
              style={{ backgroundColor: useTheme(dark).appColor, ...globalStyles.button, }}
              onPress={() => {
                setModalVisible(!modalVisible)
                navigation.navigate("Home")
              }}
            >
              <Text style={{ color: useTheme(dark).white }}>Go Home</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* button */}
      <View style={[styles.bottomWrapper, { shadowColor: useTheme(dark).defautlText, }]}>
        <Pressable
          disabled={check}
          onPress={submitInfo}
          style={{ backgroundColor: check ? `${useTheme(dark).appColor}50` : useTheme(dark).appColor, ...globalStyles.button }}>
          <Text style={{ color: useTheme(dark).white }}>Continue</Text>
        </Pressable>
      </View>
    </SafeAreaView >
  )
}

export default Profile

const styles = StyleSheet.create({
  avatarWrapper: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  avatarBox: {
    width: 150,
    height: 150,
    borderRadius: 100,
    position: "relative",
  },
  input: {
    flex: 1
  },
  bottomWrapper: {
    justifyContent: "center",
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    elevation: 1,
    padding: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    borderRadius: 20,
    padding: 20,
    width: "80%",
    height: "50%",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  }
})