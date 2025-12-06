export default class Popover {
    constructor(button, message) {
        this.button = button;
        this.message = message;
        this.popover = null;

        this.handleDocumentClick = this.handleDocumentClick.bind(this);

        this.button.addEventListener("click", () => this.toggle());
        document.addEventListener("click", this.handleDocumentClick);
        window.addEventListener("resize", () => this.reposition());
    }

    create() {
        if (this.popover) return;

        const div = document.createElement("div");
        div.className = "popover";
        div.textContent = this.message;

        document.body.appendChild(div);
        this.popover = div;
    }

    reposition() {
        if (!this.popover || this.popover.style.display === "none") return;

        const btnRect = this.button.getBoundingClientRect();
        const popRect = this.popover.getBoundingClientRect();

        // Центрирование
        const left = btnRect.left + btnRect.width / 2 - popRect.width / 2;

        // Проверяем место сверху
        const enoughSpaceAbove = btnRect.top - popRect.height - 10 > 0;

        const top = enoughSpaceAbove
            ? btnRect.top - popRect.height - 8
            : btnRect.bottom + 8;

        this.popover.style.left = `${left}px`;
        this.popover.style.top = `${top}px`;

        // Добавим класс для стрелки (верх/низ)
        this.popover.dataset.position = enoughSpaceAbove ? "top" : "bottom";
    }

    show() {
        this.create();
        this.popover.style.display = "block";
        this.reposition();
        this.popover.classList.add("popover-visible");
    }

    hide() {
        if (this.popover) {
            this.popover.classList.remove("popover-visible");
            this.popover.style.display = "none";
        }
    }

    toggle() {
        if (!this.popover || this.popover.style.display === "none") {
            this.show();
        } else {
            this.hide();
        }
    }

    handleDocumentClick(event) {
        if (
            this.popover &&
            this.popover.style.display === "block" &&
            !this.button.contains(event.target) &&
            !this.popover.contains(event.target)
        ) {
            this.hide();
        }
    }
}
