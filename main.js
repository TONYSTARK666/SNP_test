const header = document.querySelector(".header");
const headerLogo = document.querySelector(".header__logo").firstElementChild;
const intro = document.querySelector(".intro");
const select = document.querySelector(".select");
const choiceList = document.querySelector('.choice__list');
// Фиксированная шапка при прокрутке
window.addEventListener('scroll', function () {
    if (window.scrollY > 450) {
        // Добавляем класс для header
        header.classList.add("header__fixed");
        // Изменяем логотип на черный
        headerLogo.src = "./images/YourTour_black.svg";
        // Изменяем intro чтобы не уползало при фиксированной шапке
        intro.classList.add("intro__fixed");
    }
    else {
        header.classList.remove("header__fixed");
        headerLogo.src = "./images/YourTour.svg";
        intro.classList.remove("intro__fixed");
    }
})

// Select
select.addEventListener("change", function () {
    select.style.color = "#1B1F2B";
})

// Изменение активного состояния в блоке выбора тура
choiceList.addEventListener("click", e => {
    let currentActive = choiceList.querySelector('.choice__item-active');
    if (e.target.tagName === "A" && currentActive != e.target.parentElement) {
        currentActive.classList.remove("choice__item-active");
        e.target.parentElement.classList.add("choice__item-active");
    }
})

