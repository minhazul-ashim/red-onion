import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuth from '../../src/Firebase/firebase.init'

initializeAuth()


const useFirebase = () => {

    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {

            })
            .catch(error => {
                setError(error.message)
            })
    }

    const logOut = () => {

        signOut(auth)
            .then(() => {
                console.log('signed out')
            })
    }

    useEffect(() => {

        onAuthStateChanged(auth, user => {

            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        })
    }, [])


    return {
        user,
        error,
        googleSignIn,
        logOut
    }
};

export default useFirebase;