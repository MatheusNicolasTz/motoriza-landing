// Firebase: use AS MESMAS credenciais do projeto Firebase do app mobile.
// Pegue em: Firebase Console > Project Settings > General > Your apps > Web App.
// Em produção, prefira variáveis de ambiente Vite (VITE_FIREBASE_*).

import { initializeApp, getApps } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

// Sem as variáveis (a Vercel não tem), usa a configuração web do app (src/firebase/config.ts).
// Essa configuração é pública por natureza: quem protege os dados são as regras do Firestore.
const env = import.meta.env
const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY || 'AIzaSyAKeh3Xr9xQpARYFBSG_qTFdsbwogd6g8E',
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || 'motoriza-46d33.firebaseapp.com',
  projectId: env.VITE_FIREBASE_PROJECT_ID || 'motoriza-46d33',
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET || 'motoriza-46d33.firebasestorage.app',
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID || '811986799909',
  appId: env.VITE_FIREBASE_APP_ID || '1:811986799909:web:dda17e114d87e6e43f9ecc'
}

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged
}
