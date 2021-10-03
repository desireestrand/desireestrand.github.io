function toggleCase() {
    var x = document.getElementById("process");
    var btn = document.getElementById("toggle-case");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    if (btn.innerText === "Läs om designprocessen") {
            btn.innerText = "Göm designprocessen";
        } else {
            btn.innerText= "Läs om designprocessen";
        }
    }