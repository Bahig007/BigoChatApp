
import { useContext, createContext,useEffect,useState } from "react"; 
import {GoogleAuthProvider ,
              signInWithPopup ,
             signInWithRedirect,
            signOut,
           onAuthStateChanged,
           FacebookAuthProvider
   } from 'firebase/auth'
import { auth } from "../firebase";


const AuthContext = createContext() 

export const AuthContextProvider = ({children}) => {

    const [user,setUser] = useState({})



        const googleSignIn = () => {
            const provider = new GoogleAuthProvider() ;
            // signInWithPopup(auth ,provider) ;
            signInWithRedirect(auth ,provider )
        }
        const facebookSignIn = () => {
            const provider = new FacebookAuthProvider() ;
            signInWithPopup(auth ,provider) ;
            // signInWithRedirect(auth ,provider )
        }

        useEffect(() => {
  
            const unSubscrib = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser)
                 })
                return () => {
                unSubscrib()
                }
        },[])
        
        const logOut = () => {
            signOut(auth)
        }
        
    return (
        <AuthContext.Provider value={{googleSignIn,facebookSignIn,logOut , user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => useContext(AuthContext) ; 