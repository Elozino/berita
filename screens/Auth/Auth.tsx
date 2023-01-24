import { ActivityIndicator, Image, Keyboard, Pressable, StyleSheet, Switch, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { FC, useContext, useState } from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { Context } from '../../context/ContextApp'
import { useTheme } from '../../utils/theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TContext } from '../../types'
import { onGoogleButtonPress } from '../../utils/googleAuth'
import { onFacebookButtonPress } from '../../utils/facebookAuth'
import auth from "@react-native-firebase/auth";



const Auth: FC = ({ navigation }: any) => {
  const { dark, errorMsg, setErrorMsg, loginMode, setLoginMode, userAuthInput, setUserAuthInput } = useContext(Context) as TContext
  const [secureEntry, setSecureEntry] = useState(true)
  const [loading, setLoading] = useState(false)

  const handleUserInputs = (name: string, value: string) => {
    setUserAuthInput({ ...userAuthInput, [name]: value })
    setErrorMsg({ ...errorMsg, [name]: "" })
  }

  const handleAuth = () => {
    Keyboard.dismiss()
    setErrorMsg({ ...errorMsg, email: "", password: "" })
    if (loginMode === "signup") {
      setLoading(true)
      auth().createUserWithEmailAndPassword(userAuthInput.email, userAuthInput.password)
        .then((response) => {
          console.log("User account logged in!");
          console.log(response);
          navigation.replace("NewsType")
          setUserAuthInput({ ...userAuthInput, email: "", password: "" })
          setLoading(false)
          setLoginMode("signin")
          return response;
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            console.log("That email address is already in use!");
            setErrorMsg({ ...errorMsg, email: "This email address is already in use!" })
          }

          if (error.code === "auth/invalid-email") {
            console.log("That email address is invalid!");
            setErrorMsg({ ...errorMsg, email: "This email address is invalid!" })
          }
          if (error.code === "auth/weak-password") {
            console.log("That email address is invalid!");
            setErrorMsg({ ...errorMsg, password: "Weak Password! Password should be at least 6 characters!" })
          }
          setLoading(false)
          console.error(error);
        });
    } else {
      setLoading(true)
      auth().signInWithEmailAndPassword(userAuthInput.email, userAuthInput.password)
        .then((response) => {
          console.log("User account logged in!");
          console.log(response);
          navigation.replace("Home")
          setUserAuthInput({ ...userAuthInput, email: "", password: "" })
          setLoading(false)
          setLoginMode("signin")
          return response;
        })
        .catch((error) => {
          if (error.code === "auth/user-not-found") {
            ToastAndroid.showWithGravityAndOffset(
              "User not found!",
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50
            );
            setTimeout(() => {
              Keyboard.dismiss()
              setLoginMode("signup")
              setUserAuthInput({ email: "", password: "" })
            }, 3000);
            console.log("User not found! Sign up to create an account");
          }

          if (error.code === "auth/wrong-password") {
            console.log("Wrong password! Please check your password");
            setErrorMsg({ ...errorMsg, password: "Wrong password! Please check your password" })
          }
          setLoading(false)
          console.error(error);
        });
    }
  }

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

      {/* auth form wrapper */}
      <View style={styles.authForm}>
        {/* form inputs */}
        <View>
          <Text style={{ ...styles.authInputLabel, color: useTheme(dark).defautlText }}>Email</Text>
          <TextInput
            value={userAuthInput.email}
            onChangeText={(text) => handleUserInputs("email", text)}
            placeholder="Email"
            placeholderTextColor={useTheme(dark).inputColor}
            keyboardType="email-address"
            style={{ ...styles.authInputField, color: useTheme(dark).defautlText, backgroundColor: useTheme(dark).secBg, borderColor: useTheme(dark).secBg, }}
          />
          {errorMsg.email &&
            <View style={{
              ...styles.errorMsg,
              // backgroundColor: useTheme(dark).secBg 
            }}>
              <MaterialIcons name="error" size={14} />
              <Text style={{ ...styles.errorMsgText, color: useTheme(dark).appColor }}>{errorMsg.email}</Text>
            </View>
          }
        </View>
        <View>
          <Text style={{ ...styles.authInputLabel, color: useTheme(dark).defautlText }}>Password</Text>
          <View style={{ ...styles.authInputField, backgroundColor: useTheme(dark).secBg, borderColor: useTheme(dark).secBg }}>
            <TextInput
              value={userAuthInput.password}
              onChangeText={(text) => handleUserInputs("password", text)}
              placeholder="Password"
              placeholderTextColor={useTheme(dark).inputColor}
              keyboardType="default"
              secureTextEntry={secureEntry}
              style={{ flex: 1, color: useTheme(dark).defautlText }}
            />
            <Pressable onPress={() => setSecureEntry(!secureEntry)}>
              <MaterialIcons name={secureEntry ? "visibility" : "visibility-off"} size={20} color="gray" />
            </Pressable>
          </View>
          {errorMsg.password !== "" &&
            <View style={{
              ...styles.errorMsg,
              // backgroundColor: useTheme(dark).secBg
            }}>
              <MaterialIcons name="error" size={14} />
              <Text style={{ ...styles.errorMsgText, color: useTheme(dark).appColor }}>{errorMsg.password}</Text>
            </View>
          }
        </View>

        {/* remember me */}
        <View style={{
          paddingTop: 5,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 5
        }}>
          <Switch
            value={true}
            onValueChange={() => { }}
            thumbColor={useTheme(dark).defautlText}
          />
          <Text style={{ paddingLeft: 10, color: useTheme(dark).defautlText }}>Remember me</Text>
        </View>

        {/* auth button */}
        <Pressable
          style={{ ...styles.paddingStyle, ...styles.authButton, backgroundColor: useTheme(dark).appColor }}
          onPress={handleAuth}
        >
          {
            loading ? (
              <ActivityIndicator size={24} color={useTheme(dark).white} />
            ) : (
              <Text style={{ ...styles.authButtonText, color: useTheme(dark).white }}>
                {loginMode === "signup" ? "Sign Up" : "Sign In"}
              </Text>
            )
          }
        </Pressable>

        {/* forgot password */}
        {loginMode === "signin" &&
          <Pressable style={styles.paddingStyle}>
            <Text style={{ color: useTheme(dark).defautlText }}>Forgot Password?</Text>
          </Pressable>
        }
        <Text style={{ ...styles.paddingStyle, color: useTheme(dark).defautlText }}>or continue with</Text>

        {/* firebase service */}
        <View style={[styles.firebaseAuth]}>
          {/* facebook auth */}
          <TouchableOpacity
            onPress={() => onFacebookButtonPress()}
            style={{ ...styles.firebaseAuthButton, backgroundColor: useTheme(dark).secBg }}>
            <MaterialCommunityIcons name="facebook" size={20} color={"blue"} />
            <Text style={{ ...styles.firebaseAuthButtonText, color: useTheme(dark).defautlText }}>
              Facebook
            </Text>
          </TouchableOpacity>

          {/* google auth */}
          <TouchableOpacity
            onPress={() => onGoogleButtonPress()}
            style={{ ...styles.firebaseAuthButton, backgroundColor: useTheme(dark).secBg }}>
            <MaterialCommunityIcons name="google" size={20} />
            <Text style={{ ...styles.firebaseAuthButtonText, color: useTheme(dark).defautlText, }}>Google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.authText}>
          <Text style={{ color: useTheme(dark).defautlText }}>
            {loginMode === "signup" ? "Already have an account?" : "Don't have an account?"}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setUserAuthInput({ ...userAuthInput, email: "", password: "" })
              loginMode === "signup" ? setLoginMode("signin") : setLoginMode("signup")
            }}
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
    alignItems: "center",
    borderRadius: 50,
    marginTop: 2,
    padding: 5,
  },
  errorMsgText: {
    marginLeft: 5,
    fontSize: 12,
  },
  paddingStyle: {
    padding: 10,
    textAlign: "center",
    alignItems: "center",
  },
  authButton: {
    borderRadius: 50,
    marginTop: 20
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