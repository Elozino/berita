import auth from "@react-native-firebase/auth";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId:
    "706615864321-abc57ra8d54952v9d6q9hiu46h4c7emh.apps.googleusercontent.com",
});

export async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  const user_sign_in = auth().signInWithCredential(googleCredential);
  user_sign_in
    .then((user) => console.log(user))
    .catch((err) => console.log(err));
}

// exports.signIn = async () => {
//   try {
//     await GoogleSignin.hasPlayServices();
//     const userInfo = await GoogleSignin.signIn();
//     // this.setState({ userInfo });
//     console.log(userInfo);
//   } catch (error: any) {
//     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//       // user cancelled the login flow
//     } else if (error.code === statusCodes.IN_PROGRESS) {
//       // operation (e.g. sign in) is in progress already
//     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//       // play services not available or outdated
//     } else {
//       // some other error happened
//     }
//   }
// };

// exports.getCurrentUserInfo = async () => {
//   try {
//     const userInfo = await GoogleSignin.signInSilently();
//     // this.setState({ userInfo });
//     console.log(userInfo);
//   } catch (error: any) {
//     if (error.code === statusCodes.SIGN_IN_REQUIRED) {
//       // user has not signed in yet
//     } else {
//       // some other error
//     }
//   }
// };

// exports.isSignedIn = async () => {
//   const isSignedIn = await GoogleSignin.isSignedIn();
//   console.log(isSignedIn);
//   // this.setState({ isLoginScreenPresented: !isSignedIn });
// };

// exports.getCurrentUser = async () => {
//   const currentUser = await GoogleSignin.getCurrentUser();
//   // this.setState({ currentUser });
//   console.log(currentUser);
// };

// exports.signOut = async () => {
//   try {
//     await GoogleSignin.signOut();
//     // this.setState({ user: null }); // Remember to remove the user from your app's state as well
//   } catch (error) {
//     console.error(error);
//   }
// };
