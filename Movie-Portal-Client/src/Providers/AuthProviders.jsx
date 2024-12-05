import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProviders = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [posts, setPosts] = useState([]);
    // useEffect(()=>{
    //     fetch('data.json')
    //     .then(res => res.json())
    //     .then(data => setPosts(data))
    // },[])
    // console.log(user);


    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }


    const forgetPassword = (email) =>{
        setLoading(true);
        return sendPasswordResetEmail(auth,email);
    }

    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider);
    }
    
    const updateUserProfile =(updatedData)=>{
        setLoading(true)
        return updateProfile(auth.currentUser , updatedData)
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user', currentUser.email);
            setLoading(false);
        })
        return ()=>{
            return unsubscribe();
        }
    },[])

    const authInfo ={
        signInWithGoogle,createUser,setUser,signIn,logOut,user,updateUserProfile,forgetPassword,loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;