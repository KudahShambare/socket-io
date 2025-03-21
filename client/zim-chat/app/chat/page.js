"use client";
import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

const server = "http://localhost:5000";

const Chat = () => {
  const [msgText, setMsgText] = useState("");
  const [messages, setMessages] = useState([]); // Store messages
  const [myId, setMyId] = useState(null);
  const socketRef = useRef(null); // Use ref to persist socket

  useEffect(() => {
    const newSocket = io(server);
    socketRef.current = newSocket;

    console.log("Socket initialized:", newSocket);

    newSocket.on("connect", () => {
      console.log("Connected to server with ID:", newSocket.id);
      setMyId(newSocket.id); // Set the socket ID when connected
    });

    newSocket.on("announcement", (val) => {
      console.log("Announcement received:", val);
    });

    newSocket.on("message", (msg) => {
      console.log("Received message:", msg); // Debugging
      setMessages((prev) => [...prev, msg]); // Append new message to the state
    });

    return () => {
      console.log("Disconnecting socket...");
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (socketRef.current && msgText.trim() !== "") {
      socketRef.current.emit("message", msgText); // Emit message to the server
      setMsgText(""); // Clear the input after sending
    }
  };

  return (
    <>
      <div id="chat-messages">
        <h2>ID - {myId ? myId : "Waiting for ID..."}</h2>
        <div>
          {messages.map((msg, index) => (
            <section key={index}>
              <h6>{msg.id}</h6> {/* Display the sender's ID */}
              <p>{msg.message}</p> {/* Display the message content */}
            </section>
          ))}
        </div>
      </div>
      <div id="chat-box">
        <input
          type="text"
          placeholder="Type a message"
          value={msgText}
          onChange={(e) => setMsgText(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </>
  );
};

export default Chat;
