import { createContext, useState, useEffect } from "react";
import firebase from '../Config';

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          //user is signed in, see docs for a list of available properties
          //https://firebase.google.com/docs/reference/js/firebase.user
          console.log('user :>>', user);
          setUser(user)
        } else {
          console.log('No valid user DB token');
        }
      });
    }, [])


    const register = ({ email, password, name }) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    user.updateProfile({
      displayName: name,
    }).then(() => {
      const user = firebase.auth().currentUser;
      setUser(user)
    }).catch((error) => {
      console.log('error :>>', error);
    });
    

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('errorMessage:>> ', errorMessage)
  });

}

    const login = ({ email, password }) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log('user :>> ', user)
    setUser(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('errorMessage :>> ', errorMessage)
  });

}

const addToFavorite = (favorite) => {
}

const getFavorites = () => {
  
}

    return (
        <AuthContext.Provider value={{ user, register, login }}>
            {children}
        </AuthContext.Provider>
    )
}