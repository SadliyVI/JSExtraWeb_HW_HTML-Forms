import "./styles.css";

const btn = document.createElement("button");
btn.id = "btn";
btn.textContent = "Click to toggle popover";


const pop = document.createElement("div");
pop.id = "popover";
pop.className = "popover";
pop.textContent = "And here's some amazing content. It's very engaging. Right?";

const container = document.querySelector(".container");
container.appendChild(btn);
container.appendChild(pop);

const input = document.getElementById("input");

function positionPopover() {
    const popHeight = pop.offsetHeight;

    pop.style.top = (btn.offsetTop - popHeight - 12) + "px";
    pop.style.left = "50%";
}

btn.addEventListener("mouseenter", () => {
    if (input.value.trim() !== "") return;

    pop.classList.add("popover-visible");
    positionPopover();
});

btn.addEventListener("mouseleave", () => {
    pop.classList.remove("popover-visible");
});

input.addEventListener("input", () => {
    pop.classList.remove("popover-visible");
});

window.addEventListener("resize", positionPopover);
