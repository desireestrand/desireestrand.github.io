export const quizApp = {
  id: "quiz-app",
  title: "Geekqwizz",
  category: "Frontend",
  thumbnail: "/images/quiz-thumbnail.png",
  cover: "/images/quiz.png",
  excerpt: "A retro-style quiz game featuring category filtering, a timed challenge system, and stored high scores",
  summary: "A retro-style quiz game featuring category filtering, a timed challenge system, and stored high scores.",
  type: "Group Project (Semester 1)",
  client: "Educational Project",
  duration: "2 weeks (Sep - Oct 2025)",
  skills: [
    "DOM Manipulation",
    "Data Persistence",
    "State Management",
    "Responsive Design",
  ],
  tools: ["HTML5", "CSS3", "JavaScript", "localStorage", "Git & GitHub"],
  tags: ["JavaScript", "HTML", "CSS", "SPA"],
  github: "https://github.com/desireestrand/quiz-app",
  liveDemo: "https://desireestrand.github.io/quiz-app/",
  blocks: [
    {
      type: "h1",
      content: "Concept & Features",
    },
    {
      type: "text",
      content: "Geekqwizz is a retro-themed quiz application where the entire experience — from the animated intro to the final high score — is managed dynamically on a single page. Built as a group project, the focus was on mastering JavaScript's ability to manipulate the DOM and manage application states without page reloads.",
    },
    {
      type: "list",
      style: "ul",
      items: [
        "Users choose between two categories, triggering a real-time, dynamic filter of the question data.",
        "To ensure a fair game, a shuffle algorithm randomizes the answer order for every question. This prevents users from memorizing button positions and makes the quizzes replayable.",
        "Each question includes a 20-second countdown timer, increasing the difficulty and engagement.",
        "Instant feedback; buttons change state (correct/wrong) immediately upon selection, and a unique sound effect plays if a user fails to answer before the timeout.",
        "Uses custom CSS fade-in/fade-out classes combined with JavaScript timeouts to create smooth transitions between game states.",
        "High scores are saved using localStorage, allowing users to track their personal max score over time.",
        "A mobile-first, responsive design ensuring accessibility across all devices.",
      ],
    },
    {
      type: "h1",
      content: "Technical Implementation",
    },
    {
      type: "text",
      content: "The core of Geekqwizz is a custom-built rendering engine in Vanilla JavaScript. Instead of static HTML, the app uses document.createElement and replaceChildren to reconstruct the UI dynamically. This ensures a true Single Page Application (SPA) feel.",
    },
    {
      type: "text",
      content: "My primary focus in this project was architecting the category selection logic and the scoring system. I developed the filtering engine that identifies which questions to load based on the user's choice, ensuring that the application remains scalable even if new categories are added.",
    },
    {
      type: "text",
      content: "I built the scoring system using a combination of local state variables and localStorage. When a quiz is completed, the logic compares the current session's score against the stored high score. If a new record is set, the system updates localStorage and triggers a feedback message for the user.",
    },
    {
      type: "h1",
      content: "Lessons Learned",
    },
    {
      type: "text",
      content: "This project was a deep dive into the event loop and state management. Managing a timer that needs to be cleared and reset for every question, while simultaneously handling user clicks and animations, required high attention to detail. Key takeaways include:",
    },
    {
      type: "list",
      style: "ul",
      items: [
        "Managing intervals; understanding the importance of clearing intervals to prevent memory leaks and overlapping timers.",
        "Mastering the use of setTimeout to sync CSS animations with JavaScript logic, ensuring elements don't disappear before their animations finish.",
        "Using a centralized array of objects made it easy to count and filter questions per category dynamically, and allows for future scaling.",
      ],
    },
  ],
};
