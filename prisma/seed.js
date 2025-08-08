import { PrismaClient } from "../app/generated/prisma/client.js";
const prisma = new PrismaClient();
const data = [
  {
    name: "Gourav",
    email: "gouravthakur123@gmail.com",
    subject: "Meeting Tomorrow at 10 AM for Project Update Discussion",
    Date: new Date(),
    emailCategory: "message",
    emailBody: {
      create: {
        heading:
          "Meeting Tomorrow at 10 AM for Project Update Discussion with Client Team Members. Please confirm your availability.",
        content:
          "This is to inform you that we have scheduled a Project Update Discussion with the Client Team Members tomorrow at 10:00 AM. During this meeting, we will be providing important updates on the project's progress and addressing any questions or concerns from the client’s side. Your presence and input are crucial, as we will be discussing key project milestones, timelines, and next steps. Please confirm your availability for the meeting at your earliest convenience, as we would like to ensure all relevant team members are present to provide a comprehensive overview. Should you have any specific agenda items you’d like to address, kindly let me know ahead of time so we can include them in the discussion. Thank you for your cooperation and prompt confirmation. Looking forward to your participation.",
      },
    },
  },
  {
    name: "Mia",
    email: "mia.wilson77@gmail.com",
    subject:
      "Upcoming Staff Training on New Software Implementation Scheduled for Next Week",
    Date: "2025-08-08T09:00:00Z",
    emailCategory: "message",
    emailBody: {
      create: {
        heading:
          "Staff Training Session Scheduled for Next Week to Introduce New Software Implementation, Including Features, Benefits, and Hands-On Demonstration for All Team Members",
        content:
          "Dear Team, I hope everyone is doing well. We are excited to announce that next week we will be holding a comprehensive training session to introduce the new software we’ll be using across various departments. The training will take place on Monday at 10 AM and will cover the software’s key features, benefits, and how it will streamline our workflows. We will also include a hands-on demonstration, allowing everyone to familiarize themselves with the user interface and tools available. This session is crucial to ensure a smooth transition, and your participation is required. If you have any specific questions or areas of concern about the software, feel free to send them to me in advance, and we will address them during the session. Please confirm your availability for this session as soon as possible. Looking forward to seeing you there!",
      },
    },
  },
  {
    "name": "James",
    "email": "james.thompson83@gmail.com",
    "subject": "Reminder: Internal Audit Meeting Scheduled for Tomorrow to Discuss Financial Reports and Compliance Issues",
    "Date": "2025-08-08T16:00:00Z",
    "emailCategory": "reminder",
    "emailBody": {
      "create": {
        "heading": "Reminder: Internal Audit Meeting Scheduled for Tomorrow to Review Financial Reports, Compliance Issues, and Finalize Audit Preparations for the Quarter-End Review",
        "content": "Hello Everyone, I hope you are all doing well. This is a reminder that our internal audit meeting is scheduled for tomorrow at 10:00 AM. During this session, we will review the latest financial reports, identify any compliance issues, and discuss any discrepancies that need to be addressed before the quarter-end review. Your insights and feedback on the reports will be extremely valuable, so please ensure you are familiar with the latest data and have any relevant documents ready for discussion. We’ll also allocate time to address any audit concerns and make final preparations for the upcoming audit review. Kindly confirm your availability for the meeting and be sure to attend with all the necessary materials. Thank you!"
      }
    }
  },
  {
    "name": "Ethan",
    "email": "ethan.daniels55@outlook.com",
    "subject": "New Marketing Campaign Rollout: Action Plan, Responsibilities, and Key Deliverables for All Stakeholders",
    "Date": "2025-08-08T11:30:00Z",
    "emailCategory": "message",
    "emailBody": {
      "create": {
        "heading": "New Marketing Campaign Rollout Scheduled for Next Month: Detailed Action Plan, Assigned Responsibilities, and Key Deliverables for All Stakeholders",
        "content": "Dear Team, I am excited to inform you that the new marketing campaign for next month is almost ready for rollout. The campaign will focus on our brand’s new product launch and will require full team coordination. We’ll be holding a meeting next Tuesday at 2 PM to walk through the detailed action plan, assigned responsibilities, and key deliverables for each stakeholder. We will also discuss the campaign's timeline, creative assets, media strategies, and tracking mechanisms to monitor success. Please ensure that you come prepared to discuss your role in the campaign, any resources you may need, and your deadlines. It’s essential that everyone is aligned as we move forward with this important initiative. Kindly confirm your attendance at the meeting and let me know if you have any questions beforehand."
      }
    }
  },
  {
    "name": "Zoe",
    "email": "zoe.roberts99@gmail.com",
    "subject": "Client Strategy Session to Discuss Future Directions, Market Trends, and Long-Term Goals",
    "Date": "2025-08-08T13:00:00Z",
    "emailCategory": "message",
    "emailBody": {
      "create": {
        "heading": "Client Strategy Session Scheduled for Next Week to Discuss Future Directions, Emerging Market Trends, and Long-Term Goals for Partnership Expansion",
        "content": "Dear Team, We have scheduled a crucial strategy session with the client for next Thursday at 1 PM. During this meeting, we will discuss the client’s long-term goals and explore potential strategies for expanding our partnership. We will also review emerging market trends and assess how they can shape our joint efforts moving forward. It’s essential that all key stakeholders attend this session, as we’ll be formulating strategies that could have a significant impact on both our business and the client’s. Please review any relevant documents and data beforehand, and come prepared to discuss new opportunities and any concerns you may have. Kindly confirm your availability for the session as soon as possible. We are looking forward to a productive conversation."
      }
    }
  },
  {
    "name": "Charlotte",
    "email": "charlotte.morris22@aol.com",
    "subject": "Team-Building Retreat Next Month: Activities, Objectives, and Expectations for the Upcoming Offsite Event",
    "Date": "2025-08-08T17:00:00Z",
    "emailCategory": "update",
    "emailBody": {
      "create": {
        "heading": "Team-Building Retreat Scheduled for Next Month: Detailed Agenda, Activities, Objectives, and Expectations for the Upcoming Offsite Event to Strengthen Collaboration and Foster Team Spirit",
        "content": "Hello Team, I’m excited to share that our annual team-building retreat has been scheduled for next month, and it promises to be an exciting and valuable experience. The retreat will be held at a scenic location and will focus on strengthening collaboration, communication, and team spirit. We have a packed agenda of activities designed to challenge our problem-solving skills, improve teamwork, and foster a positive working environment. During the retreat, we will also have time for personal development workshops and relaxation sessions to recharge and build stronger relationships. Your participation and engagement are essential for the success of this event, and we expect all team members to fully participate in the activities. Please keep an eye out for further details, including the schedule and what to bring. Kindly confirm your availability for the retreat and let me know if you have any special requirements."
      }
    }
  },
  {
    "name": "Sophia",
    "email": "sophia.martin34@gmail.com",
    "subject": "Team Meeting to Discuss Marketing Strategies for the Upcoming Quarter and Campaign Planning",
    "Date": "2025-08-08T10:00:00Z",
    "emailCategory": "message",
    "emailBody": {
      "create": {
        "heading": "Upcoming Team Meeting Scheduled to Discuss Comprehensive Marketing Strategies for the Next Quarter, Review Campaign Performance, and Explore New Opportunities",
        "content": "Hello Team, I hope you're all doing well. We have scheduled an important meeting tomorrow at 11:00 AM where we will discuss the marketing strategies for the upcoming quarter. During this session, we’ll review the performance of our current campaigns and identify areas for improvement. Furthermore, we’ll explore new opportunities and strategies that could help us stay ahead of the competition. This is a crucial meeting for the marketing team as we finalize the roadmap for the next few months. We will also allocate time to discuss new campaign ideas and the potential impact they could have. Please make sure to come prepared with your insights and any data you think might be relevant for our discussion. Kindly confirm your attendance by EOD today, so we can adjust the agenda if necessary. Looking forward to an engaging and productive discussion!"
      }
    }
  },
  {
    "name": "Liam",
    "email": "liam.davis91@outlook.com",
    "subject": "Scheduled Client Feedback Session to Address Concerns and Provide Updates on Current Projects for Next Week",
    "Date": "2025-08-08T15:00:00Z",
    "emailCategory": "message",
    "emailBody": {
      "create": {
        "heading": "Client Feedback Session Scheduled for Monday at 3 PM to Address Questions, Concerns, and Provide Updates on Ongoing Projects with Key Stakeholders",
        "content": "Dear Team, I hope this message finds you well. A feedback session with the client has been scheduled for Monday at 3 PM. This meeting will provide an opportunity for the client to share any questions or concerns regarding the ongoing projects. We will also provide updates on the progress made so far and address any issues that may have come up. It is crucial that all project managers and key team members attend this session, as we need to ensure that we are aligned with the client's expectations and that any gaps are addressed. Please take some time over the weekend to review your respective areas and be prepared with updates. If you have any concerns or topics you would like to add to the agenda, please send them to me by EOD tomorrow. I look forward to a productive session with all of you. Kindly confirm your attendance as soon as possible."
      }
    }
  },
  {
    "name": "Emma",
    "email": "emma.jones55@yahoo.com",
    "subject": "Reminder: Deadline for Quarterly Report Submission Approaches Tomorrow, Please Ensure Timely Submission",
    "Date": "2025-08-08T08:00:00Z",
    "emailCategory": "reminder",
    "emailBody": {
      "create": {
        "heading": "Friendly Reminder: The Deadline for Submitting Your Quarterly Reports is Tomorrow by 5:00 PM; Please Ensure All Reports Are Complete and Submitted on Time",
        "content": "Dear Colleagues, I hope you are all doing well. This is a friendly reminder that the deadline for submitting your quarterly reports is tomorrow at 5:00 PM. As we approach the end of the quarter, it is important that we have all reports in by the specified time to ensure that everything is reviewed and finalized before the board meeting next week. Please make sure that your reports are complete and contain all relevant data, insights, and analysis. If you encounter any issues or foresee any delays, please inform me immediately so we can find a solution. If you need assistance or have any questions regarding the submission process, feel free to reach out. Let’s work together to ensure that all reports are submitted without any issues. Thank you for your cooperation, and I look forward to receiving your completed reports!"
      }
    }
  },
  {
    "name": "Oliver",
    "email": "oliver.black@icloud.com",
    "subject": "Project Kick-off Meeting on Monday to Discuss Roles, Milestones, and Timeline for the Upcoming Project",
    "Date": "2025-08-08T12:00:00Z",
    "emailCategory": "message",
    "emailBody": {
      "create": {
        "heading": "Scheduled Project Kick-off Meeting on Monday at 9 AM to Review Roles, Milestones, Key Deliverables, and the Overall Timeline for the New Project",
        "content": "Hi Team, I am pleased to announce that our project kick-off meeting is scheduled for Monday at 9:00 AM. During this meeting, we will review the project’s goals, roles, key milestones, and the timeline for the first phase of the project. It is important that all team members attend as we will be outlining the responsibilities of each individual and discussing the key deliverables for the next few weeks. We will also allocate time to review any potential risks and challenges we might encounter and how to address them proactively. Please come prepared to ask questions and clarify any points about your role and deliverables. We are eager to begin this project, and your contributions will be crucial for its success. Kindly confirm your attendance at your earliest convenience so we can ensure all team members are present and ready to get started."
      }
    }
  },
  {
    "name": "Ava",
    "email": "ava.smith@aol.com",
    "subject": "Upcoming Webinar on Data-Driven Marketing with Insights into SEO, Social Media Metrics, and Analytics Next Thursday at 2 PM",
    "Date": "2025-08-08T14:00:00Z",
    "emailCategory": "update",
    "emailBody": {
      "create": {
        "heading": "Reminder and Details for the Upcoming Webinar on Data-Driven Marketing, Covering SEO Optimization, Social Media Metrics, and Advanced Analytics Techniques Scheduled for Next Thursday at 2 PM",
        "content": "Dear Participants, I hope you're all doing great. I’m writing to remind you of our upcoming webinar, ‘Data-Driven Marketing,’ which will take place next Thursday at 2:00 PM. This session will delve into the core strategies and techniques that power data-driven marketing campaigns. We will cover a wide range of topics, including the latest SEO optimization tactics, how to track and analyze social media metrics, and leveraging advanced analytics tools to improve marketing ROI. Additionally, we will provide practical insights and case studies to help you understand how to implement these strategies effectively in your own campaigns. There will be a Q&A segment at the end where you can ask questions directly to the experts. Please ensure that you are on time and ready for an engaging discussion. If you have any specific questions or topics you would like to see covered, please send them to me beforehand. We look forward to seeing you there!"
      }
    }
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
