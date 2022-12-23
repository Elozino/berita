import { Image, Pressable, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { FC, useContext } from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { Context } from '../../context/ContextApp'
import { useTheme } from '../../utils/theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { TContext } from '../../types'
import { globalStyles } from '../../constants/styles'




const Auth: FC = () => {
  const { dark, errorMsg, loginMode, setLoginMode } = useContext(Context) as TContext
  const navigation = useNavigation()


  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: useTheme(dark).bg }}>
      <StatusBar style={dark ? 'light' : "dark"} />
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../assets/images/logo1.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={{ ...styles.authHeader, color: useTheme(dark).defautlText }}>
          {loginMode === "signup" ? "Create an Account" : "Let's Sign you in"}
        </Text>

      </View>
      <View style={styles.authForm}>
        <View>
          <Text style={{ ...styles.authInputLabel, color: useTheme(dark).defautlText }}>Email</Text>
          <TextInput
            value=''
            onChangeText={() => { }}
            placeholder="Email"
            placeholderTextColor={useTheme(dark).inputColor}
            keyboardType="email-address"
            style={{ ...styles.authInputField, backgroundColor: useTheme(dark).secBg, borderColor: useTheme(dark).secBg, }}
          />
          {errorMsg &&
            <View style={{ ...styles.errorMsg, backgroundColor: useTheme(dark).secBg }}>
              <MaterialIcons name="error" size={20} />
              <Text style={{ ...styles.errorMsgText, color: useTheme(dark).appColor }}>Invalid Email</Text>
            </View>
          }
        </View>
        <View>
          <Text style={{ ...styles.authInputLabel, color: useTheme(dark).defautlText }}>Password</Text>
          <View style={{ ...styles.authInputField, backgroundColor: useTheme(dark).secBg, borderColor: useTheme(dark).secBg }}>
            <TextInput
              value=''
              onChangeText={() => { }}
              placeholder="Password"
              placeholderTextColor={useTheme(dark).inputColor}
              keyboardType="default"
              secureTextEntry
              style={{ flex: 1}}
            />
            <MaterialIcons name="visibility" size={20} color="gray" />
          </View>
        </View>
        <View style={{ paddingTop: 5, flexDirection: "row", alignItems: "center" }}>
          <Switch
            value={true}
            onValueChange={() => { }}
            thumbColor={useTheme(dark).defautlText}
          />
          <Text style={{ paddingLeft: 10, color: useTheme(dark).defautlText }}>Remember me</Text>
        </View>
        <TouchableOpacity
          style={{ ...styles.paddingStyle, ...styles.authButton, backgroundColor: useTheme(dark).appColor }}
          onPress={() => navigation.navigate("NewsType")}
        >
          <Text style={{ ...styles.authButtonText, color: useTheme(dark).white }}>
            {loginMode === "signup" ? "Sign Up" : "Sign In"}
          </Text>
        </TouchableOpacity>
        {loginMode === "signin" &&
          <Pressable style={styles.paddingStyle}>
            <Text style={{ color: useTheme(dark).defautlText }}>Forgot Password?</Text>
          </Pressable>
        }
        <Text style={{ ...styles.paddingStyle, color: useTheme(dark).defautlText }}>or continue with</Text>
        <View style={[styles.firebaseAuth]}>
          <TouchableOpacity style={{ ...styles.firebaseAuthButton, backgroundColor: useTheme(dark).secBg }}>
            <MaterialCommunityIcons name="facebook" size={20} color={"blue"} />
            <Text style={{ ...styles.firebaseAuthButtonText, color: useTheme(dark).defautlText }}>
              Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.firebaseAuthButton, backgroundColor: useTheme(dark).secBg }}>
            <MaterialCommunityIcons name="google" size={20} />
            <Text style={{ ...styles.firebaseAuthButtonText, color: useTheme(dark).defautlText, }}>Google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.authText}>
          <Text style={{ color: useTheme(dark).defautlText }}>
            {loginMode === "signup" ? "Already have an account?" : "Don't have an account?"}
          </Text>
          <TouchableOpacity
            onPress={() => { loginMode === "signup" ? setLoginMode("signin") : setLoginMode("signup") }}
          >
            <Text style={{ color: useTheme(dark).appColor }}> {loginMode === "signup" ? "Sign in" : "Sign up"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView >
  )
}

export default Auth

const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight,
    padding: 20,
    flex: 1,
  },
  imageWrapper: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200
  },
  authHeader: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "500"
  },
  authForm: {
    marginTop: 20
  },
  authInputLabel: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 5
  },
  authInputField: {
    borderRadius: 50,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: 2,
  },
  errorMsg: {
    flexDirection: "row",
    borderRadius: 50,
    marginTop: 1,
    padding: 5,
  },
  errorMsgText: {
    marginLeft: 5,
  },
  paddingStyle: {
    padding: 10,
    textAlign: "center",
    alignItems: "center",
  },
  authButton: {
    borderRadius: 50,
  },
  authButtonText: {
    fontSize: 18,
    color: "#fff",
  },
  firebaseAuth: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  firebaseAuthButton: {
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 10,
    padding: 10,
    width: "48%",
    flexDirection: "row",
    justifyContent: "center"
  },
  firebaseAuthButtonText: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 7,
  },
  authText: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  }
})