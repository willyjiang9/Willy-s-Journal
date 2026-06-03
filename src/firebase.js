import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBxtu3R8wlFf7AViwqF-q4kCyq7aqwBsug",
  authDomain: "willypersonalwebsite.firebaseapp.com",
  projectId: "willypersonalwebsite",
  storageBucket: "willypersonalwebsite.firebasestorage.app",
  messagingSenderId: "361639369330",
  appId: "1:361639369330:web:690107090380d82288c0eb"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)