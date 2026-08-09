/* =========================================================
   MITTI MANOR
   Firebase Configuration
========================================================= */

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    getDatabase,
    ref,
    set,
    get,
    update,
    remove
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

import {
    getStorage
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-storage.js";


/* =========================================================
   FIREBASE CONFIG
========================================================= */

const firebaseConfig = {

    apiKey:
        "AIzaSyDBuaqeGPJRcKNjND69-E3W_g3gta3LpW4",

    authDomain:
        "mitti-manor.firebaseapp.com",

    projectId:
        "mitti-manor",

    storageBucket:
        "mitti-manor.firebasestorage.app",

    messagingSenderId:
        "321272334348",

    appId:
        "1:321272334348:web:4ee71f475f0b586f2e4629",

    measurementId:
        "G-K9H53GTB1Q"
};


/* =========================================================
   INITIALIZE FIREBASE
========================================================= */

const app =
    initializeApp(firebaseConfig);


/* =========================================================
   ANALYTICS
========================================================= */

let analytics = null;

try {

    analytics =
        getAnalytics(app);

} catch (error) {

    console.warn(
        "Firebase Analytics unavailable:",
        error
    );
}


/* =========================================================
   AUTHENTICATION
========================================================= */

const auth =
    getAuth(app);


/* Google Provider */

const googleProvider =
    new GoogleAuthProvider();


/* =========================================================
   DATABASE
========================================================= */

const database =
    getDatabase(app);


/* =========================================================
   STORAGE
========================================================= */

const storage =
    getStorage(app);


/* =========================================================
   GOOGLE LOGIN
========================================================= */

async function loginWithGoogle() {

    try {

        const result =
            await signInWithPopup(
                auth,
                googleProvider
            );

        const user =
            result.user;

        console.log(
            "Google Login successful:",
            user
        );

        return user;

    } catch (error) {

        console.error(
            "Google Login Error:",
            error
        );

        throw error;
    }
}


/* =========================================================
   LOGOUT
========================================================= */

async function logoutUser() {

    try {

        await signOut(auth);

        console.log(
            "User logged out."
        );

    } catch (error) {

        console.error(
            "Logout Error:",
            error
        );

        throw error;
    }
}


/* =========================================================
   AUTH STATE
========================================================= */

function watchAuthState(callback) {

    return onAuthStateChanged(
        auth,
        callback
    );
}


/* =========================================================
   USER PROFILE
========================================================= */

async function saveUserProfile(
    user,
    extraData = {}
) {

    if (!user) {
        throw new Error(
            "User is required."
        );
    }


    const userRef =
        ref(
            database,
            `users/${user.uid}`
        );


    const profile = {

        uid:
            user.uid,

        name:
            user.displayName || "",

        email:
            user.email || "",

        photoURL:
            user.photoURL || "",

        phone:
            user.phoneNumber || "",

        updatedAt:
            Date.now(),

        ...extraData
    };


    await update(
        userRef,
        profile
    );


    return profile;
}


/* =========================================================
   GET USER PROFILE
========================================================= */

async function getUserProfile(
    uid
) {

    if (!uid) {
        return null;
    }


    const userRef =
        ref(
            database,
            `users/${uid}`
        );


    const snapshot =
        await get(userRef);


    if (!snapshot.exists()) {

        return null;
    }


    return snapshot.val();
}


/* =========================================================
   SAVE CART
========================================================= */

async function saveUserCart(
    uid,
    cart
) {

    if (!uid) {
        throw new Error(
            "User UID is required."
        );
    }


    const cartRef =
        ref(
            database,
            `carts/${uid}`
        );


    await set(
        cartRef,
        {
            items: cart || [],
            updatedAt: Date.now()
        }
    );
}


/* =========================================================
   GET CART
========================================================= */

async function getUserCart(
    uid
) {

    if (!uid) {
        return [];
    }


    const cartRef =
        ref(
            database,
            `carts/${uid}`
        );


    const snapshot =
        await get(cartRef);


    if (!snapshot.exists()) {

        return [];
    }


    const data =
        snapshot.val();


    return data.items || [];
}


/* =========================================================
   DELETE USER CART
========================================================= */

async function deleteUserCart(
    uid
) {

    if (!uid) {
        return;
    }


    const cartRef =
        ref(
            database,
            `carts/${uid}`
        );


    await remove(cartRef);
}


/* =========================================================
   EXPORT
========================================================= */

export {

    app,

    analytics,

    auth,

    database,

    storage,

    googleProvider,

    loginWithGoogle,

    logoutUser,

    watchAuthState,

    saveUserProfile,

    getUserProfile,

    saveUserCart,

    getUserCart,

    deleteUserCart

};


/* =========================================================
   MITTI MANOR
   Firebase configuration ready
========================================================= */
