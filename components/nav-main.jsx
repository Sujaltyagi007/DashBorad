"use client";
import { useState, React } from "react";
import {
  IconAppWindowFilled,
  IconMessageFilled,
  IconMailOpenedFilled,
  IconSend,
  IconTrashXFilled,
  IconTrash,
} from "@tabler/icons-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useContext } from "react";
import { TabContext } from "@/context/TabContext";
import { MessageTypeContext } from "@/context/MessageTypeContext";
const data = [
  {
    name: "Message",
    component: IconMailOpenedFilled,
  },
  {
    name: "Draft",
    component: IconAppWindowFilled,
  },
  {
    name: "Sent",
    component: IconSend,
  },
  {
    name: "Trash",
    component: IconTrash,
  },
  {
    name: "Junk",
    component: IconTrashXFilled,
  },
];

export function NavMain({ items }) {
  const { activeTab, setActiveTab } = useContext(TabContext);
  const { activeMessageType, setActiveMessageType } = useContext(MessageTypeContext);
  const Icon = data[data.findIndex((item) => item.name === activeMessageType)].component;
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              onClick={() => setActiveTab("Message")}
              tooltip="Message"
              className={` ${
                activeTab === "Message"
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                  : "hover:bg-muted "
              }  min-w-8 duration-200 ease-linear`}
            >
              <IconMessageFilled />
              <span>{activeMessageType}</span>
            </SidebarMenuButton>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>
                  {Icon && <Icon className="size-4" />}
                </MenubarTrigger>
                <MenubarContent className="min-w-28 max-w-40">
                  {data.map((item, index) =>
                    item.name !== activeMessageType ? (
                      <MenubarItem
                        onClick={() => {
                          setActiveMessageType(item.name);
                          console.log(activeMessageType);
                        }}
                        key={index}
                      >
                        <item.component />
                        <span className="">{item.name}</span>
                      </MenubarItem>
                    ) : null
                  )}
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                onClick={() => setActiveTab(item.title)}
                className={` ${
                  activeTab === item.title
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                    : "hover:bg-muted "
                } min-w-8 duration-200 ease-linear cursor-pointer`}
              >
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
