let tg = window.Telegram.WebApp;

tg.expand();

// Получаем элемент изображения
let logo = document.getElementById("brand-logo");

// Проверяем текущую цветовую схему
let colorScheme = tg.colorScheme;

// Устанавливаем изображение в зависимости от цветовой схемы
if (colorScheme === 'dark') {
    logo.src = "{% static 'images/Лого.png' %}";
    logo.srcset = "{% static 'images/Лого.png' %} 2x";
} else {
    logo.src = "{% static 'images/logo-default-261x72.png' %}";
    logo.srcset = "{% static 'images/logo-default-261x72.png' %} 2x";
}
