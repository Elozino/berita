import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { Auth, ForgotPassword, ResetPassword, ResetSuccess, VerifyResetPassword } from './screens/Auth';
import { Country, NewsSource, NewsTopics, OnBoarding } from './screens';
import { Home, Profile } from "./screens/Home"
import NewsType from './screens/NewsType';



const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="NewsType" component={NewsType} />
        <Stack.Screen name="ResetSuccess" component={ResetSuccess} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="VerifyResetPassword" component={VerifyResetPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Country" component={Country} />
        <Stack.Screen name="NewsTopics" component={NewsTopics} />
        <Stack.Screen name="NewsSource" component={NewsSource} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="ResetSuccess" component={ResetSuccess} />
        <Stack.Screen name="ResetSuccess" component={ResetSuccess} />
        <Stack.Screen name="ResetSuccess" component={ResetSuccess} />
        <Stack.Screen name="ResetSuccess" component={ResetSuccess} />
        <Stack.Screen name="ResetSuccess" component={ResetSuccess} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}