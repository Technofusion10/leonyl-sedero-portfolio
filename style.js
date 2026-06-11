// for nav links
document.addEventListener("DOMContentLoaded", () => {

    const slider = document.getElementById("slider");
    const items = document.querySelectorAll(".nav-item");

    function moveSlider(item) {
        slider.style.width = item.offsetWidth + "px";
        slider.style.height = item.offsetHeight + "px";
        slider.style.left = item.offsetLeft + "px";
        slider.style.top = item.offsetTop + "px";

        items.forEach(link => {
            link.classList.remove("text-white");
            link.classList.add("text-gray-700");
        });

        item.classList.remove("text-gray-700");
        item.classList.add("text-white");
    }

    // Set initial position
    moveSlider(items[0]);

    items.forEach(item => {

        item.addEventListener("mouseenter", () => {
            moveSlider(item);
        });

    });

});

// for mobile responsive
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});