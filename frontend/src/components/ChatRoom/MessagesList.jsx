import { useEffect, useState } from "react"

function MessagesList({ socketInApp }) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (socketInApp) {
      socketInApp.on("newMessage", (data) => setMessages([...messages, data]))
    }

    return () => {
      if (socketInApp) {
        socketInApp.off("newMessage")
      }
    }
  }, [socketInApp, messages])

  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <p
          key={index}
          className={message.id === socketInApp.id ? "mines" : "others"}
        >
          <strong>{message.author}</strong>: {message.text}
        </p>
      ))}
    </div>
  )
}

export default MessagesList
