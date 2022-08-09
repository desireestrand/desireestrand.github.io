let x=0;
let y=0;
let spacing = 7;
let lineColor;
let strokeWidth = 6;
let backColor;

function setup() {
  var lang = document.body.id;

  var windowSV = document.getElementById('front').clientWidth;
  var windowEN = document.getElementById('front-en').clientWidth;

  if (lang == "sv" && windowSV > 769) {
    var clientHeight = document.getElementById('front').clientHeight;
    var clientWidth = document.getElementById('front').clientWidth;
  
    var cnv = createCanvas(clientWidth, clientHeight);
    cnv.parent("front");

    frameRate(35);

    const currentTheme = localStorage.getItem("theme");
  
    if (currentTheme == "dark") {
      lineColor = color(164,242,68);
      backColor = color(9,8,9);
    } else if (currentTheme == "light") {
      lineColor = color(25,35,201);
      backColor = color(242,244,243);
    }
  
    color(backColor);

  } else if (lang == "en" && windowEN > 769) {
    var clientHeight = document.getElementById('front-en').clientHeight;
    var clientWidth = document.getElementById('front-en').clientWidth;
  
    var cnv = createCanvas(clientWidth, clientHeight);
    cnv.parent("front-en");

    frameRate(35);

    const currentTheme = localStorage.getItem("theme");
  
    if (currentTheme == "dark") {
      lineColor = color(164,242,95);
      backColor = color(9,8,9);
    } else if (currentTheme == "light") {
      lineColor = color(25,35,201);
      backColor = color(242,244,243);
    }
  
    color(backColor);
  }
}

function draw() {
    stroke(lineColor);
    strokeWeight(strokeWidth);
    
    line(x, 0, x, windowHeight);
    
    x+=spacing;
    
      if (x > width){
          x = 3.5;
      }
}

function change() {
  x = 0;
  setup();
}