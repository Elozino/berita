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

export type TContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
  errorMsg: boolean;
  setErrorMsg: React.Dispatch<React.SetStateAction<boolean>>;
  loginMode: string;
  setLoginMode: React.Dispatch<React.SetStateAction<string>>;
  newsType: string;
  setNewsType: React.Dispatch<React.SetStateAction<string>>;
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
};

export type Auth = {
  email: string;
  password: string;
};

export type ProfileData = {
  fullname: string;
  username: string;
  profilePicture: string;
};
