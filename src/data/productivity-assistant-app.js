export const productivityAssistantApp = {
  id: "productivity-assistant-app",
  title: "Livsplaneraren",
  category: "Frontend",
  thumbnail: "/images/livsplaneraren.png",
  excerpt:
    "A comprehensive React-based productivity suite featuring task management, habit tracking, and event planning with persistent user authentication.",
  type: "Group Project (Semester 1)",
  client: "Educational Project",
  duration: "2 weeks (Dec 2025)",
  skills: [
    "React Context API",
    "Agile Methodology (SCRUM)",
    "Git-flow & Collaboration",
    "State Management",
    "Asynchronous Data Fetching"
  ],
  tools: ["React", "JavaScript", "CSS", "REST API", "Trello", "GitHub", "Figma", "localStorage"],
  tags: ["React", "CSS", "HTML", "Agile"],
  github: "https://github.com/desireestrand/productivity-assistant-app",
  liveDemo: "https://desireestrand.github.io/productivity-assistant-app/",
  blocks: [
    {
      type: "h1",
      content: "Concept & Features",
    },
    {
      type: "text",
      content:
        "'Livsplaneraren' (The Life Planner) is a full-scale web application designed to streamline daily routines. Developed in a team of three using Agile methodologies, the app offers a personalized dashboard where users can manage three core pillars of life: Todos, Habits, and Events.",
    },
    {
      type: "list",
      style: "ul",
      items: [
        "Secure Authentication: A persistent login system using localStorage and sessionStorage, allowing multiple users to maintain unique profiles.",
        "Event Planner: A sophisticated module for scheduling, featuring chronological sorting and real-time updates of upcoming vs. past events.",
        "Habit Tracker & Todo Suite: Tools to track streaks and manage categorized tasks with time estimates and deadlines.",
        "Dynamic Dashboard: Upon login, users are greeted with a personalized summary and an inspirational quote fetched from an external API.",
      ],
    },
    {
      type: "h1",
      content: "Technical Implementation",
    },
    {
      type: "text",
      content:
        "I was primarily responsible for the Event Planner module and the application's Authentication architecture. I implemented a centralized 'EventContext' to handle global state management, ensuring that events are synced across the dashboard and the planner page in real-time.",
    },
    
    {
      type: "text",
      content:
        "To manage chronological sorting, I developed logic that compares event timestamps against a live 'now' state, which updates every second. This allows the UI to automatically move events from 'Upcoming' to 'Past' as time passes. I also implemented robust form validation to ensure that end-dates can never be set before start-dates.",
    },
    {
      type: "text",
      content:
        "We followed a strict Git-flow with separate feature branches and a shared 'developer' branch for peer testing. Our workflow was managed in Trello, using a system of labels for time estimation and priority, which ensured we met all requirements within our two sprints.",
    },
    
    {
      type: "h1",
      content: "Lessons Learned",
    },
    {
      type: "text",
      content:
        "Working in a high-intensity agile team taught me the vital importance of communication and shared design tokens. I gained deep experience in managing complex state across multiple components and handling merge conflicts in a shared codebase.",
    },
    {
      type: "list",
      style: "ul",
      items: [
        "Agile Coordination: How to lead daily standups and use retrospectives to improve team velocity between sprints.",
        "State Lifting & Context: Mastering the React Context API to provide a seamless user session across the entire SPA.",
        "Collaborative Git: Navigating complex branching strategies and the importance of frequent pulls to minimize conflicts.",
        "Visual Consistency: Realizing how pre-defined design decisions (like border-radius and hover states) are crucial when multiple developers style different modules.",
      ],
    },
  ],
};