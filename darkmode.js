const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = window.localStorage.getItem("theme");

if (currentTheme == "") {
  currentTheme = "light"
}

if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

function darkMode() {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  window.localStorage.setItem("theme", theme);
};
