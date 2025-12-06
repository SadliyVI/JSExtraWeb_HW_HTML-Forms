import "./styles.css";


const container = document.querySelector(".container");

const btn = document.createElement("button");
btn.id = "btn";
btn.textContent = "Click to toggle popover";

const pop = document.createElement("div");
pop.id = "popover";
pop.className = "popover";

const popTitle = document.createElement("div");
popTitle.className = "popover-title";
popTitle.textContent = "Popover Title";

const popText = document.createElement("div");
popText.className = "popover-text";
popText.textContent =
    "And here's some amazing content. It's very engaging. Right?";

pop.append(popTitle, popText);

container.append(btn, pop);


function positionPopover() {
    const popHeight = pop.offsetHeight;

    pop.style.top = (btn.offsetTop - popHeight - 12) + "px";
    pop.style.left = "50%";
}

function togglePopover() {
    if (pop.classList.contains("popover-visible")) {
        pop.classList.remove("popover-visible");
    } else {
        positionPopover();
        pop.classList.add("popover-visible");
    }
}

btn.addEventListener("click", (e) => {
    e.stopPropagation();
    togglePopover();
});

document.addEventListener("click", (e) => {
    if (!pop.classList.contains("popover-visible")) return;
    if (!btn.contains(e.target) && !pop.contains(e.target)) {
        pop.classList.remove("popover-visible");
    }
});

window.addEventListener("resize", positionPopover);