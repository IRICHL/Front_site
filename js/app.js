let tg = window.Telegram.WebApp;

tg.expand();

function setLogoBasedOnTheme() {
    // Получаем элемент изображения
    let logo = document.getElementById("brand-logo");

    // Проверяем текущую цветовую схему
    let colorScheme = tg.colorScheme;

    // Устанавливаем изображение в зависимости от цветовой схемы
    if (colorScheme === 'dark') {
        logo.src = "{% static 'Лого.png' %}";
        logo.srcset = "{% static 'Лого.png' %} 2x";
    } else {
        logo.src = "{% static 'images/Лого-светлая-тема.png' %}";
        logo.srcset = "{% static 'images/Лого-светлая-тема.png' %} 2x";
    }
}

// Устанавливаем изображение при загрузке страницы
setLogoBasedOnTheme();

// Обновляем изображение при смене темы
tg.onEvent('themeChanged', setLogoBasedOnTheme);
