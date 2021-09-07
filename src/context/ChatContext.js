import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import firebase from "../Config";
import { deepPurple } from "@material-ui/core/colors";

//initialize firestore
const db = firebase.firestore();

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [messages, setMessages] = useState([]);

  const writeMessage = (body) => {
    // add a new document in collection "cities"
    db.collection("chatroom")
      .add({
        email: user.email,
        body,
        timestamp: new Date(),
      })
      .then(() => {
        console.log("Document successfully added!");
        getMessages();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const getMessages = () => {
    db.collection("chatroom")
      .get()
      .then((querySnapshot) => {
        const convertedMessages = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapShots
          convertedMessages.push(doc.data());
        });
        console.log("convertedMessages :>> ", convertedMessages);
        setMessages(convertedMessages);
      });
  };

  const addToFavorite = (favorite) => {

  };

  const getFavorites = () => {};

  return (
    <ChatContext.Provider value={{ messages, writeMessage, getMessages }}>
      {children}
    </ChatContext.Provider>
  );
};
