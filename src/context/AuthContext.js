import { createContext, useState, useEffect } from "react";
import firebase from '../Config';
import firebaseApp from "firebase/app";

const db = firebase.firestore();

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
          getFavorites(user);
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

    var userDocRef = db.collection("users").doc(user.uid);
      userDocRef.set({
     
        favorites: [],
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
    getFavorites(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('errorMessage :>> ', errorMessage)
  });

}

const addToFavorite = (favorite) => {
    
      // To update favorite league:
      db.collection("users")
        .doc(user.uid)
        .update({
          favorites: firebaseApp.firestore.FieldValue.arrayUnion(favorite)
        })
        .then(() => {
          console.log("Document successfully updated!");
        });
}

const getFavorites = (user) => {
  var docRef = db.collection("users").doc(user.uid);

docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
  
}

    return (
        <AuthContext.Provider value={{ user, register, login, addToFavorite }}>
            {children}
        </AuthContext.Provider>
    )
}