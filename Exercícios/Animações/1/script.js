const btn = document.querySelector(".btn");

// btn.addEventListener("click", (evt) => {
//     btn.classList.add("btnAtivo")
//     setTimeout(() => {
//     btn.classList.remove("btnAtivo")
//     }, 150);
// });

btn.addEventListener("mousedown", () => {
    btn.classList.add("btnAtivo")
});

btn.addEventListener("mouseup", () => {
    btn.classList.remove("btnAtivo")
});