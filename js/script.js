function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("sidebar").style.left = "65vw";

    document.getElementById("openButton").style.display = "none";
    
    document.getElementById("closeButton").style.display = "block";
    document.getElementById("closeButton").style.left = "5vw";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("sidebar").style.left = "100vw";

    document.getElementById("openButton").style.display = "inherit";
    
    document.getElementById("closeButton").style.display = "none";
    document.getElementById("closeButton").style.left = "5vw";
}

const languagesText = document.querySelector(".languagesText");
const text = new Array("Java", "C++", "HTML", "CSS", "JavaScript", "TypeScript");

typewriter(languagesText, text);

function typewriter(element, text, i = 0, arrayIndex = 0) {

    let aux = text[arrayIndex];
    element.textContent += aux[i];

    if (i === aux.length - 1) {
        setTimeout(() => unWrite(element, i, arrayIndex, text), 400);
        return;
    }

    setTimeout(() => typewriter(element, text, i + 1, arrayIndex), 230);
}

function unWrite(element, i, arrayIndex, text) {
    element.textContent = element.textContent.slice(element.textContent.lenght - 1, i);

    if (i === 0) {
        if (arrayIndex >= text.length - 1) {
            arrayIndex = 0;
        } else {
            arrayIndex++;
        }

        setTimeout(() => typewriter(element, text, 0, arrayIndex), 230);
        return;
    }

    setTimeout(() => unWrite(element, i - 1, arrayIndex, text), 230);
}


//Carousel code (enables funky scroling on mobile)
/*
const projectArea = document.getElementById("projectShowcaseArea");
const projects =  document.querySelectorAll(".projectWrapper");
let index = -2;

if (window.screen.width <= 600) {
    setInterval(carousel, 2000);
}

function carousel() {
    if (window.screen.width > 600) {
        projectArea.style.transform = `translateX(0px)`;
        return;
    }

    index++;

    if (index > projects.length - 2) {
        index = -1;
    }

    projectArea.style.transform = `translateX(${-index * 250}px)`;
}
*/
