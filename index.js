// School Counter App
let count = 0;
let previousEntry = "";
let savedData = document.createElement("p");
savedData.innerHTML = "Previous entries: "
document.body.firstElementChild.appendChild(savedData);

window.onload = function() {
    let savedCount = getCookie("count");
    if (savedCount) {
        count = parseInt(savedCount);
        document.getElementById("count-el").innerHTML = count;
    }
};

function increment() {
    count++;
    document.getElementById("count-el").innerHTML = count;
    console.log(document.getElementById("count-el").innerHTML);
}

function save() {
    previousEntry = count + " - ";
    savedData.innerHTML += previousEntry;

    setCookie("count", count, 7); // Cookie will expire in 7 days
}

function reset() {
    count = 0;
    previousEntry = "";

    document.getElementById("count-el").innerHTML = count;
    savedData.innerHTML = "Previous entries: "
}


// Cookie functions (setCookie and getCookie)
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}