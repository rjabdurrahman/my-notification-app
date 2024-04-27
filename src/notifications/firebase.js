import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBq1qTRpEQI5lzKVFTA19PYzsWW9vYtrRQ",
  authDomain: "pushnotifications-b6b49.firebaseapp.com",
  projectId: "pushnotifications-b6b49",
  storageBucket: "pushnotifications-b6b49.appspot.com",
  messagingSenderId: "747658061064",
  appId: "1:747658061064:web:59640780f4d4316bc8f8bd",
  measurementId: "G-LMHBZ5QK7Z"
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
    const permissin = await Notification.requestPermission()
    console.log(permissin)
    if(permissin == "granted"){
      const token = await getToken(messaging, {
        vapidKey: "BOKO5rzyE48PwXf-Z-nrYWY2hgwA2ZBXHJZpJsuchkXLvCfeXwseMXBwniaTWkburi0GIlLefx2X8GcRgWVzWU4"
      })
      console.log(token)
    }  
}