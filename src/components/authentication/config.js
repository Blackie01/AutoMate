import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB58i_sh2M60UnWnn_ItHkIqBQM8IAnGvo",
  authDomain: "automate-app-388901.firebaseapp.com",
  projectId: "automate-app-388901",
  storageBucket: "automate-app-388901.appspot.com",
  messagingSenderId: "622077851931",
  appId: "1:622077851931:web:f9ccda4fc9f93cb4497bbe",
  measurementId: "G-JHFMMT1DBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};