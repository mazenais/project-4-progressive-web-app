import React, { useState, useContext, useEffect } from 'react'
import { ChatContext } from '../../context/ChatContext'

const flexContainer = { display: 'flex', flexDirection: 'column' }

const ChatRoom = () => {
    const { messages, WriteMessage, getMessages } = useContext(ChatContext)
    const [body, setBody] = useState('')

    useEffect(() => {

        getMessages()
    }, [])

    const handleOnChange = (e) => {
        setBody(e.target.value)
    }
    const handleWriteMessages = () => {
          WriteMessage(body)
    }
    console.log('messages', messages)


    return (
        <div style={flexContainer} > 
           <h2>Chat Room</h2>
           {/*Write message */}
      <input type="text" placeholder='message' value={body} onChange={handleOnChange} />
      <button onClick={handleWriteMessages}>Add Message</button>
      {/*read messages */}
      {messages ? messages.map((message, index) => {
          return (
              <div>
                  <h5>{message.name}</h5>
                  <h6>{message.timestamp.toString()}</h6>
                  <p>{message.body}</p>
              </div>
          )
      }) : <h2>Loading...</h2>}
    </div>
    )  
}

export default ChatRoom;
