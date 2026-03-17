export const productivityAssistantApp = {
  id: "productivity-assistant-app",
  title: "Livsplaneraren",
  category: "Frontend",
  thumbnail: "/images/livsplaneraren-thumbnail.png",
  cover: "/images/livsplaneraren.png",
  excerpt: "A productivity assistant application featuring task management, habit tracking, and event planning, with user authentication",
  summary: "A productivity assistant application featuring task management, habit tracking, and event planning, with user authentication.",
  type: "Group Project (Semester 1)",
  client: "Educational Project",
  duration: "2 weeks (Dec 2025)",
  skills: [
    "Agile Methodology (SCRUM, Kanban)",
    "Git-flow & Collaboration",
    "State Management",
    "Asynchronous Data Fetching"
  ],
  tools: ["React", "JavaScript", "CSS3", "localStorage", "REST API", "Trello", "Git & GitHub", "Figma"],
  tags: ["React", "CSS", "HTML", "REST API"],
  github: "https://github.com/desireestrand/productivity-assistant-app",
  liveDemo: "https://desireestrand.github.io/productivity-assistant-app/",
  blocks: [
    {
      type: "h1",
      content: "Concept & Features",
    },
    {
      type: "text",
      content: "Livsplaneraren (The Life Planner) is a web application designed to streamline daily routines. Developed in a team of three using Agile methodologies such as SCRUM and Kanban, the application offers a personalized dashboard where users can manage three core pillars of life: Todos, Habits, and Events.",
    },
    {
      type: "list",
      style: "ul",
      items: [
        "Secure authentication with a persistent login system using localStorage and sessionStorage, allowing multiple users to maintain unique profiles.",
        "The Event Planner; a module for scheduling events, featuring chronological sorting and real-time updates of upcoming and past events.",
        "Task Manager & Habit Tracker; tools to track streaks and manage categorized tasks with time estimates and deadlines.",
        "Upon login, users are greeted with a personal dashboard, completed with a summary of tasks, habits and events, and an inspirational quote fetched from an external API.",
      ],
    },
    {
      type: "h1",
      content: "Technical Implementation",
    },
    {
      type: "text",
      content: "I was primarily responsible for the Event Planner module and the application's authentication architecture. I implemented a centralized EventContext with React Context to handle global state management, ensuring that events are synced across the dashboard and the planner page in real-time.",
    },
    {
      type: "text",
      content: "To manage chronological sorting, I developed logic that compares event timestamps against a live now state, which updates every second. This allows the UI to automatically move events from upcoming to past events as time passes. I also implemented form validation to ensure that end-dates can never be set before start-dates.",
    },
    {
      type: "text",
      content: "We followed a strict Git-flow with separate feature branches and a shared developer branch for peer testing. Our workflow was managed in Trello, using a system of labels for time estimation and priority, which ensured we met all requirements within our two sprints.",
    },
    {
      type: "h1",
      content: "Lessons Learned",
    },
    {
      type: "text",
      content: "Working in a high-intensity agile team taught me the vital importance of communication. I also gained experience in managing complex states across multiple components and handling merge conflicts in a shared codebase. Key takeaways include:",
    },
    {
      type: "list",
      style: "ul",
      items: [
        "Agile coordination; how to lead daily standups and use retrospectives to improve team velocity between sprints.",
        "Mastering React Context to provide a seamless user session across the entire Single Page Application (SPA).",
        "Collaborative Git; navigating complex branching strategies and the importance of frequent pulls to minimize conflicts.",
        "Realizing how pre-defined design decisions (like border-radius and hover states) are crucial for visual consistency when multiple developers style different modules.",
      ],
    },
  ],
};