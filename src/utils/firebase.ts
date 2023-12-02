import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, UserCredential } from 'firebase/auth'

// environment variables
const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_FIREBASE_MEASUREMENT_ID,
} = process.env

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
  measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID,
}

const googleAuthProvider = new GoogleAuthProvider()
const firebase = initializeApp(firebaseConfig)
export const auth = getAuth(firebase)

export const signInWithGoogle = async (handlers?: {
  onSuccess?: (userCredential: UserCredential) => void
  onError?: () => void
}) => {
  try {
    const userCredential = await signInWithPopup(auth, googleAuthProvider)

    if (handlers?.onSuccess) {
      handlers.onSuccess(userCredential)
    }
  } catch (error) {
    console.error(error)
    if (handlers?.onError) {
      handlers.onError()
    }
  }
}

export default firebase
