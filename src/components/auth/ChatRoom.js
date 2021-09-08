import React, { useState, useContext, useEffect } from "react";
import { ChatContext } from "../../context/ChatContext";
import * as ReactBootstrap from "react-bootstrap";
import { Input } from "@material-ui/core";
import "./chatroom.css";

const flexContainer = { display: "flex", flexDirection: "column" };

const ChatRoom = () => {
  const { messages, writeMessage, getMessages } = useContext(ChatContext);
  const [body, setBody] = useState("");

  useEffect(() => {
    getMessages();
  }, []);

  const handleOnChange = (e) => {
    setBody(e.target.value);
  };
  const handleWriteMessages = () => {
    writeMessage(body);
  };
  console.log("messages", messages);

  return (
    <div style={flexContainer}>
      <h2>Chat Room</h2>
      {/*Write message */}
      <Input
        type="text"
        placeholder="message"
        value={body}
        onChange={handleOnChange}
      />
      <ReactBootstrap.Button onClick={handleWriteMessages}>
        Add Message
      </ReactBootstrap.Button>
      {/*read messages */}
      {messages ? (
        messages.map((message, index) => {
          return (
            <div className="message" style={flexContainer}>
              <h5>{message.email}</h5>
              <p>{message.body}</p>
              <h6 className="time-right">
                {message.timestamp.toDate().toUTCString()}
              </h6>
            </div>
          );
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default ChatRoom;
