import { useState } from "react"

export default function Page() {
    const [messages, setMessages] = useState([])
    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there are > 0 unread messages, display "You have <n> unread
     *   message(s)"
     *      - If there's exactly 1 unread message, it should read "message"
     *        (singular)
     */
    let displayMessage;

    switch(messages.length) {
      case 1:
        displayMessage = <h1>You have 1 unread message</h1>
        break;
      case 0:
        displayMessage = <h1>You're all caught up!</h1>
        break;
      default:
        displayMessage = <h1>You have {messages.length} unread messages</h1>
    }
 
    return (
      <div>
        {displayMessage}
      </div>
    )
}
