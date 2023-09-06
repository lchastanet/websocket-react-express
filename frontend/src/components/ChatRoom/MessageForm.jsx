import { useState } from "react"

function MessageForm({ socketInApp, nickName }) {
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    socketInApp.emit("sendMessage", {
      id: socketInApp.id,
      author: nickName,
      text: message,
    })

    setMessage("")
  }

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="message"
        id="message"
        placeholder="Tour text here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input type="submit" value="Envoyer" />
    </form>
  )
}

export default MessageForm
