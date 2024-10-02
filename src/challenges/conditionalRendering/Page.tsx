import { useState } from "react"

export default function Page() {
  const [messages, setMessages] = useState(["a", "b"])
  /**
   * Challenge:
   * - Only display the <h1> below if there are unread messages
   */

  const displayMessage = messages.length > 0 && <h1>You have {messages.length} unread messages!</h1>;

  return (
    <div>
      {displayMessage}
    </div>
  )
}
