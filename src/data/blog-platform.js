export const blogPlatform = {
  id: "blog-platform",
  title: "Blog Platform",
  category: "Frontend",
  thumbnail: "/images/blog-platform-thumbnail.png",
  cover: "/images/blogg.png",
  excerpt: "A blog platform where users can publish, interact with, and moderate content through a reactive interface",
  summary: "A blog platform where users can publish, interact with, and moderate content through a reactive interface.",
  type: "Individual Project (Semester 1)",
  client: "Educational Project",
  duration: "2 weeks (Sep - Oct 2025)",
  skills: [
    "DOM Manipulation",
    "Data Persistence",
    "Event Handling",
    "Responsive Design"
  ],
  tools: ["JavaScript", "HTML5", "CSS3", "localStorage"],
  tags: ["JavaScript", "HTML", "CSS", "SPA"],
  github: "https://github.com/desireestrand/blog-platform",
  liveDemo: "https://desireestrand.github.io/blog-platform/",
  blocks: [
    {
      type: "h1",
      content: "Concept & Features",
    },
    {
      type: "text",
      content: "The goal of this project was to build a dynamic, Single Page Application (SPA) blog platform. Users can share their thoughts through a simple interface that handles content creation, community interaction and moderation in real-time without a single page refresh.",
    },
    {
      type: "list",
      style: "ul",
      items: [
        "Create, publish and display blog posts instantly using controlled forms and dynamic DOM injection.",
        "A fully functional nested comment section for every post to facilitate community interaction.",
        "A custom-built reaction system (Like/Dislike) with built-in logic to prevent multiple or contradictory reactions.",
        "Tools for users to moderate content; delete both posts and individual comments, protected by confirmation prompts to prevent accidental data loss.",
        "All data — posts, comments, and likes — is synchronized with localStorage to ensure nothing is lost upon reload.",
      ],
    },
    {
      type: "h1",
      content: "Technical Implementation",
    },
    {
      type: "text",
      content: "I adopted a modular approach to manage the complexity of a nested data structures (posts containing arrays of comments). Every post is treated as a unique object with a timestamp-based ID, allowing for precise targeting during updates or deletions. To keep the UI fresh, I utilized prepend methods to ensure that the latest content always appears at the top.",
    },
    {
      type: "text",
      content: "One of the main challenges was the reaction logic. I implemented a dataset-driven state on the buttons to toggle between active and disabled states. This ensures that a user can't like and dislike simultaneously."
     },
     {
      type: "text",
      content: "To handle nested data, I developed logic to target specific objects within arrays in localStorage, ensuring that adding a comment to one post wouldn't affect the state of another."
    },
    {
      type: "text",
      content: "I also took a creative risk by implementing a monochrome dark-mode. While aware of the UX challenges with monochrome designs, it was an insightful experiment in creating depth, hierarchy, and clickable elements using only shades of a single color.",
    },
    {
      type: "h1",
      content: "Lessons Learned",
    },
    {
      type: "text",
      content: "This project deepened my understanding of bridging the gap between user input and persistent local storage. Key takeaways include:",
    },
    {
      type: "list",
      style: "ul",
      items: [
        "Mastering how to update specific nested objects within a JSON structure in localStorage.",
        "Using empty state messages to guide users when the platform contains no posts.",
        "Learning when to attach event listeners during rendering versus using event delegation to maintain performance as the DOM grows.",
        "Building custom tools, such as a date-formatter, to give the platform a professional feel.",
      ],
    },
  ],
};