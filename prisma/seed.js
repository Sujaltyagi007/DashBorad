import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
const prisma = new PrismaClient().$extends(withAccelerate());
// const data = [
//   {
//     name: "Gourav",
//     email: "gouravthakur123@gmail.com",
//     subject: "Meeting Tomorrow at 10 AM for Project Update Discussion",
//     Date: new Date(),
//     emailCategory: "message",
//     emailBody: {
//       create: {
//         heading:
//           "Meeting Tomorrow at 10 AM for Project Update Discussion with Client Team Members. Please confirm your availability.",
//         content:
//           "This is to inform you that we have scheduled a Project Update Discussion with the Client Team Members tomorrow at 10:00 AM. During this meeting, we will be providing important updates on the project's progress and addressing any questions or concerns from the client’s side. Your presence and input are crucial, as we will be discussing key project milestones, timelines, and next steps. Please confirm your availability for the meeting at your earliest convenience, as we would like to ensure all relevant team members are present to provide a comprehensive overview. Should you have any specific agenda items you’d like to address, kindly let me know ahead of time so we can include them in the discussion. Thank you for your cooperation and prompt confirmation. Looking forward to your participation.",
//       },
//     },
//   },
//   {
//     name: "Mia",
//     email: "mia.wilson77@gmail.com",
//     subject:
//       "Upcoming Staff Training on New Software Implementation Scheduled for Next Week",
//     Date: "2025-08-08T09:00:00Z",
//     emailCategory: "message",
//     emailBody: {
//       create: {
//         heading:
//           "Staff Training Session Scheduled for Next Week to Introduce New Software Implementation, Including Features, Benefits, and Hands-On Demonstration for All Team Members",
//         content:
//           "Dear Team, I hope everyone is doing well. We are excited to announce that next week we will be holding a comprehensive training session to introduce the new software we’ll be using across various departments. The training will take place on Monday at 10 AM and will cover the software’s key features, benefits, and how it will streamline our workflows. We will also include a hands-on demonstration, allowing everyone to familiarize themselves with the user interface and tools available. This session is crucial to ensure a smooth transition, and your participation is required. If you have any specific questions or areas of concern about the software, feel free to send them to me in advance, and we will address them during the session. Please confirm your availability for this session as soon as possible. Looking forward to seeing you there!",
//       },
//     },
//   },
//   {
//     "name": "James",
//     "email": "james.thompson83@gmail.com",
//     "subject": "Reminder: Internal Audit Meeting Scheduled for Tomorrow to Discuss Financial Reports and Compliance Issues",
//     "Date": "2025-08-08T16:00:00Z",
//     "emailCategory": "message",
//     "emailBody": {
//       "create": {
//         "heading": "Reminder: Internal Audit Meeting Scheduled for Tomorrow to Review Financial Reports, Compliance Issues, and Finalize Audit Preparations for the Quarter-End Review",
//         "content": "Hello Everyone, I hope you are all doing well. This is a reminder that our internal audit meeting is scheduled for tomorrow at 10:00 AM. During this session, we will review the latest financial reports, identify any compliance issues, and discuss any discrepancies that need to be addressed before the quarter-end review. Your insights and feedback on the reports will be extremely valuable, so please ensure you are familiar with the latest data and have any relevant documents ready for discussion. We’ll also allocate time to address any audit concerns and make final preparations for the upcoming audit review. Kindly confirm your availability for the meeting and be sure to attend with all the necessary materials. Thank you!"
//       }
//     }
//   },
//   {
//     "name": "Ethan",
//     "email": "ethan.daniels55@outlook.com",
//     "subject": "New Marketing Campaign Rollout: Action Plan, Responsibilities, and Key Deliverables for All Stakeholders",
//     "Date": "2025-08-08T11:30:00Z",
//     "emailCategory": "message",
//     "emailBody": {
//       "create": {
//         "heading": "New Marketing Campaign Rollout Scheduled for Next Month: Detailed Action Plan, Assigned Responsibilities, and Key Deliverables for All Stakeholders",
//         "content": "Dear Team, I am excited to inform you that the new marketing campaign for next month is almost ready for rollout. The campaign will focus on our brand’s new product launch and will require full team coordination. We’ll be holding a meeting next Tuesday at 2 PM to walk through the detailed action plan, assigned responsibilities, and key deliverables for each stakeholder. We will also discuss the campaign's timeline, creative assets, media strategies, and tracking mechanisms to monitor success. Please ensure that you come prepared to discuss your role in the campaign, any resources you may need, and your deadlines. It’s essential that everyone is aligned as we move forward with this important initiative. Kindly confirm your attendance at the meeting and let me know if you have any questions beforehand."
//       }
//     }
//   },
//   {
//     "name": "Zoe",
//     "email": "zoe.roberts99@gmail.com",
//     "subject": "Client Strategy Session to Discuss Future Directions, Market Trends, and Long-Term Goals",
//     "Date": "2025-08-08T13:00:00Z",
//     "emailCategory": "message",
//     "emailBody": {
//       "create": {
//         "heading": "Client Strategy Session Scheduled for Next Week to Discuss Future Directions, Emerging Market Trends, and Long-Term Goals for Partnership Expansion",
//         "content": "Dear Team, We have scheduled a crucial strategy session with the client for next Thursday at 1 PM. During this meeting, we will discuss the client’s long-term goals and explore potential strategies for expanding our partnership. We will also review emerging market trends and assess how they can shape our joint efforts moving forward. It’s essential that all key stakeholders attend this session, as we’ll be formulating strategies that could have a significant impact on both our business and the client’s. Please review any relevant documents and data beforehand, and come prepared to discuss new opportunities and any concerns you may have. Kindly confirm your availability for the session as soon as possible. We are looking forward to a productive conversation."
//       }
//     }
//   },
//   {
//     "name": "Charlotte",
//     "email": "charlotte.morris22@aol.com",
//     "subject": "Team-Building Retreat Next Month: Activities, Objectives, and Expectations for the Upcoming Offsite Event",
//     "Date": "2025-08-08T17:00:00Z",
//     "emailCategory": "message",
//     "emailBody": {
//       "create": {
//         "heading": "Team-Building Retreat Scheduled for Next Month: Detailed Agenda, Activities, Objectives, and Expectations for the Upcoming Offsite Event to Strengthen Collaboration and Foster Team Spirit",
//         "content": "Hello Team, I’m excited to share that our annual team-building retreat has been scheduled for next month, and it promises to be an exciting and valuable experience. The retreat will be held at a scenic location and will focus on strengthening collaboration, communication, and team spirit. We have a packed agenda of activities designed to challenge our problem-solving skills, improve teamwork, and foster a positive working environment. During the retreat, we will also have time for personal development workshops and relaxation sessions to recharge and build stronger relationships. Your participation and engagement are essential for the success of this event, and we expect all team members to fully participate in the activities. Please keep an eye out for further details, including the schedule and what to bring. Kindly confirm your availability for the retreat and let me know if you have any special requirements."
//       }
//     }
//   },
//   {
//     "name": "Sophia",
//     "email": "sophia.martin34@gmail.com",
//     "subject": "Team Meeting to Discuss Marketing Strategies for the Upcoming Quarter and Campaign Planning",
//     "Date": "2025-08-08T10:00:00Z",
//     "emailCategory": "message",
//     "emailBody": {
//       "create": {
//         "heading": "Upcoming Team Meeting Scheduled to Discuss Comprehensive Marketing Strategies for the Next Quarter, Review Campaign Performance, and Explore New Opportunities",
//         "content": "Hello Team, I hope you're all doing well. We have scheduled an important meeting tomorrow at 11:00 AM where we will discuss the marketing strategies for the upcoming quarter. During this session, we’ll review the performance of our current campaigns and identify areas for improvement. Furthermore, we’ll explore new opportunities and strategies that could help us stay ahead of the competition. This is a crucial meeting for the marketing team as we finalize the roadmap for the next few months. We will also allocate time to discuss new campaign ideas and the potential impact they could have. Please make sure to come prepared with your insights and any data you think might be relevant for our discussion. Kindly confirm your attendance by EOD today, so we can adjust the agenda if necessary. Looking forward to an engaging and productive discussion!"
//       }
//     }
//   },
//   {
//     "name": "Liam",
//     "email": "liam.davis91@outlook.com",
//     "subject": "Scheduled Client Feedback Session to Address Concerns and Provide Updates on Current Projects for Next Week",
//     "Date": "2025-08-08T15:00:00Z",
//     "emailCategory": "message",
//     "emailBody": {
//       "create": {
//         "heading": "Client Feedback Session Scheduled for Monday at 3 PM to Address Questions, Concerns, and Provide Updates on Ongoing Projects with Key Stakeholders",
//         "content": "Dear Team, I hope this message finds you well. A feedback session with the client has been scheduled for Monday at 3 PM. This meeting will provide an opportunity for the client to share any questions or concerns regarding the ongoing projects. We will also provide updates on the progress made so far and address any issues that may have come up. It is crucial that all project managers and key team members attend this session, as we need to ensure that we are aligned with the client's expectations and that any gaps are addressed. Please take some time over the weekend to review your respective areas and be prepared with updates. If you have any concerns or topics you would like to add to the agenda, please send them to me by EOD tomorrow. I look forward to a productive session with all of you. Kindly confirm your attendance as soon as possible."
//       }
//     }
//   },
//   {
//     "name": "Emma",
//     "email": "emma.jones55@yahoo.com",
//     "subject": "Reminder: Deadline for Quarterly Report Submission Approaches Tomorrow, Please Ensure Timely Submission",
//     "Date": "2025-08-08T08:00:00Z",
//     "emailCategory": "message",
//     "emailBody": {
//       "create": {
//         "heading": "Friendly Reminder: The Deadline for Submitting Your Quarterly Reports is Tomorrow by 5:00 PM; Please Ensure All Reports Are Complete and Submitted on Time",
//         "content": "Dear Colleagues, I hope you are all doing well. This is a friendly reminder that the deadline for submitting your quarterly reports is tomorrow at 5:00 PM. As we approach the end of the quarter, it is important that we have all reports in by the specified time to ensure that everything is reviewed and finalized before the board meeting next week. Please make sure that your reports are complete and contain all relevant data, insights, and analysis. If you encounter any issues or foresee any delays, please inform me immediately so we can find a solution. If you need assistance or have any questions regarding the submission process, feel free to reach out. Let’s work together to ensure that all reports are submitted without any issues. Thank you for your cooperation, and I look forward to receiving your completed reports!"
//       }
//     }
//   },
//   {
//     "name": "Oliver",
//     "email": "oliver.black@icloud.com",
//     "subject": "Project Kick-off Meeting on Monday to Discuss Roles, Milestones, and Timeline for the Upcoming Project",
//     "Date": "2025-08-08T12:00:00Z",
//     "emailCategory": "message",
//     "emailBody": {
//       "create": {
//         "heading": "Scheduled Project Kick-off Meeting on Monday at 9 AM to Review Roles, Milestones, Key Deliverables, and the Overall Timeline for the New Project",
//         "content": "Hi Team, I am pleased to announce that our project kick-off meeting is scheduled for Monday at 9:00 AM. During this meeting, we will review the project’s goals, roles, key milestones, and the timeline for the first phase of the project. It is important that all team members attend as we will be outlining the responsibilities of each individual and discussing the key deliverables for the next few weeks. We will also allocate time to review any potential risks and challenges we might encounter and how to address them proactively. Please come prepared to ask questions and clarify any points about your role and deliverables. We are eager to begin this project, and your contributions will be crucial for its success. Kindly confirm your attendance at your earliest convenience so we can ensure all team members are present and ready to get started."
//       }
//     }
//   },
//   {
//     "name": "Ava",
//     "email": "ava.smith@aol.com",
//     "subject": "Upcoming Webinar on Data-Driven Marketing with Insights into SEO, Social Media Metrics, and Analytics Next Thursday at 2 PM",
//     "Date": "2025-08-08T14:00:00Z",
//     "emailCategory": "message",
//     "emailBody": {
//       "create": {
//         "heading": "Reminder and Details for the Upcoming Webinar on Data-Driven Marketing, Covering SEO Optimization, Social Media Metrics, and Advanced Analytics Techniques Scheduled for Next Thursday at 2 PM",
//         "content": "Dear Participants, I hope you're all doing great. I’m writing to remind you of our upcoming webinar, ‘Data-Driven Marketing,’ which will take place next Thursday at 2:00 PM. This session will delve into the core strategies and techniques that power data-driven marketing campaigns. We will cover a wide range of topics, including the latest SEO optimization tactics, how to track and analyze social media metrics, and leveraging advanced analytics tools to improve marketing ROI. Additionally, we will provide practical insights and case studies to help you understand how to implement these strategies effectively in your own campaigns. There will be a Q&A segment at the end where you can ask questions directly to the experts. Please ensure that you are on time and ready for an engaging discussion. If you have any specific questions or topics you would like to see covered, please send them to me beforehand. We look forward to seeing you there!"
//       }
//     }
//   }
// ];



// const data = [
//   {
//     name: "Aarav",
//     email: "aarav.sharma@gmail.com",
//     subject: "Meeting Tomorrow at 10 AM for Project Update Discussion",
//     Date: new Date(),
//     emailCategory: "junk",
//     emailBody: {
//       create: {
//         heading:
//           "Meeting Tomorrow at 10 AM for Project Update Discussion with Client Team Members. Please confirm your availability.",
//         content:
//           "This is to inform you that we have scheduled a Project Update Discussion with the Client Team Members tomorrow at 10:00 AM. During this meeting, we will be providing important updates on the project's progress and addressing any questions or concerns from the client’s side. Your presence and input are crucial, as we will be discussing key project milestones, timelines, and next steps. Please confirm your availability for the meeting at your earliest convenience, as we would like to ensure all relevant team members are present to provide a comprehensive overview. Should you have any specific agenda items you’d like to address, kindly let me know ahead of time so we can include them in the discussion. Thank you for your cooperation and prompt confirmation. Looking forward to your participation.",
//       },
//     },
//   },
//   {
//     name: "Ananya",
//     email: "ananya.verma@gmail.com",
//     subject:
//       "Upcoming Staff Training on New Software Implementation Scheduled for Next Week",
//     Date: new Date(),
//     emailCategory: "junk",
//     emailBody: {
//       create: {
//         heading:
//           "Staff Training Session Scheduled for Next Week to Introduce New Software Implementation, Including Features, Benefits, and Hands-On Demonstration for All Team Members",
//         content:
//           "Dear Team, I hope everyone is doing well. We are excited to announce that next week we will be holding a comprehensive training session to introduce the new software we’ll be using across various departments. The training will take place on Monday at 10 AM and will cover the software’s key features, benefits, and how it will streamline our workflows. We will also include a hands-on demonstration, allowing everyone to familiarize themselves with the user interface and tools available. This session is crucial to ensure a smooth transition, and your participation is required. If you have any specific questions or areas of concern about the software, feel free to send them to me in advance, and we will address them during the session. Please confirm your availability for this session as soon as possible. Looking forward to seeing you there!",
//       },
//     },
//   },
//   {
//     name: "Rohan",
//     email: "rohan.patel@gmail.com",
//     subject: "Reminder: Internal Audit Meeting Scheduled for Tomorrow to Discuss Financial Reports and Compliance Issues",
//     Date: new Date(),
//     emailCategory: "junk",
//     emailBody: {
//       create: {
//         heading: "Reminder: Internal Audit Meeting Scheduled for Tomorrow to Review Financial Reports, Compliance Issues, and Finalize Audit Preparations for the Quarter-End Review",
//         content: "Hello Everyone, I hope you are all doing well. This is a reminder that our internal audit meeting is scheduled for tomorrow at 10:00 AM. During this session, we will review the latest financial reports, identify any compliance issues, and discuss any discrepancies that need to be addressed before the quarter-end review. Your insights and feedback on the reports will be extremely valuable, so please ensure you are familiar with the latest data and have any relevant documents ready for discussion. We’ll also allocate time to address any audit concerns and make final preparations for the upcoming audit review. Kindly confirm your availability for the meeting and be sure to attend with all the necessary materials. Thank you!"
//       }
//     }
//   },
//   {
//     name: "Isha",
//     email: "isha.kapoor@outlook.com",
//     subject: "New Marketing Campaign Rollout: Action Plan, Responsibilities, and Key Deliverables for All Stakeholders",
//     Date: new Date(),
//     emailCategory: "junk",
//     emailBody: {
//       create: {
//         heading: "New Marketing Campaign Rollout Scheduled for Next Month: Detailed Action Plan, Assigned Responsibilities, and Key Deliverables for All Stakeholders",
//         content: "Dear Team, I am excited to inform you that the new marketing campaign for next month is almost ready for rollout. The campaign will focus on our brand’s new product launch and will require full team coordination. We’ll be holding a meeting next Tuesday at 2 PM to walk through the detailed action plan, assigned responsibilities, and key deliverables for each stakeholder. We will also discuss the campaign's timeline, creative assets, media strategies, and tracking mechanisms to monitor success. Please ensure that you come prepared to discuss your role in the campaign, any resources you may need, and your deadlines. It’s essential that everyone is aligned as we move forward with this important initiative. Kindly confirm your attendance at the meeting and let me know if you have any questions beforehand."
//       }
//     }
//   },
//   {
//     name: "Karan",
//     email: "karan.iyer@gmail.com",
//     subject: "Client Strategy Session to Discuss Future Directions, Market Trends, and Long-Term Goals",
//     Date: new Date(),
//     emailCategory: "junk",
//     emailBody: {
//       create: {
//         heading: "Client Strategy Session Scheduled for Next Week to Discuss Future Directions, Emerging Market Trends, and Long-Term Goals for Partnership Expansion",
//         content: "Dear Team, We have scheduled a crucial strategy session with the client for next Thursday at 1 PM. During this meeting, we will discuss the client’s long-term goals and explore potential strategies for expanding our partnership. We will also review emerging market trends and assess how they can shape our joint efforts moving forward. It’s essential that all key stakeholders attend this session, as we’ll be formulating strategies that could have a significant impact on both our business and the client’s. Please review any relevant documents and data beforehand, and come prepared to discuss new opportunities and any concerns you may have. Kindly confirm your availability for the session as soon as possible. We are looking forward to a productive conversation."
//       }
//     }
//   },
//   {
//     name: "Priya",
//     email: "priya.mehta@aol.com",
//     subject: "Team-Building Retreat Next Month: Activities, Objectives, and Expectations for the Upcoming Offsite Event",
//     Date: new Date(),
//     emailCategory: "junk",
//     emailBody: {
//       create: {
//         heading: "Team-Building Retreat Scheduled for Next Month: Detailed Agenda, Activities, Objectives, and Expectations for the Upcoming Offsite Event to Strengthen Collaboration and Foster Team Spirit",
//         content: "Hello Team, I’m excited to share that our annual team-building retreat has been scheduled for next month, and it promises to be an exciting and valuable experience. The retreat will be held at a scenic location and will focus on strengthening collaboration, communication, and team spirit. We have a packed agenda of activities designed to challenge our problem-solving skills, improve teamwork, and foster a positive working environment. During the retreat, we will also have time for personal development workshops and relaxation sessions to recharge and build stronger relationships. Your participation and engagement are essential for the success of this event, and we expect all team members to fully participate in the activities. Please keep an eye out for further details, including the schedule and what to bring. Kindly confirm your availability for the retreat and let me know if you have any special requirements."
//       }
//     }
//   },
//   {
//     name: "Neha",
//     email: "neha.reddy@gmail.com",
//     subject: "Team Meeting to Discuss Marketing Strategies for the Upcoming Quarter and Campaign Planning",
//     Date: new Date(),
//     emailCategory: "junk",
//     emailBody: {
//       create: {
//         heading: "Upcoming Team Meeting Scheduled to Discuss Comprehensive Marketing Strategies for the Next Quarter, Review Campaign Performance, and Explore New Opportunities",
//         content: "Hello Team, I hope you're all doing well. We have scheduled an important meeting tomorrow at 11:00 AM where we will discuss the marketing strategies for the upcoming quarter. During this session, we’ll review the performance of our current campaigns and identify areas for improvement. Furthermore, we’ll explore new opportunities and strategies that could help us stay ahead of the competition. This is a crucial meeting for the marketing team as we finalize the roadmap for the next few months. We will also allocate time to discuss new campaign ideas and the potential impact they could have. Please make sure to come prepared with your insights and any data you think might be relevant for our discussion. Kindly confirm your attendance by EOD today, so we can adjust the agenda if necessary. Looking forward to an engaging and productive discussion!"
//       }
//     }
//   },
//   {
//     name: "Dev",
//     email: "dev.chopra@outlook.com",
//     subject: "Scheduled Client Feedback Session to Address Concerns and Provide Updates on Current Projects for Next Week",
//     Date: new Date(),
//     emailCategory: "junk",
//     emailBody: {
//       create: {
//         heading: "Client Feedback Session Scheduled for Monday at 3 PM to Address Questions, Concerns, and Provide Updates on Ongoing Projects with Key Stakeholders",
//         content: "Dear Team, I hope this message finds you well. A feedback session with the client has been scheduled for Monday at 3 PM. This meeting will provide an opportunity for the client to share any questions or concerns regarding the ongoing projects. We will also provide updates on the progress made so far and address any issues that may have come up. It is crucial that all project managers and key team members attend this session, as we need to ensure that we are aligned with the client's expectations and that any gaps are addressed. Please take some time over the weekend to review your respective areas and be prepared with updates. If you have any concerns or topics you would like to add to the agenda, please send them to me by EOD tomorrow. I look forward to a productive session with all of you. Kindly confirm your attendance as soon as possible."
//       }
//     }
//   },
//   {
//     name: "Meera",
//     email: "meera.jain@yahoo.com",
//     subject: "Reminder: Deadline for Quarterly Report Submission Approaches Tomorrow, Please Ensure Timely Submission",
//     Date: new Date(),
//     emailCategory: "junk",
//     emailBody: {
//       create: {
//         heading: "Friendly Reminder: The Deadline for Submitting Your Quarterly Reports is Tomorrow by 5:00 PM; Please Ensure All Reports Are Complete and Submitted on Time",
//         content: "Dear Colleagues, I hope you are all doing well. This is a friendly reminder that the deadline for submitting your quarterly reports is tomorrow at 5:00 PM. As we approach the end of the quarter, it is important that we have all reports in by the specified time to ensure that everything is reviewed and finalized before the board meeting next week. Please make sure that your reports are complete and contain all relevant data, insights, and analysis. If you encounter any issues or foresee any delays, please inform me immediately so we can find a solution. If you need assistance or have any questions regarding the submission process, feel free to reach out. Let’s work together to ensure that all reports are submitted without any issues. Thank you for your cooperation, and I look forward to receiving your completed reports!"
//       }
//     }
//   },
//   {
//     name: "Arjun",
//     email: "arjun.malhotra@icloud.com",
//     subject: "Project Kick-off Meeting on Monday to Discuss Roles, Milestones, and Timeline for the Upcoming Project",
//     Date: new Date(),
//     emailCategory: "junk",
//     emailBody: {
//       create: {
//         heading: "Scheduled Project Kick-off Meeting on Monday at 9 AM to Review Roles, Milestones, Key Deliverables, and the Overall Timeline for the New Project",
//         content: "Hi Team, I am pleased to announce that our project kick-off meeting is scheduled for Monday at 9:00 AM. During this meeting, we will review the project’s goals, roles, key milestones, and the timeline for the first phase of the project. It is important that all team members attend as we will be outlining the responsibilities of each individual and discussing the key deliverables for the next few weeks. We will also allocate time to review any potential risks and challenges we might encounter and how to address them proactively. Please come prepared to ask questions and clarify any points about your role and deliverables. We are eager to begin this project, and your contributions will be crucial for its success. Kindly confirm your attendance at your earliest convenience so we can ensure all team members are present and ready to get started."
//       }
//     }
//   },
//   {
//     name: "Tanya",
//     email: "tanya.agarwal@aol.com",
//     subject: "Upcoming Webinar on Data-Driven Marketing with Insights into SEO, Social Media Metrics, and Analytics Next Thursday at 2 PM",
//     Date: new Date(),
//     emailCategory: "junk",
//     emailBody: {
//       create: {
//         heading: "Reminder and Details for the Upcoming Webinar on Data-Driven Marketing, Covering SEO Optimization, Social Media Metrics, and Advanced Analytics Techniques Scheduled for Next Thursday at 2 PM",
//         content: "Dear Participants, I hope you're all doing great. I’m writing to remind you of our upcoming webinar, ‘Data-Driven Marketing,’ which will take place next Thursday at 2:00 PM. This session will delve into the core strategies and techniques that power data-driven marketing campaigns. We will cover a wide range of topics, including the latest SEO optimization tactics, how to track and analyze social media metrics, and leveraging advanced analytics tools to improve marketing ROI. Additionally, we will provide practical insights and case studies to help you understand how to implement these strategies effectively in your own campaigns. There will be a Q&A segment at the end where you can ask questions directly to the experts. Please ensure that you are on time and ready for an engaging discussion. If you have any specific questions or topics you would like to see covered, please send them to me beforehand. We look forward to seeing you there!"
//       }
//     }
//   }
// ];
const data = [
  {
    name: "Amitabh",
    email: "amitabh.rana@gmail.com",
    subject: "Sent: Weekly Project Progress Report - Week 32",
    Date: new Date(),
    emailCategory: "sent",
    emailBody: {
      create: {
        heading: "Project Progress Report - Week 32: Sent to Stakeholders",
        content:
          "Dear Team, I have attached the project progress report for Week 32. The report includes completed tasks, current blockers, and the revised project timeline. Please review the document and let me know if there are any discrepancies or feedback. Looking forward to your thoughts.",
      },
    },
  },
  {
    name: "Bhavya",
    email: "bhavya.kulkarni@gmail.com",
    subject: "Sent: Onboarding Documents for New Joiners – August 2025 Batch",
    Date: new Date(),
    emailCategory: "sent",
    emailBody: {
      create: {
        heading: "Shared Onboarding Package for August 2025 Joiners",
        content:
          "Hi HR Team, Please find attached the onboarding documents for our new batch of joiners scheduled to start on August 14th. This includes employee forms, policies, and welcome kit details. Let me know if any corrections are needed.",
      },
    },
  },
  {
    name: "Chirag",
    email: "chirag.sen@outlook.com",
    subject: "Sent: Final Design Assets for Website Revamp",
    Date: new Date(),
    emailCategory: "sent",
    emailBody: {
      create: {
        heading: "Website Design Assets Shared – Final Approved Version",
        content:
          "Hello Team, I’ve sent over the final batch of approved design assets for the upcoming website revamp. Please check the shared drive folder under 'Final Deliverables'. Let me know if you face any issues accessing the files.",
      },
    },
  },
  {
    name: "Divya",
    email: "divya.joshi@yahoo.com",
    subject: "Sent: Follow-Up Email to Client Regarding SLA Agreement",
    Date: new Date(),
    emailCategory: "sent",
    emailBody: {
      create: {
        heading: "SLA Agreement Follow-Up Sent to Client",
        content:
          "Hi Team, I’ve followed up with the client regarding the pending SLA agreement. I've shared our proposed terms again and requested confirmation by this Friday. I’ll keep you posted on their response.",
      },
    },
  },
  {
    name: "Eshan",
    email: "eshan.kumar@aol.com",
    subject: "Sent: Invitation to Annual Company Meet-Up 2025",
    Date: new Date(),
    emailCategory: "sent",
    emailBody: {
      create: {
        heading: "Annual Meet-Up 2025 Invitation Sent",
        content:
          "Dear All, The invitation for our Annual Company Meet-Up 2025 has been sent to all internal and external stakeholders. The event is scheduled for September 21st at The Taj Palace, Delhi. Please ensure RSVPs are tracked by the Admin team.",
      },
    },
  },
  {
    name: "Farah",
    email: "farah.ansari@gmail.com",
    subject: "Sent: Monthly Newsletter – August Edition",
    Date: new Date(),
    emailCategory: "sent",
    emailBody: {
      create: {
        heading: "Company Newsletter – August 2025 Sent to Subscribers",
        content:
          "Hi Marketing Team, The August edition of our monthly newsletter has been successfully sent to all subscribers. Highlights include product updates, employee spotlights, and upcoming events. Analytics will be shared by EOD Friday.",
      },
    },
  },
  {
    name: "Gaurav",
    email: "gaurav.menon@gmail.com",
    subject: "Sent: Invoice #INV-8725 for July Services",
    Date: new Date(),
    emailCategory: "sent",
    emailBody: {
      create: {
        heading: "Invoice #INV-8725 Sent to Client – Payment Due August 20",
        content:
          "Hello Finance Team, The invoice for services rendered in July (Invoice #INV-8725) has been sent to the client. Total amount: ₹1,45,000. Kindly monitor the payment and update the ledger once cleared.",
      },
    },
  },
  {
    name: "Himani",
    email: "himani.rathore@outlook.com",
    subject: "Sent: Minutes of Meeting – Product Strategy Review",
    Date: new Date(),
    emailCategory: "sent",
    emailBody: {
      create: {
        heading: "Product Strategy Meeting Summary Sent to Team",
        content:
          "Dear All, Please find the MoM for yesterday's Product Strategy Review meeting attached. Key decisions include timeline adjustments and feature reprioritization. Action items are listed on the last page. Let’s ensure timely follow-up.",
      },
    },
  },
  {
    name: "Ishaan",
    email: "ishaan.bhatt@gmail.com",
    subject: "Sent: Resignation Acceptance Letter – Rohit Tiwari",
    Date: new Date(),
    emailCategory: "sent",
    emailBody: {
      create: {
        heading: "Resignation Acceptance Sent – Rohit Tiwari (ID: EMP9321)",
        content:
          "Hi HR, The resignation acceptance letter for Rohit Tiwari has been sent. His last working day is September 5th. Please begin the offboarding process and arrange for exit interview scheduling.",
      },
    },
  },
  {
    name: "Jaya",
    email: "jaya.nair@gmail.com",
    subject: "Sent: Weekly IT Maintenance Notification – August 12, 2025",
    Date: new Date(),
    emailCategory: "sent",
    emailBody: {
      create: {
        heading: "Scheduled IT Maintenance – Notification Sent",
        content:
          "Hi Everyone, The weekly IT maintenance notification has been sent. Systems will be temporarily unavailable on Tuesday, August 12th from 10:00 PM to 12:00 AM IST. Please ensure all important work is saved before that time.",
      },
    },
  },
  {
    name: "Kabir",
    email: "kabir.das@icloud.com",
    subject: "Sent: Q2 Performance Review Summary to Department Heads",
    Date: new Date(),
    emailCategory: "sent",
    emailBody: {
      create: {
        heading: "Department-Wise Q2 Performance Summary Shared",
        content:
          "Dear Leadership Team, The Q2 performance review summary has been sent to all department heads. Highlights include revenue growth of 12%, improved retention, and reduced turnaround times. Let’s align for Q3 planning.",
      },
    },
  },
  {
    name: "Lavanya",
    email: "lavanya.singh@gmail.com",
    subject: "Sent: Travel Itinerary for Bangalore Tech Expo 2025",
    Date: new Date(),
    emailCategory: "sent",
    emailBody: {
      create: {
        heading: "Bangalore Tech Expo 2025 – Team Travel Itinerary Sent",
        content:
          "Hi Attendees, I’ve emailed the finalized travel itinerary for the Bangalore Tech Expo. Flights, hotel bookings, and expo passes are confirmed. Please acknowledge receipt and contact me for any changes.",
      },
    },
  }
];

async function main() {
  for (const item of data) {
    await prisma.email.create({
      data: {
        name: item.name,
        email: item.email,
        subject: item.subject,
        Date: new Date(item.Date),
        emailCategory: item.emailCategory,
        emailBody: {
          create: {
            heading: item.emailBody.create.heading,
            content: item.emailBody.create.content,
          },
        },
      },
    });
  }
}

main();
