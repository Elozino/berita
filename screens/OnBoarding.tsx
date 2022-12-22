import { ImageBackground, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect, useContext, FC } from 'react'
import { onboardingData } from '../constants/data';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../utils/theme';
import { Context } from '../context/ContextApp';

const OnBoarding: FC = () => {
  const { dark } = useContext(Context)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const navigation = useNavigation()

  const nextHandler = () => {
    let index = currentIndex
    switch (index) {
      case 0:
        setCurrentIndex(currentIndex + 1)
        break;
      case 1:
        setCurrentIndex(currentIndex + 1)
        break;
      case 2:
        setCurrentIndex(0)
        navigation.navigate("Auth")
        break;
      default:
        setCurrentIndex(0)
        break;
    }
  }

  useEffect(() => {
    useTheme(dark)
  }, [dark])



  return (
    <View style={styles.container}>
      {onboardingData.map((item, index) => {
        if (currentIndex == index) {
          return <View key={index} style={styles.content}>
            <ImageBackground
              source={item.image}
              style={styles.image}
            />
            <View style={{ position: "absolute", bottom: 20, width: "100%", padding: 20 }}>
              <View>
                <Text style={styles.contentText}>{item.title1}</Text>
                <Text style={styles.contentText}>{item.title2}</Text>
              </View>
              <View style={{ height: 40, marginVertical: 30, alignItems: "center" }}>
                <View>
                  <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate("Auth", {})}>
                    <Text style={{ fontSize: 16, color: "#fff" }}>Skip</Text>
                  </TouchableOpacity>
                  <View style={styles.dotsContainer}>
                    <View
                      style={{
                        ...styles.dots,
                        backgroundColor: currentIndex == 0 ? useTheme(dark).appColor : "#fff"
                      }}
                    />
                    <View
                      style={{
                        ...styles.dots,
                        backgroundColor: currentIndex == 1 ? useTheme(dark).appColor : "#fff"
                      }}
                    />
                    <View
                      style={{
                        ...styles.dots,
                        backgroundColor: currentIndex == 2 ? useTheme(dark).appColor : "#fff"
                      }}
                    />
                  </View>
                </View>
              </View>
              <TouchableOpacity style={{ ...styles.button, backgroundColor: useTheme(dark).appColor }} onPress={nextHandler}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      })}
    </View>
  )
}

export default OnBoarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    flex: 1
  },
  contentText: {
    textAlign: "left",
    fontSize: 30,
    color: "#fff",
  },
  dotsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  dots: {
    width: 7,
    height: 7,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginHorizontal: 5,
  },
  button: {
    borderRadius: 50,
    backgroundColor: "red",
    alignItems: "center",
  },
  buttonText: {
    paddingVertical: 14,
    fontSize: 20,
    color: "#fff",
  }
})
