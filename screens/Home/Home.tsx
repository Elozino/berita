import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC, useContext } from 'react'
import { HomeScreen, Bookmark, UserProfile, Search, Lists } from "./"
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TContext } from '../../types';
import { Context } from '../../context/ContextApp';
import { useTheme } from '../../utils/theme';
import { StatusBar } from 'expo-status-bar';
import { BookmarkContainer, HomeContainer, ListsContainer, ProfileContainer, SearchContainer } from '../../containers';


const Tab = createBottomTabNavigator();

const Home: FC = () => {
  const { dark } = useContext(Context) as TContext
  return (
    <View style={{ flex: 1, backgroundColor: useTheme(dark).bg }}>
      <StatusBar style='light' />
      <Tab.Navigator
        initialRouteName="HomeContainer"
        screenOptions={{
          header: () => null,
          tabBarActiveTintColor: useTheme(dark).appColor,
          tabBarStyle: {
            height: 80,
            borderTopEndRadius: 15,
            borderTopStartRadius: 15,
            elevation: 10,
            shadowColor: useTheme(dark).defautlText,
            backgroundColor: useTheme(dark).bg
          },
        }}
      >
        <Tab.Screen name="HomeContainer" component={HomeContainer}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size + 5} />
            ),
          }} />
        <Tab.Screen name="SearchContainer" component={SearchContainer}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="BookmarkContainer" component={BookmarkContainer}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bookmark" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="ListsContainer" component={ListsContainer}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list-outline" color={color} size={size + 5} />
            ),
          }}
        />
        <Tab.Screen name="ProfileContainer" component={ProfileContainer}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }} />

      </Tab.Navigator>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

