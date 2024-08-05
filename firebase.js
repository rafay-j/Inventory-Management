import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr3GCjErgB3V0UIAkDLgn45gDPcPH8HXY",
  authDomain: "inventory-management-ac26d.firebaseapp.com",
  projectId: "inventory-management-ac26d",
  storageBucket: "inventory-management-ac26d.appspot.com",
  messagingSenderId: "928887554140",
  appId: "1:928887554140:web:d696fa1b51a3bb9b072699",
  measurementId: "G-6EC9GFB0BS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Conditionally initialize Analytics
let analytics;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

const firestore = getFirestore(app);

export { firestore, analytics };
