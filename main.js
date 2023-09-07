header = document.querySelector(".header")
header_logo = document.querySelector(".header__logo").firstElementChild
intro = document.querySelector(".intro")
select = document.querySelector(".select")

// Фиксированная шапка при прокрутке
window.addEventListener('scroll', function () {
    if (window.scrollY > 450) {
        // Добавляем класс для header
        header.classList.add("header__fixed")
        // Изменяем логотип на черный
        header_logo.src = "./images/YourTour_black.svg"
        // Изменяем intro чтобы не уползало при фиксированной шапке
        intro.classList.add("intro__fixed")
    }
    else {
        header.classList.remove("header__fixed")
        header_logo.src = "./images/YourTour.svg"
        intro.classList.remove("intro__fixed")
    }
})

// Select
select.addEventListener("change", function () {
    select.style.color = "#1B1F2B"
})

