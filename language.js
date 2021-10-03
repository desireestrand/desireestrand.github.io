const currentLang = window.localStorage.getItem("language");

if (currentLang == "sv") {
  document.body.id = "sv";
} else if (currentLang == "en") {
  document.body.id = "en";
}

function langMode() {
  if (document.body.id == "sv") {
    document.body.id = "en";
    var language = "en";
  } else if (document.body.id == "en") {
    document.body.id = "sv";
    var language = "sv";
  }
  window.localStorage.setItem("language", language);
};