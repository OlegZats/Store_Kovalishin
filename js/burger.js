document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const headerMenu = document.getElementById("headerMenu");

    burger.addEventListener("click", () => {
        headerMenu.classList.toggle("active");
        burger.classList.toggle("active");
    });
    
    headerMenu.addEventListener("click", () => {
        headerMenu.classList.remove("active");
        burger.classList.remove("active");
    });
});
