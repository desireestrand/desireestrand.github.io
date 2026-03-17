export const pokemonApp = {
  id: "pokemon-app",
  title: "Pokémon 151",
  category: "Frontend",
  thumbnail: "/images/pokemon-thumbnail.gif",
  cover: "/images/pokemon.png",
  excerpt: "A simple React application that uses the PokéAPI to fetch, filter, and display detailed information about the original 151 Pokémon",
  summary: "A simple React application that uses the PokéAPI to fetch, filter, and display detailed information about the original 151 Pokémon.",
  type: "Individual Project (Semester 1)",
  client: "Educational Project",
  duration: "2 weeks (Nov 2025)",
  skills: ["Frontend Development", "Asynchronous Programming", "State Management"],
  tools: ["React", "JavaScript", "CSS3", "Vite", "PokéAPI", "React Hooks"],
  tags: ["React", "REST API", "CSS"],
  github: "https://github.com/desireestrand/pokemon-app",
  liveDemo: "https://desireestrand.github.io/pokemon-app/",
  blocks: [
    {
      type: "h1",
      content: "Concept & Features",
    },
    {
      type: "text",
      content: "The Pokémon 151 application is a dynamic, React-based explorer built to showcase the original 151 Pokémon species. The application guides the user through a clean, multi-stage interface where data is fetched and displayed on demand.",
    },
    {
      type: "list",
      style: "ul",
      items: [
        "A multi-stage flow with a landing screen that transitions into the main application state upon user interaction.",
        "Data fetching on-demand; a dropdown system lets users select a Pokémon, triggering a specific API call to retrieve deep-linked data within the PokéAPI.",
        "Dynamically visualizes essential Pokémon data such as official artwork, elemental types, weight, and height.",
        "A unique theme for every Pokémon, where the UI adapts its colors based on the creature's primary type.",
      ],
    },
    {
      type: "h1",
      content: "Technical Implementation",
    },
    {
      type: "text",
      content: "I built the application using a modular hierarchy of three components: <App>, <PokemonApplication>, and <Pokemon>. This structure ensures a clean separation of concerns, where each component handles its own part of the data lifecycle.",
    },
    {
      type: "text",
      content: "A key technical feature is the dynamic styling engine. I created a color array and map that links Pokémon types to specific hex codes. When a Pokémon is loaded, a useEffect hook synchronizes the DOM's background and header colors to match the Pokémon's type, creating an immersive user experience.",
    },
    {
      type: "text",
      content: "I used the fetch API combined with async/await for all data synchronization. By using separate useEffect hooks for the initial list and the specific Pokémon details, I ensured that the application remains performant and only fetches data when necessary.",
    },
    {
      type: "h1",
      content: "Lessons Learned",
    },
    {
      type: "text",
      content: "This project was important in mastering the React component lifecycle and how to handle external data sources efficiently. Key takeaways include:",
    },
    {
      type: "list",
      style: "ul",
      items: [
        "Mastering state synchronization; how to pass data between components and managing the transition between loading and display states.",
        "Learning how to manipulate the global document object and inline styles effectively within a React environment.",
        "Gaining experience in navigating APIs and drilling into complex, nested JSON objects to find specific assets like sprites and nested type arrays.",
        "Implementing conditional rendering to ensure that components only render once the necessary data is fully available, improving performance.",
      ],
    },
  ],
};