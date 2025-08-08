"use client";
import { createContext, useState, useContext } from "react";

export const TabContext = createContext(null);

export const TabProvider = (props) => {
  const [activeTab, setActiveTab] = useState("Message");
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {props.children}
    </TabContext.Provider>
  );
};
export const useTab = () => useContext(TabContext);
