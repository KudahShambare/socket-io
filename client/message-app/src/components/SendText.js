import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const SendText = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", (data) => {
      console.log(data);
    });
  }, [socket]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message !== "") {
      socket.emit("message", message);
      setMessage("");
    }
  };

  return (
    <form>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </form>
  );
};

export default SendText;