import { useState } from "react"

function MessagesList() {
  const [messages, setMessages] = useState([])

  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <p key={index}>
          <strong>{message.author}</strong>: {message.text}
        </p>
      ))}
    </div>
  )
}

export default MessagesList
