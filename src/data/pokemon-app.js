export const pokemonApp = {
  id: "pokemon-app",
  title: "Pokémon 151",
  category: "Frontend",
  thumbnail: "/images/pokemon-thumbnail.gif",
  cover: "/images/pokemon.png",
  excerpt:
    "An interactive application that interfaces with the PokéAPI to fetch, filter, and display detailed statistics and visual assets for the original 151 Pokémon",
  type: "Individual Project (Semester 1)",
  client: "Educational Project",
  duration: "2 weeks (Nov 2025)",
  skills: ["React", "JavaScript", "CSS", "Asynchronous Programming", "State Management"],
  tools: ["Vite", "PokéAPI", "React Hooks"],
  tags: ["React", "API", "CSS"],
  github: "https://github.com/desireestrand/pokemon-app",
  liveDemo: "https://desireestrand.github.io/pokemon-app/",
  blocks: [
    {
      type: "h1",
      content: "Concept & Features",
    },
    {
      type: "text",
      content:
        "The Pokémon 151 app is a dynamic React-based explorer built to showcase the original 151 Pokémon species. The application guides the user through a clean, multi-stage interface where data is fetched and displayed on demand.",
    },
    {
      type: "list",
      style: "ul",
      items: [
        "Multi-stage Flow: A landing screen that transitions into the main application state upon user interaction.",
        "On-demand Data Fetching: A dropdown system that lets users select a Pokémon, triggering a specific API call to retrieve deep-linked data.",
        "Dynamic Stats Display: Visualizes essential data such as official artwork, elemental types, weight, and height.",
        "Visual Identity: A unique theme for every Pokémon, where the UI adapts its colors based on the creature's primary type.",
      ],
    },
    {
      type: "h1",
      content: "Technical Implementation",
    },
    {
      type: "text",
      content:
        "I built the application using a modular hierarchy: App, PokemonApplication, and Pokemon. This structure ensures a clean separation of concerns, where each component handles its own part of the data lifecycle.",
    },
    
    {
      type: "text",
      content:
        "A key technical feature is the Dynamic Styling Engine. I created a 'typeColors' map that links Pokémon types to specific hex codes. When a Pokémon is loaded, a 'useEffect' hook synchronizes the DOM's background and header colors to match the Pokémon's type, creating a cohesive and immersive user experience.",
    },
    {
      type: "text",
      content:
        "I used the 'fetch' API combined with 'async/await' for all data synchronization. By using separate 'useEffect' hooks for the initial list and the specific Pokémon details, I ensured that the application remains performant and only fetches data when necessary.",
    },
    {
      type: "h1",
      content: "Lessons Learned",
    },
    {
      type: "text",
      content:
        "This project was instrumental in mastering the React component lifecycle and how to handle external data sources efficiently.",
    },
    {
      type: "list",
      style: "ul",
      items: [
        "State Synchronization: Mastering how to pass data between components and managing the transition between loading and display states.",
        "Dynamic Styling in React: Learning how to manipulate the global 'document' object and inline styles effectively within a React environment.",
        "API Navigation: Gaining experience in 'drilling' into complex, nested JSON objects to find specific assets like sprites and nested type arrays.",
        "Performance Awareness: Implementing conditional rendering to ensure that components only render once the necessary data is fully available.",
      ],
    },
  ],
};