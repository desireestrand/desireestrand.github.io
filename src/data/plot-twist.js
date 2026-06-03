export const plotTwist = {
  id: "plot-twist",
  title: "Plot Twist",
  category: "Backend",
  thumbnail: "/images/plot-twist-thumbnail.gif",
  cover: "/images/plot-twist.png",
  excerpt: "A hyper-local plant sharing and trading platform utilizing an interactive map and a custom handshake-based transaction logic",
  summary: "Plot Twist is a hyper-local web application designed for neighbors to share and trade plant cuttings. The app replaces traditional storefronts with an interactive map, dynamic trade statuses and secure user authentication, enabling communities to grow together.",
  type: "Group Project (Semester 2)",
  client: "Educational Project",
  duration: "4 weeks (March - April 2026)",
  skills: [
    "Agile Methodology (SCRUM, Kanban)",
    "API Design & Documentation",
    "CRUD Endpoints",
    "Database Architecture",
    "Authentication",
    "Session Management ",
    "Cross-Functional Team Collaboration",
  ],
  tools: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JavaScript (ES6+)",
    "Postman",
    "Trello",
    "Miro",
    "Git & GitHub",
    "Vercel",
  ],
  tags: ["Node.js", "Express.js", "MongoDB", "JWT"],
  github: "https://github.com/desireestrand/webbshop-2026-be",
  liveDemo: "https://plot-twist-grupp-2.vercel.app/",
  blocks: [
    {
      type: "h1",
      content: "Concept & Features",
    },
    {
      type: "text",
      content:
        "Plot Twist is a hyper-local plant-swapping platform built under the philosophy: 'Forget the supermarket, your neighbors already have what you are looking for.' Developed by a cross-functional team, the application completely eliminates complex e-commerce clutter and shipping methods, replacing them with a live map interface and a seamless, request-and-meet exchange system.",
    },
    {
      type: "list",
      style: "ul",
      items: [
        "Interactive Map Navigation: Displays uploaded plants as physical pins on a neighborhood map, updating dynamically when new items are added.",
        "The Handshake Trade Logic: A streamlined transaction system (Request, Approve, Meet, Complete) that connects users directly and securely without requiring an internal chat feature.",
        "Clean Data Model: A lightweight database design mapping out smooth relations between users, plant entries, and active or historical trades.",
        "Secure Access Control: Dedicated user and admin roles that protect standard operations (like trading assets) and provide a moderation panel for global platform management.",
      ],
    },
    {
      type: "h1",
      content: "Technical Implementation",
    },
    {
      type: "text",
      content: "Working on the backend team, I was responsible for designing the database structure, managing data flows and ensuring that information was correctly synchronized with the frontend. I built the data models to automatically handle user histories and active listings. This minimized data duplication and allowed the frontend to easily fetch a user's entire profile, including uploaded plants, incoming requests, and completed trades, with a single, efficient request.",
    },
    {
      type: "text",
      content: "The transactional core of the app revolves around the trade system. When a user requests a plant, the application validates the data and verifies user permissions via secure tokens. To prevent common errors or manipulation, the backend automatically cross-checks ownership directly with the database, ensuring users cannot request their own plants and preventing duplicate trade requests from being submitted.",
    },
    {
      type: "text",
      content: "To guarantee data consistency, we implemented logic that automates status updates. The moment a trade is accepted or finalized, the plant is automatically marked as unavailable and hidden from the map view. Confirming a trade also auto-cancels any other competing requests for that specific plant. To ensure security and system stability, the application filters out malicious inputs and features a centralized error handler. If an unexpected error occurs, it masks internal system details behind user-friendly error statuses, protecting the code from being exposed.",
    },
    {
      type: "text",
      content: "To bridge the gap between our teams, I maintained an updated API Guide and Postman Collection. This acted as a single source of truth for the frontend developers, clearly mapping out how data was formatted and how secure requests should be structured, resulting in a smooth integration process.",
    },
    {
      type: "h1",
      content: "Lessons Learned",
    },
    {
      type: "text",
      content: "Executing a full-stack application within a 4-week sprint cycle highlighted the value of clear documentation and pro-active team alignment. During development, the frontend team began exploring features outside our initial core scope, such as favorite lists and predetermined meeting locations. Recognizing that these additions would create unmapped database dependencies, we paused development for a collective alignment. By strictly defining our Minimum Viable Product (MVP), we moved experimental features to a secondary backlog, which reduced stress and ensured a cohesive, on-time delivery.",
    },
    {
      type: "list",
      style: "ul",
      items: [
        "Defining Transaction States Early: Establishing how states (pending, approved, completed) should flow before writing code prevents massive amounts of logic conflicts later.",
        "Interactive Documentation: Learning that comprehensive API guides are most effective when paired with collaborative code walks to explain complex concepts like authentication and token handling.",
        "Agile Adaptability: Utilizing structured tools alongside regular team syncs allowed us to adjust tasks effectively, troubleshoot edge cases, and maintain high team velocity.",
        "Clean Code & Validation: Developing strict habits around data verification and robust error handling to keep the ecosystem reliable across both local and cloud environments.",
        "Team-Wide Synchronization: Understanding that system architecture is heavily dependent on human communication, and that implementing regular feedback loops between backend and frontend prevents teams from developing in separate directions.",
      ],
    },
  ],
};