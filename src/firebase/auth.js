import { auth, db } from './firebase'
import { signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'


const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const signUpWithPopup = async () => await signInWithPopup(auth, googleProvider);

export const SignOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)


export const createDocumentUser = async (userAuth) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnaphot = await getDoc(userDocRef);

    if(!userSnaphot.exists()){
        const { displayName, email, photoURL } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, profile: photoURL, createdAt
            })
        } catch (e) {
            console.log(e)
        }

    }

    return userDocRef

}