import auth from "@react-native-firebase/auth";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId:
    "706615864321-abc57ra8d54952v9d6q9hiu46h4c7emh.apps.googleusercontent.com",
  scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: "", // specifies a hosted domain restriction
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  accountName: "", // [Android] specifies an account name on the device that should be used
  iosClientId: "<FROM DEVELOPER CONSOLE>", // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  googleServicePlistPath: "", // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  openIdRealm: "", // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  profileImageSize: 120,
});

export async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

exports.signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    // this.setState({ userInfo });
    console.log(userInfo);
  } catch (error: any) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};

exports.getCurrentUserInfo = async () => {
  try {
    const userInfo = await GoogleSignin.signInSilently();
    // this.setState({ userInfo });
    console.log(userInfo);
  } catch (error: any) {
    if (error.code === statusCodes.SIGN_IN_REQUIRED) {
      // user has not signed in yet
    } else {
      // some other error
    }
  }
};


exports.isSignedIn = async () => {
  const isSignedIn = await GoogleSignin.isSignedIn();
  console.log(isSignedIn)
  // this.setState({ isLoginScreenPresented: !isSignedIn });
};

exports.getCurrentUser = async () => {
  const currentUser = await GoogleSignin.getCurrentUser();
  // this.setState({ currentUser });
  console.log(currentUser)
};

exports.signOut = async () => {
  try {
    await GoogleSignin.signOut();
    // this.setState({ user: null }); // Remember to remove the user from your app's state as well
  } catch (error) {
    console.error(error);
  }
};