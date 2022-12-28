import React from "react";
import { NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
  OnBoarding: undefined;
  Main: undefined;
  Auth: undefined;
  Home: undefined;
  NewsType: undefined;
  ForgotPassword: undefined;
  VerifyResetPassword: undefined;
  ResetPassword: undefined;
  ResetSuccess: undefined;
  Country: undefined;
  NewsTopics: undefined;
  NewsSource: undefined;
  Profile: undefined;
};

export type BottomTabNavigatorParamList = {
  HomeScreen: RootStackParamList;
  Feed: undefined;
  Settings: undefined;
};

export type RouteScreenProps = {
  navigate: NavigationProp<any, any>;
};

// TYPES FOR STATE MANAGEMENT (ContextAPI)
export type TContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
  errorMsg: boolean;
  setErrorMsg: React.Dispatch<React.SetStateAction<boolean>>;
  loginMode: string;
  setLoginMode: React.Dispatch<React.SetStateAction<string>>;
  userAuthInput: {
    email: string;
    password: string;
  };
  setUserAuthInput: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
    }>
  >;
  userInfo: {
    fullname: string;
    username: string;
    telephone: string;
    profilePicture: string;
    country: string;
    newsType: string;
    website: string;
  };
  setUserInfo: React.Dispatch<
    React.SetStateAction<{
      fullname: string;
      username: string;
      telephone: string;
      profilePicture: string;
      country: string;
      newsType: string;
      website: string;
    }>
  >;
  newSourceList: string[];
  setNewSourceList: React.Dispatch<React.SetStateAction<string[]>>;
};
