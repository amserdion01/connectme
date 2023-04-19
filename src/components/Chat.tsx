import { useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";
import io, { Socket } from "socket.io-client";

interface Message {
  id: string;
  content: string;
  sender: {
    name: string;
  };
}

interface ChatProps {
  serverId: string;
}

const Chat: React.FC<ChatProps> = ({ serverId }) => {
  const { data: session } = useSession();
  const userId = session?.user.id;
  const [messages, setMessages] = useState<Message[]>([]);
  const [content, setContent] = useState("");
  const socketRef = useRef<Socket>();

  useEffect(() => {
    // connect to socket.io server
    socketRef.current = io("http://localhost:5000");

    // listen for incoming messages
    socketRef.current.on("message", (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      // disconnect from socket.io server
      socketRef.current?.disconnect();
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // send message to server
    socketRef.current?.emit("message", { content, userId, serverId });
    setContent("");
  };

  return (
    <div>
      <h1>Chat</h1>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <p>{message.content}</p>
            <p>By: {message.sender.name}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message here"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
