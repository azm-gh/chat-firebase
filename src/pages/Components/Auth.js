import { auth, provider } from "../firestore-config";
import { signInWithPopup } from "firebase/auth";
import styles from "@/styles/Auth.module.css";
import React from "react";

import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const Auth = (props) => {
    const {setIsAuth} = props;
    
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken);
            setIsAuth(true);
        } catch (err) {
            console.log(err);
        }

    };

    return (<div className={styles.auth}>
        <p>Sign in with Google to continue:</p>
        <button onClick={signInWithGoogle}>Sign in With Google</button>
    </div>
    )
}