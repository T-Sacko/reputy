const inputContainers = document.querySelectorAll(".input-container");

// Loop through da input containers toh handle the input labels and delete buttons
inputContainers.forEach(function (container) {
    const input = container.querySelector(".input-m");
    const xBtn = container.querySelector(".x-btn");
    const label = container.querySelector(".label");

    xBtn.addEventListener("click", function () {
        // Clear the text in the input field
        input.value = "";
        input.placeholder = "";
        label.classList.remove("label-active");
        // Revert the border color to black
        input.style.borderColor = "black";
        xBtn.style.opacity = 0;
    });

    input.addEventListener("focus", function () {
        // Display the "x" button when the input is focused
        label.classList.add("label-active");
        xBtn.style.opacity = 1;
    });

    input.addEventListener("blur", function () {
        xBtn.style.opacity = 0;
    });
});


// modal section

const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
if (modal) {
    const modalBtn = document.querySelector(".modal-btn");

    modalBtn.addEventListener("click", function () {
        overlay.classList.add("overlay-active");
        modal.classList.add("modal-active");
    });

    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) {
            overlay.classList.remove("overlay-active");
            modal.classList.remove("modal-active");
        }
    });

   
}
