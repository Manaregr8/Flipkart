"use client";
import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default function Database() {
  useEffect(() => {
    // Check if window is available (i.e., on the client-side)
    if (typeof window !== "undefined") {
      // Initialize Firebase and Analytics only on the client-side
      const firebaseConfig = {
        apiKey: "AIzaSyAE_DtfeVlLLUi8nqvPDOCvTWWYi6Drk8w",
        authDomain: "flipkartgrid-1be73.firebaseapp.com",
        projectId: "flipkartgrid-1be73",
        storageBucket: "flipkartgrid-1be73.firebasestorage.app",
        messagingSenderId: "222192112274",
        appId: "1:222192112274:web:75e5fb0f7939f4b3a20c4b",
        measurementId: "G-WBT8SRXTVF"
      };

      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app); // Initialize analytics here
    }
  }, []); // Empty dependency array ensures this runs only once, on mount

  return (
    <>
      <h1>piplooo</h1>
    </>
  );
}
