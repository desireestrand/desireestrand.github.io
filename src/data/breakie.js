export const breakie = {
  id: "breakie",
  title: "Breakie",
  category: "UX",
  tags: ["UX", "UI", "Interaction Design", "EdTech"],
  thumbnail: "/images/breakie-front.png",
  excerpt: "A digital classroom tool designed to re-energize students and improve concentration through scheduled 'brain breaks'",
  summary: "As part of a commissioned project by NTI Gymnasiet at ZoCom AB, I served as Lead Designer for Breakie — the fourth tool in the 'Toolie' ecosystem. Breakie addresses 'classroom friction' by providing teachers with an efficient way to implement physical, mental, and social pauses during long lessons. By applying a user-centered Design Thinking process, I transformed a teacher-led concept into a high-fidelity interactive prototype. The project focused on functional minimalism, accessibility (WCAG), and a scalable design system based on an 8-point grid, ensuring a seamless experience for both educators and students.",
  type: "Client Project / Final Project for my Bachelor's Degree in Media Technology (Semester 6)",
  client: "NTI Gymnasiet (via ZoCom AB)",
  duration: "10 weeks (March - June 2022)",
  skills: [
    "UX/UI Design",
    "Interaction Design",
    "Design Thinking",
    "User Research",
    "Brainstorming",
    "Prototyping",
    "Accessibility (WCAG)",
    "Design Systems",
    "Usability Testing",
    "Workshop Facilitation",
  ],
  tools: [
    "Figma",
    "Stark",
    "WebAim",
    "Miro",
    "React",
    "8-Point Grid System",
    "Accessibility View",
  ],
  github: "",
  liveDemo: "https://www.figma.com/proto/7y9TFEtLnrSnSTL8g4VFLx/Strand_Desire%CC%81e_prototyp_PEP_VT2022?node-id=1340%3A1140&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1340%3A1140",
  blocks: [
    {
      type: "h1",
      content: "Introduction",
    },
    {
      type: "text",
      content:
        "Watch the project video below for a quick walkthrough of the design process and Breakie's core concept and features (Note: The video is in Swedish):",
    },
    {
      type: "video",
      url: "/images/breakie-video.mp4",
      caption: "A video summary of the Breakie project."
    },
    {
      type: "h2",
      content: "Background & Problem Statement",
    },
    {
      type: "text",
      content:
        "NTI Gymnasiet, a tech-focused high school in Sweden, continuously seeks to innovate the classroom experience through their 'Toolie' ecosystem — a suite of digital tools like Selfie (random name selection), Groupie (group creation), and Helpie (classroom tutoring). Breakie originated from an internal innovation incubator, 'NTI Inkubator', where teachers identified a common 'friction': student fatigue during long afternoon sessions when energy levels dip and focus fades.",
    },
    {
      type: "text",
      content:
        "The solution proposed by the teachers was a 'bandage' called Breakie: an app that suggests various 'brain breaks' to stimulate physical activity and mental variation, ultimately fostering a better learning environment.",
    },
    {
      type: "image",
      url: "/images/breakie-1.png",
      caption: "The Toolie app (https://toolie.se/)."
    },
    {
      type: "h2",
      content: "Mission & Objectives",
    },
    {
      type: "text",
      content:
        "The primary goal was to design the first comprehensive version of Breakie’s interface and user experience. The application needed to effectively suggest and create short mental pauses while being accessible and practical for both teachers and students in a high-paced classroom context.",
    },
    {
      type: "quote",
      content:
        "Breakie aims to turn mental fatigue into focus through movement and variation.",
      caption: "The core vision for the project.",
    },
        {
      type: "h2",
      content: "Research & Market Context",
    },
    {
      type: "text",
      content:
        "The project was grounded in EdTech research regarding 'brain breaks' and physical activity. While several tools existed on the market, research indicated a gap: the need for a tool that combined a curated library with the ability for users to create their own breaks, offering multiple ways to select activities (randomized or manual) specifically tailored for the Swedish high school demographic.",
    },
    {
      type: "h2",
      content: "My Role",
    },
    {
      type: "text",
      content:
        "In this project, I acted as the Lead Designer. My responsibility was to own the entire UX/UI process, working alongside a project manager, an accessibility expert, and two frontend developers at ZoCom. Beyond the design work, I managed the client relationship with NTI Gymnasiet, facilitating workshops and ensuring the final product aligned with their pedagogical goals and technical requirements.",
    },
    {
      type: "h1",
      content: "The Design Process",
    },
    {
      type: "text",
      content:
        "The project followed an iterative Design Thinking framework (Empathize, Define, Ideate, Prototype, Test) integrated into NTI's agile incubator milestones. While the initial concept existed, my process involved deep-diving into user needs to refine the interface and user experience.",
    },
    {
      type: "h2",
      content: "Initial Interface Proposals",
    },
    {
      type: "text",
      content:
        "Starting with 'braindrawing' sessions, I explored how to balance the two core functions: 'Randomize a Breakie' and 'Choose a Specific Breakie'. The challenge was to minimize the number of steps to ensure the tool didn't take valuable time away from the lesson. I iterated between paper sketches and Figma to align the UI with the existing 'Toolie' design language.",
    },
    {
      // Här kan du lägga in galleriet med kundresekartor om du har bilder
      type: "gallery-row",
      images: [
        { url: "/images/breakie-cjm-1.jpg" },
        { url: "/images/breakie-cjm-2.jpg" },
      ],
      caption: "The first sketches of Breakie, on paper and in Figma.",
    },
        {
      type: "image",
      url: "/images/breakie-sketches.jpg",
      caption: "The initial interface proposal in Figma.",
    },
        {
      type: "text",
      content:
        "Sketches were tested with the ZoCom team for feedback, leading to iterative improvements. I also held a workshop with teachers from NTI Gymnasiet to test the initial interface proposal, gather feedback, and improve it. I presented the interface and conducted A/B testing to refine features based on user preferences. Feedback was primarily positive, with suggestions for additional features. The workshop also included brainstorming sessions to define new functions and requirements for Breakie. Changes were made to the interface based on both teacher and team member feedback, focusing on simplicity.",
    },
    {
      type: "image",
      url: "/images/breakie-sketches.jpg",
      caption: "New needs and requirements for Breakie after the workshop with NTI Gymnasiet's teachers.",
    },
        {
      type: "image",
      url: "/images/breakie-sketches.jpg",
      caption: "Sketches in Figma of the functions to create a breakie and instructions for selected breakie.",
    },
        {
      type: "image",
      url: "/images/breakie-sketches.jpg",
      caption: "The interface in Figma after the form to create a breakie and the instructions for selected breakie were stripped.",
    },
    {
      type: "h2",
      content: "Empathy & Definition",
    },
    {
      type: "text",
      content:
        "To deepen my understanding, I conducted a market analysis of existing classroom tools, performed stakeholder mapping and a requirement analysis. This phase helped me realize that students needed to be emphasized more as primary users, not just the teachers. Three personas were developed based on these findings.",
    },
    {
      type: "image",
      url: "/images/breakie-personas.jpg",
      caption: "Personas created for teachers (Göran) and students (Josefine) to guide the UX strategy.",
    },
    {
      type: "text",
      content:
        "I developed six customer journey maps to identify gaps in the interaction. These maps revealed the need for features like filtering and 'favorite' lists, which were then integrated into a clickable prototype.",
    },
    {
      // Här kan du lägga in galleriet med kundresekartor om du har bilder
      type: "gallery-row",
      images: [
        { url: "/images/breakie-cjm-1.jpg" },
        { url: "/images/breakie-cjm-2.jpg" },
      ],
      caption: "Customer journey mapping to identify pain points and feature gaps.",
    },
    {
      type: "h2",
      content: "Testing with Educators",
    },
    {
      type: "text",
      content:
        "Using methods like 'Six Thinking Hats' and 'Charettes', I gathered feedback from pedagogical experts at ZoCom and Kvasar Makerspace during design critique sessions and brainstorming. This led to critical insights: the need to simplify the start-page access to favorites, avoiding 'Swenglish' in the UI, and ensuring the transition back to the lesson was as smooth as the break itself.",
    },
    {
      type: "h2",
      content: "The Design System & Accessibility",
    },
    {
      type: "text",
      content:
        "To ensure scalability and consistency with the Toolie ecosystem, I implemented an 8-Point Grid System. I also studied React basics to better communicate with the frontend developers and build a design system that aligned with their technical framework.",
    },
    {
      type: "text",
      content:
        "Accessibility was a core pillar in this project. Using tools like 'Stark' and WCAG guidelines, I refined color contrasts, typography, and hit areas to ensure the tool was inclusive for all students and teachers.",
    },
    {
      type: "image",
      url: "/images/breakie-design-system.jpg",
      caption: "The Breakie Design System: components, typography, and grid standards.",
    },
    {
      type: "h2",
      content: "Iterative Testing: Students, Experts & Heuristics",
    },
    {
      type: "text",
      content:
        "I conducted three distinct types of tests: 1. Student Concept Testing: Validating that breaks were perceived as helpful for concentration. 2. Accessibility Audit: Expert review of the code and UI against WCAG. 3. Heuristic Evaluation: A peer-review based on Andy Budd's web design principles.",
    },
    {
      type: "text",
      content:
        "Feedback from these tests led to the final major iteration, adding features like a hover-state label for navigation, a 'Random/Select' switch, and a dedicated timer screen with clear start and end states to help system visibility.",
    },
    {
      type: "h2",
      content: "Final Validation",
    },
    {
      type: "text",
      content:
        "The process concluded with a final usability test with former high school teachers. They confirmed the ease of use, leading to minor visual polish before the design was handed over for final implementation.",
    },
    {
      type: "h1",
      content: "The Solution",
    },
    {
      type: "text",
      content:
        "Breakie is a web-based classroom tool designed to introduce physical, mental, or social pauses — 'brain breaks' — to help high school students maintain focus. Managed by the teacher and displayed via projector, the app allows for quick energy shifts without disrupting the lesson flow.",
    },
    {
      type: "button",
      text: "Explore the Hi-Fi Prototype",
      url: "https://www.figma.com/proto/7y9TFEtLnrSnSTL8g4VFLx/Strand_Desire%CC%81e_prototyp_PEP_VT2022?node-id=1340%3A1140&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1340%3A1140",
      external: "_blank",
    },
    {
      type: "h2",
      content: "Core Features",
    },
    {
      type: "text",
      content:
        "The application is built on functional minimalism, ensuring teachers can launch a break in seconds. Key features include:",
    },
    {
      type: "list",
      style: "ul",
      items: [
        "Smart Randomizer: Quickly trigger a break based on time or type (Physical, Mental, Social).",
        "Breakie Bank: A searchable library of pre-defined activities with clear instructions and media.",
        "Favorites & Custom Lists: Teachers can save their most effective breaks or randomize specifically from their own curated collections.",
        "Creator Tool: Enables teachers to personalize the experience by adding their own unique activities to the bank.",
      ],
    },
    {
      type: "image",
      url: "/images/breakie-solution-screens.jpg",
      caption: "From left to right: The Randomizer, the Breakie Bank, and the Activity Screen with timer.",
    },
    {
      type: "h1",
      content: "Results",
    },
    {
      type: "text",
      content:
        "The project successfully delivered a comprehensive UX/UI foundation for Breakie. In final usability tests, educators praised the tool's efficiency and 'functional minimalism,' noting that the clear visual hierarchy and hover-states made the system feel intuitive and responsive (pliability).",
    },
    {
      type: "text",
      content:
        "While the long-term impact on student concentration remains to be measured post-launch, initial feedback from both students and teachers indicates a strong belief that Breakie will foster a healthier, more dynamic classroom environment. By combining the excitement of a randomizer with the structure of a curated library, Breakie offers a unique value proposition compared to existing physical cards or static video banks.",
    },
    {
      type: "h1",
      content: "Key Takeaways",
    },
    {
      type: "text",
      content:
        "Serving as Lead Designer for a live client project at ZoCom provided invaluable lessons in balancing theoretical design frameworks with real-world constraints.",
    },
    {
      type: "list",
      style: "ul",
      items: [
        "Bridging the Gap (Designer to Dev): Learning React basics was a game-changer for my communication with frontend developers, allowing me to build a design system that was technically feasible and consistent.",
        "The Importance of Early Student Input: Reflecting on the process, involving the students—the ultimate beneficiaries—earlier would have likely shifted the UX from a teacher-led tool to a more collaborative classroom experience.",
        "Functional Minimalism is a Balance: I learned that while 'less is more,' clear signifiers (like labels on hover) are essential to prevent minimalism from turning into confusion.",
        "Adapting to Existing Design Languages: Working within the 'Toolie' ecosystem taught me how to respect established brand guidelines while still innovating and improving the component library using the 8-Point Grid System.",
      ],
    },
  ],
};