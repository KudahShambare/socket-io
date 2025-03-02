'use client';
import { useEffect,useState } from "react";
import { io } from "socket.io-client";



const Chat = ()=>{
    const server = "http://localhost:5000";

    /*Hooks*/

    const [msgText,setMsgText] = useState("");
    const socket = io(server);


useEffect(()=>{
    console.log("Socket: ",socket);
    console.log("Socket ID: ",socket.id);
    socket.on("connect",()=>{
        console.log("Connected to server");

    })

    return ()=>{
        socket.disconnect();
        socket.off();
    }
    
},[server])
    
    return (
        <div>
            <input type="text" placeholder="Type a message" onChange={(e)=>{
                setMsgText(e.target.value);
            }}/>
            <button onClick={()=>{
                
                socket.emit("message",msgText);
            }}>Send</button>
        </div>
    )
}
export default Chat;