import { io } from "socket.io-client"

import MessageForm from "./MessageForm"
import MessagesList from "./MessagesList"
import { useEffect, useState } from "react"

function ChatRoom({ nickName }) {
  const [socketInApp, setSocketInApp] = useState(null)

  useEffect(() => {
    const socket = io("http://localhost:8000")

    setSocketInApp(socket)

    socket.on("connect", () => console.log("Connection successfull", socket.id))

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <>
      <MessagesList socketInApp={socketInApp} />
      <MessageForm socketInApp={socketInApp} nickName={nickName} />
    </>
  )
}

export default ChatRoom
