import "./styles.css";

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const pop = document.getElementById("popover");

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
