var wvisible = false;
async function start() {
    document.getElementById("window").style.visibility = "hidden";
    document.onkeypress = function () {
        if (wvisible == false) {
            wvisible = true;
            document.getElementById("window").style.visibility = "visible";
            document.getElementById("input").select()
            document.getElementById("big").style.visibility = "hidden";
        }
    }

    var sec = new Date().getSeconds();
    var min = new Date().getMinutes();
    var hou = new Date().getHours();
    if (sec <= 9) {
        sec = "0" + sec;
    }
    if (min <= 9) {
        min = "0" + min;
    }
    if (hou <= 9) {
        hou = "0" + hou;
    }
    document.getElementById("bigclock").innerHTML = hou + ":" + min + ":" + sec;
    document.getElementById("bigdate").innerHTML = new Date().toLocaleDateString();
    setInterval(() => {
        var sec = new Date().getSeconds();
        var min = new Date().getMinutes();
        var hou = new Date().getHours();
        if (sec <= 9) {
            sec = "0" + sec;
        }
        if (min <= 9) {
            min = "0" + min;
        }
        if (hou <= 9) {
            hou = "0" + hou;
        }
        document.getElementById("bigclock").innerHTML = hou + ":" + min + ":" + sec;
        document.getElementById("bigdate").innerHTML = new Date().toLocaleDateString();
    }, 1000);
    document.getElementById("timetext").innerHTML = new Date()
    setInterval(() => {
        document.getElementById("timetext").innerHTML = new Date()
    }, 1000);
}
var cmd;
function checkEnter(e) {
    var keynum;

    if (window.event) { // IE                    
        keynum = e.keyCode;
    } else if (e.which) { // Netscape/Firefox/Opera                   
        keynum = e.which;
    }
    if (keynum == 13) {
        run();
    }

}

function fetchtext(text) {
    cmd = text;
}

function run() {
    if (cmd == "hi") {
        document.getElementById("output").innerHTML = "Hello world!";
    } else if (cmd == "help") {
        document.getElementById("output").innerHTML = "COMMANDS:<br>help | google &lt;query&gt; | b &lt;webpage&gt; | yt (query)<br><small>&lt;required&gt; (optional)</small&gt;"
    } else if (cmd.startsWith("google")) {
        const search = cmd.split("google ")
        if (search[1] == undefined) {
            document.getElementById("output").innerHTML = "<b>ERROR!</b><br>Search query is undefined.<br><i>Usage: google query</i>"
            return
        }
        window.location.href = "https://www.google.com/search?q=" + search[1];
    } else if (cmd.startsWith("yt")) {
        const search = cmd.split("yt ")
        if (search[1] == undefined) {
            window.location.href = "https://www.youtube.com/";
            return
        }
        window.location.href = "https://www.youtube.com/results?search_query=" + search[1];
    } else if (cmd.startsWith("browse ")) {
        const search = cmd.split("browse ")
        if (search[1] == undefined) {
            document.getElementById("output").innerHTML = "<b>ERROR!</b><br>Text is undefined.<br><i>Usage: b youtube.com</i>"
            return
        }
        if (search[1].includes("https://") || search[1].includes("http://")) {
            window.location.href = search[1]
            return;
        }
        window.location.href = "http://" + search[1]
    } else if (cmd.startsWith("b ")) {
        const search = cmd.split("b ")
        if (search[1] == undefined) {
            document.getElementById("output").innerHTML = "<b>ERROR!</b><br>Text is undefined.<br><i>Usage: b youtube.com</i>"
            return
        }
        if (search[1].includes("https://") || search[1].includes("http://")) {
            window.location.href = search[1]
            return;
        }
        window.location.href = "http://" + search[1]
    }
}