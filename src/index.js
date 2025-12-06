import "./styles.css";

// ----- СОЗДАНИЕ ЭЛЕМЕНТОВ -----

const container = document.querySelector(".container");

// Кнопка
const btn = document.createElement("button");
btn.id = "btn";
btn.textContent = "Click to toggle popover";

// Popover
const pop = document.createElement("div");
pop.id = "popover";
pop.className = "popover";
pop.textContent =
    "And here's some amazing content. It's very engaging. Right?";

// Добавляем в DOM
container.appendChild(btn);
container.appendChild(pop);

// ----- ПОЗИЦИОНИРОВАНИЕ -----

function positionPopover() {
    const popHeight = pop.offsetHeight;

    // Расположение строго между input и кнопкой
    pop.style.top = (btn.offsetTop - popHeight - 12) + "px";
    pop.style.left = "50%";
}

// ----- ЛОГИКА ВКЛ/ВЫКЛ -----

function togglePopover() {
    if (pop.classList.contains("popover-visible")) {
        pop.classList.remove("popover-visible");
    } else {
        positionPopover();
        pop.classList.add("popover-visible");
    }
}

// Показ/скрытие
btn.addEventListener("click", (e) => {
    e.stopPropagation();
    togglePopover();
});

// Закрытие по клику вне popover
document.addEventListener("click", (e) => {
    if (!pop.classList.contains("popover-visible")) return;
    if (!btn.contains(e.target) && !pop.contains(e.target)) {
        pop.classList.remove("popover-visible");
    }
});

// Перепозиционирование при ресайзе
window.addEventListener("resize", positionPopover);
