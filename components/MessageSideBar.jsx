"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "./ui/input";
import MessageDemoPreview from "./MessageDemoPreview";
import { useMessageType } from "@/context/MessageTypeContext";

//     name: "shadcn",
//     email: "m@example.com",
//     avatar: "/avatars/shadcn.jpg",
//   },
//   navMain: [
//     {
//       title: "Inbox",
//       url: "#",
//       icon: Inbox,
//       isActive: true,
//     },
//     {
//       title: "Drafts",
//       url: "#",
//       icon: File,
//       isActive: false,
//     },
//     {
//       title: "Sent",
//       url: "#",
//       icon: Send,
//       isActive: false,
//     },
//     {
//       title: "Junk",
//       url: "#",
//       icon: ArchiveX,
//       isActive: false,
//     },
//     {
//       title: "Trash",
//       url: "#",
//       icon: Trash2,
//       isActive: false,
//     },
//   ],
//   mails: [
//     {
//       name: "William Smith",
//       email: "williamsmith@example.com",
//       subject: "Meeting Tomorrow at 10 AM for Project Update Discussion",
//       teaser:
//         "Hi team, just a reminder about our meeting tomorrow at 10 AM. Please come prepared with your project updates.",
//       teaserBody: {
//         create: {
//           heading: "Meeting Tomorrow at 10 AM for Project Update Discussion",
//           content:
//             "Hi team, just a reminder about our meeting tomorrow at 10 AM. Please come prepared with your project updates. We are looking forward to your contributions to the project. Please let me know if you have any questions or concerns.",
//         },
//       },
//     },
//     {
//       name: "Alice Smith",
//       email: "alicesmith@example.com",
//       subject: "Follow-up on Project Update and Next Steps",
//       teaser:
//         "Thanks for the update. The progress looks great so far. Let's schedule a call to discuss the next steps.",
//       teaserBody: {
//         create: {
//           heading: "Follow-up on Project Update and Next Steps",
//           content:
//             "Thanks for the update. The progress looks great so far. Let's schedule a call to discuss the next steps and align our timelines accordingly. Let me know your availability.",
//         },
//       },
//     },
//     {
//       name: "Bob Johnson",
//       email: "bobjohnson@example.com",
//       subject: "Planning a Team Outing This Weekend – Your Preference?",
//       teaser:
//         "Hey everyone! I'm thinking of organizing a team outing this weekend. Would you be interested in a hiking trip or a beach day?",
//       teaserBody: {
//         create: {
//           heading: "Planning a Team Outing This Weekend – Your Preference?",
//           content:
//             "Hey everyone! I'm thinking of organizing a team outing this weekend. Would you be interested in a hiking trip or a beach day? Please share your preferences so we can finalize the plan.",
//         },
//       },
//     },
//     {
//       name: "Emily Davis",
//       email: "emilydavis@example.com",
//       subject: "Discussion Needed: Budget Adjustments",
//       teaser:
//         "I've reviewed the budget numbers you sent over. Can we set up a quick call to discuss some potential adjustments?",
//       teaserBody: {
//         create: {
//           heading: "Discussion Needed: Budget Adjustments",
//           content:
//             "I've reviewed the budget numbers you sent over. Can we set up a quick call to discuss some potential adjustments? I have a few suggestions that could optimize our resource allocation.",
//         },
//       },
//     },
//     {
//       name: "Michael Wilson",
//       email: "michaelwilson@example.com",
//       subject: "All-Hands Meeting This Friday at 3 PM – Important Announcement",
//       teaser:
//         "Please join us for an all-hands meeting this Friday at 3 PM. We have some exciting news to share about the company's future.",
//       teaserBody: {
//         create: {
//           heading:
//             "All-Hands Meeting This Friday at 3 PM – Important Announcement",
//           content:
//             "Please join us for an all-hands meeting this Friday at 3 PM. We have some exciting news to share about the company's future. Your attendance is highly appreciated.",
//         },
//       },
//     },
//     {
//       name: "Sarah Brown",
//       email: "sarahbrown@example.com",
//       subject: "Feedback on Proposal – Let's Schedule a Meeting",
//       teaser:
//         "Thank you for sending over the proposal. I've reviewed it and have some thoughts. Could we schedule a meeting to discuss my feedback in detail?",
//       teaserBody: {
//         create: {
//           heading: "Feedback on Proposal – Let's Schedule a Meeting",
//           content:
//             "Thank you for sending over the proposal. I've reviewed it and have some thoughts. Could we schedule a meeting to discuss my feedback in detail and finalize the next steps?",
//         },
//       },
//     },
//     {
//       name: "David Lee",
//       email: "davidlee@example.com",
//       subject: "New Project Idea – Let's Discuss Feasibility",
//       teaser:
//         "I've been brainstorming and came up with an interesting project concept. Do you have time this week to discuss its potential impact and feasibility?",
//       teaserBody: {
//         create: {
//           heading: "New Project Idea – Let's Discuss Feasibility",
//           content:
//             "I've been brainstorming and came up with an interesting project concept. Do you have time this week to discuss its potential impact and feasibility? I’d love your input before moving forward.",
//         },
//       },
//     },
//     {
//       name: "Olivia Wilson",
//       email: "oliviawilson@example.com",
//       subject: "Upcoming Vacation Notice – Two Weeks Next Month",
//       teaser:
//         "Just a heads up that I'll be taking a two-week vacation next month. I'll make sure all my projects are up to date before I leave.",
//       teaserBody: {
//         create: {
//           heading: "Upcoming Vacation Notice – Two Weeks Next Month",
//           content:
//             "Just a heads up that I'll be taking a two-week vacation next month. I'll make sure all my projects are up to date before I leave. Let me know if there’s anything urgent to wrap up beforehand.",
//         },
//       },
//     },
//     {
//       name: "James Martin",
//       email: "jamesmartin@example.com",
//       subject: "Conference Registration Completed",
//       teaser:
//         "I've completed the registration for the upcoming tech conference. Let me know if you need any additional information from my end.",
//       teaserBody: {
//         create: {
//           heading: "Conference Registration Completed",
//           content:
//             "I've completed the registration for the upcoming tech conference. Let me know if you need any additional information from my end. Looking forward to attending and learning.",
//         },
//       },
//     },
//     {
//       name: "Sophia White",
//       email: "sophiawhite@example.com",
//       subject: "Team Dinner to Celebrate Project Success – RSVP",
//       teaser:
//         "To celebrate our recent project success, I'd like to organize a team dinner. Are you available next Friday evening? Please let me know your preferences.",
//       teaserBody: {
//         create: {
//           heading: "Team Dinner to Celebrate Project Success – RSVP",
//           content:
//             "To celebrate our recent project success, I'd like to organize a team dinner. Are you available next Friday evening? Please let me know your preferences and availability so we can finalize the arrangements.",
//         },
//       },
//     },
//   ],
// };
export function MessageSideBar() {
  const [IsMail, setIsMail] = useState(null);
  const { activeMessageType, mailData } = useMessageType();
  return (
    <div className="flex h-full ">
      <div className=" w-[25%] h-[100%] overflow-y-auto scrollbar-hidden border-r ">
        <div className="flex flex-col w-full items-center p-2 gap-1 h-[15%] border-b ">
          <div className="flex justify-between items-center w-full ">
            <div className="text-foreground text-base font-medium ">
              {activeMessageType}
            </div>
            <Label className="flex items-center gap-2 text-sm ">
              <span>Unreads</span>
              <Switch className="shadow-none" />
            </Label>
          </div>
          <Input
            type={"email"}
            placeholder="Search"
            className="mt-2 w-[100%] flex mx-auto "
          />
        </div>
        <div className="flex flex-col w-full items-center h-[85%] overflow-y-scroll no-scrollbar">
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
            mailData.mail.map((mail, index) => (
              <div
                onClick={() => (setIsMail(mail), console.log(mail))}
                key={index}
                className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col gap-2 border-b p-3 text-sm leading-tight last:border-b-0 cursor-pointer"
              >
                <div className="flex w-full gap-2">
                  <span>{mail.name}</span>
                  <span className="ml-auto text-xs">{mail.date}</span>
                </div>
                <span className="font-medium line-clamp-1">{mail.subject}</span>
                <span className="line-clamp-2 w-fit text-xs whitespace-break-spaces">
                  {mail.emailBody?.content}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
      <div className=" w-[75%] h-[100%] overflow-y-auto no-scrollbar ">
        {IsMail === null ? null : <MessageDemoPreview item={IsMail} />}
      </div>
    </div>
  );
}
