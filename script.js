async function start() {
/*  OLD: 
    var sec = new Date().getSeconds();
    if (sec <= 9) {
        sec = "0" + sec;
    }
    const min = new Date().getMinutes();
    const hou = new Date().getHours();
    document.getElementById("timetext").innerHTML = hou + ":" + min + ":" + sec;
    document.getElementById("datetext").innerHTML = new Date().toLocaleDateString();*/

    document.getElementById("timetext").innerHTML = new Date()
    setInterval(() => {
        document.getElementById("timetext").innerHTML = new Date()
    }, 1000);
}
var cmd;
function checkEnter(e){
    var keynum;

    if(window.event) { // IE                    
      keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera                   
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
        document.getElementById("output").innerHTML = "COMMANDS:<br>help | google <query> | b <webpage>"
    } else if (cmd.startsWith("google")) {
        const search = cmd.split("google ")
        if (search[1] == undefined) {
            document.getElementById("output").innerHTML = "<b>ERROR!</b><br>Search query is undefined.<br><i>Usage: google query</i>"
            return
        }
        window.location.href = "https://www.google.com/search?q=" + search[1];
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