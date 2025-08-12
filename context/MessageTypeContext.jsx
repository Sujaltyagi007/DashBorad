"use client";
import { createContext, useState, useContext, useEffect } from "react";
export const MessageTypeContext = createContext(null);
export const MessageTypeProvider = (props) => {
  const [activeMessageType, setActiveMessageType] = useState("Message");
  const [mailData, setMailData] = useState(null);
  const endPoint = activeMessageType.charAt(0).toLowerCase()+activeMessageType.slice(1).toLowerCase();
  useEffect(() => {
    fetch(`/api/emails/${endPoint}`)
      .then((res) => res.type === String ? res.text(): res.json())
      .then((data) => setMailData(data));
  }, [activeMessageType]);
  return (
    <MessageTypeContext.Provider
      value={{ activeMessageType, setActiveMessageType, mailData }}
    >
      {props.children}
    </MessageTypeContext.Provider>
  );
};

export const useMessageType = () => useContext(MessageTypeContext);
