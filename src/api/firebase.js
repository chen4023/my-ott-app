import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// 사용자 상태관리
export const onUserState = (callback) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

// 이메일 회원가입
export const handleEmailSignUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch {
    (error) => {
      console.error(`오류발생:${error}`);
    };
  }
};

// 이메일 로그인
export const handleEmailSignIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error("오류발생");
  }
};

// 구글 로그인
export const handleGoogleSignIn = async () => {
  return signInWithPopup(auth, provider).catch((error) => {
    console.error(error);
  });
};

// 로그아웃
export const handleLogout = () => {
  return signOut(auth);
};
