/* ============================================================
   config.js — all third-party keys/config for Mitti Manor
   Keep this file separate so keys are easy to find & rotate.
   ============================================================ */

// Firebase (used for Phone OTP login)
const firebaseConfig = {
  apiKey: "AIzaSyAlnVStVsr5JHYA9gPjyyEejhrIRR7Xk0I",
  authDomain: "novawallpaper-f7cc8.firebaseapp.com",
  databaseURL: "https://novawallpaper-f7cc8-default-rtdb.firebaseio.com",
  projectId: "novawallpaper-f7cc8",
  storageBucket: "novawallpaper-f7cc8.firebasestorage.app",
  messagingSenderId: "380025857124",
  appId: "1:380025857124:web:e290725fe0c4e7ea552b71",
  measurementId: "G-YTS5MR2HN9"
};

// Google Sign-In (Google Identity Services)
const GOOGLE_CLIENT_ID = "452456583028-1l86bibq60ggkl3o1h5j88sed7v04eof.apps.googleusercontent.com";

// Razorpay (checkout / payments)
// NOTE: this is a LIVE key — real payments will be charged. Swap in a
// rzp_test_... key while you're still testing the site.
const RAZORPAY_KEY_ID = "rzp_live_TCZM7OsD80tNpH";

// Brand
const BRAND_NAME = "Mitti Manor";
const BRAND_TAGLINE = "India's favourite plant store";
