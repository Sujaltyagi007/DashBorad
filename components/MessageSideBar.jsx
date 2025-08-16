"use client";
import * as React from "react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "./ui/input";
import MessageDemoPreview from "./MessageDemoPreview";
import { useMessageType } from "@/context/MessageTypeContext";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { useIsMobile } from "@/hooks/useMobile";
import { memo } from "react";

export function MessageSideBar() {
  const { activeMessageType, mailData } = useMessageType();
  const isMobile = useIsMobile();
  const [IsMail, setIsMail] = useState(null);
  return (
    <div className="flex h-full">
      <div
        className={` h-[100%] ${
          isMobile ? " w-[100%]" : "w-[25%]"
        } overflow-y-auto scrollbar-hidden border-r`}
      >
        <div className="flex flex-col w-full items-center p-2 gap-1 border-b">
          <div className="flex justify-between  items-center w-full px-[3%]">
            <div className="text-foreground text-base font-medium">
              {activeMessageType}
            </div>
            <Label className="flex items-center gap-2 text-sm">
              <span>Unreads</span>
              <Switch className="shadow-none" />
            </Label>
          </div>
          <Input
            type={"email"}
            placeholder="Search"
            className="mt-2 w-[100%] flex mx-auto"
          />
        </div>
        <div className="flex flex-col w-full h-[calc(100%-6rem)] items-center overflow-y-scroll no-scrollbar">
          <MailList
            mailData={mailData}
            isMobile={isMobile}
            setIsMail={setIsMail}
          />
        </div>
      </div>
      <div
        className={`h-[100%] ${
          isMobile ? "w-[0%]" : "w-[75%]"
        } overflow-y-auto no-scrollbar`}
      >
        {IsMail === null ? null : <MessageDemoPreview item={IsMail} />}
      </div>
    </div>
  );
}

function MailList({ mailData, isMobile, setIsMail }) {
  const MsgWithOutDialogMemo = memo(MsgWithOutDialog);
  const MsgWithDialogMemo = memo(MsgWithDialog);
  return (
    <React.Fragment>
      {mailData === null ? (
        Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex justify-center border-b w-full py-7 text-sm leading-tight last:border-b-0"
          >
            Loading<span className="animate-pulse">.</span>
            <span className="animate-pulse">.</span>
            <span className="animate-pulse">.</span>
          </div>
        ))
      ) : mailData === "No Response Found...!" ? (
        <div className="flex justify-center items-center h-full text-sm text-gray-500">
          No Response Found...!
        </div>
      ) : (
        mailData.mail.map((mail, index) =>
          !isMobile ? (
            <MsgWithOutDialogMemo
              item={mail}
              key={index}
              setIsMail={setIsMail}
            />
          ) : (
            <MsgWithDialogMemo item={mail} key={index} setIsMail={setIsMail} />
          )
        )
      )}
    </React.Fragment>
  );
}

function MsgWithDialog({ item, setIsMail }) {
  return (
    <div
      onClick={() => setIsMail(item)}
      className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col gap-2 border-b p-3 text-sm leading-tight last:border-b-0 cursor-pointer"
    >
      <Dialog>
        <DialogTrigger>
          <div className="flex w-full gap-2">
            <span>{item.name}</span>
            <span className="ml-auto text-xs">{item.date}</span>
          </div>
          <span className="font-medium text-start line-clamp-1">
            {item.subject}
          </span>
          <span className="line-clamp-2 text-start w-fit text-xs whitespace-break-spaces">
            {item.emailBody?.content}
          </span>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
          <DialogTitle className={'text-start'}>{item.emailBody?.heading}</DialogTitle>
          <DialogDescription className={'text-justify'}>
            {item.emailBody?.content}
          </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function MsgWithOutDialog({ item, setIsMail }) {
  return (
    <div
      onClick={() => setIsMail(item)}
      className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col gap-2 border-b p-3 text-sm leading-tight last:border-b-0 cursor-pointer"
    >
      <div className="flex w-full gap-2">
        <span>{item.name}</span>
        <span className="ml-auto text-xs">{item.date}</span>
      </div>
      <span className="font-medium text-start line-clamp-1">
        {item.subject}
      </span>
      <span className="line-clamp-2 text-start w-fit text-xs whitespace-break-spaces">
        {item.emailBody?.content}
      </span>
    </div>
  );
}
