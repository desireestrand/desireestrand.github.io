export const blogPlatform = {
  id: "blog-platform",
  title: "Blog Platform",
  category: "Frontend",
  thumbnail: "/images/blog-platform-thumbnail.png",
  cover: "/images/blogg.png",
  excerpt:
    "A full-featured Single Page Application (SPA) blog platform where users can publish, interact with, and moderate content through a reactive interface",
  type: "Individual Project (Semester 1)",
  client: "Educational Project",
  duration: "2 weeks (Sep - Oct 2025)",
  skills: [
    "Vanilla JavaScript",
    "Dynamic DOM Manipulation",
    "Data Persistence (Local Storage)",
    "Event Handling",
    "Responsive Design"
  ],
  tools: ["JavaScript", "HTML5", "CSS3"],
  tags: ["JavaScript", "HTML", "CSS", "SPA", "CRUD"],
  github: "https://github.com/desireestrand/blog-platform",
  liveDemo: "https://desireestrand.github.io/blog-platform/",
  blocks: [
    {
      type: "h1",
      content: "Concept & Features",
    },
    {
      type: "text",
      content:
        "The goal of this project was to build a dynamic blog platform that functions as a Single Page Application. Users can share their thoughts with the world through a clean, 'retro-modern' interface that handles everything from content creation to community interaction without a single page refresh.",
    },
    {
      type: "list",
      style: "ul",
      items: [
        "Real-time Publishing: Create and display blog posts instantly using a controlled form and DOM injection.",
        "Community Interaction: A fully functional comment section under every post for dynamic discussions.",
        "Reactions Engine: A custom-built 'Like/Dislike' system with logic to prevent multiple contradictory reactions.",
        "Content Moderation: Built-in tools for users to delete both posts and individual comments with confirmation prompts.",
        "Persistent Storage: All data — posts, comments, and likes — is synchronized with 'localStorage' to ensure nothing is lost on reload.",
      ],
    },
    {
      type: "h1",
      content: "Technical Implementation",
    },
    {
      type: "text",
      content:
        "I chose a modular approach to handle the complexity of a nested data structure (posts containing arrays of comments). Every post is rendered as a unique object with a timestamp-based ID, which allows for precise targeting during deletion and updates.",
    },
    
    {
      type: "text",
      content:
        "One of the key challenges was managing the 'reaction' logic. I implemented a dataset-driven state on the buttons to toggle between active and disabled states, ensuring that a user can't 'like' and 'dislike' at the same time. I also built a robust date-formatter to give the platform a professional feel with formatted 'dd-mm-yyyy @ hh:mm' timestamps.",
    },
    {
      type: "h1",
      content: "Lessons Learned",
    },
    {
      type: "text",
      content:
        "This project deepened my understanding of how to bridge the gap between user input and persistent data storage. It taught me the importance of error handling when parsing JSON and how to maintain a clean DOM by using 'prepend' to keep the latest content at the top.",
    },
    {
      type: "list",
      style: "ul",
      items: [
        "Nested Data Management: Mastering how to update specific objects inside an array in localStorage when a new comment is added.",
        "UX Feedback: Learning how to use 'empty state' messages (e.g., 'No posts yet...') to guide the user when the platform is fresh.",
        "Event Delegation vs Direct Listeners: Balancing when to add listeners during rendering versus using delegation for performance.",
        "Mobile-First CSS: Ensuring that long blog content and multi-level comment threads remain readable and clickable on small touchscreens.",
      ],
    },
  ],
};