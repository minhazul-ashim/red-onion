import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuth from '../../src/Firebase/firebase.init'

initializeAuth()


const useFirebase = () => {

    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const googleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {

            })
            .catch(error => {
                setError(error.message)
            })
    }

    const githubSignIn = () => {

        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                console.log('signed in')
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
    }

    const facebookSignIn = () => {

        signInWithPopup(auth, facebookProvider)
            .then(result => {
                console.log('signed in')
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
    }

    const logOut = () => {

        signOut(auth)
            .then(() => {

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
        githubSignIn,
        facebookSignIn,
        logOut
    }
};

export default useFirebase;