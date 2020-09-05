import firebase from '@firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDz9hpLwOkVkrlmTwbrf1YxfUXyWOM5GeU",
  authDomain: "anime-shop.firebaseapp.com",
  databaseURL: "https://anime-shop.firebaseio.com",
  projectId: "anime-shop",
  storageBucket: "anime-shop.appspot.com",
  messagingSenderId: "945483913522",
  appId: "1:945483913522:web:9bea787f51defe07d41f2b",
  measurementId: "G-WCSZ9NX83C"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider)
}

export const storeNewUserToDB = async (userData, additionalData) => {
  if (!userData) { return }
  const userReference = firestore.doc(`users/${userData.uid}`)
  const snapShotOfUser = await userReference.get()
  // console.log(snapShotOfUser)
  const { email, displayName } = userData
  const created = new Date()
  if (!snapShotOfUser.exists) {
    try {
      userReference.set({
        email,
        displayName,
        created,
        ...additionalData,
      })
    } catch (error) {
      console.log(error, "Unable to save user information")
    }
  }
  return userReference
}

export default firebase