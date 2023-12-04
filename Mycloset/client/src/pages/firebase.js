
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHYvQX60N5fG4La-BRQV_5-uG94f9Atf4",
  authDomain: "uploading-file-1a8b2.firebaseapp.com",
  projectId: "uploading-file-1a8b2",
  storageBucket: "uploading-file-1a8b2.appspot.com",
  messagingSenderId: "507114999644",
  appId: "1:507114999644:web:402624808beadb9b063b99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);


