let tg = window.Telegram.WebApp;

tg.expand();

// Получаем элемент изображения
let logo = document.getElementById("brand-logo");

// Проверяем текущую цветовую схему
let colorScheme = tg.colorScheme;

// Устанавливаем изображение в зависимости от цветовой схемы
if (colorScheme == 'dark') {
    logo.src = "images/Лого.png";
    logo.srcset = "images/Лого.png 2x";
} else {
    logo.src = "images/logo-default-261x72.png";
    logo.srcset = "images/logo-default-261x72.png 2x";
}
