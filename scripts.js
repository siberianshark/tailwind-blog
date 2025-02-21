const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const themeToggleButton = document.getElementById('themeToggle');
const menuButton = document.getElementById('menuButton'); // Кнопка для бургер-меню
const closeMenuButton = document.getElementById('closeMenuButton'); // Кнопка закрытия
const menu = document.getElementById('menu'); // Блок с меню
const logo = document.getElementById('logo'); // Логотип "Блог"

// Проверка темы при загрузке страницы
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.classList.add(currentTheme);
    if (currentTheme === 'dark') {
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
    } else {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
} else {
    // Установка темы по умолчанию (светлая)
    document.documentElement.classList.add('light');
}

// Обработчик переключения темы
themeToggleButton.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
        localStorage.setItem('theme', 'dark');
    }
});

// Скрипт для бургер-меню (открытие)
menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    closeMenuButton.classList.remove('hidden'); // Показать кнопку закрытия
    menuButton.classList.add('hidden'); // Скрыть кнопку открытия

    // Скрыть логотип и иконку в мобильной версии
    logo.classList.add('hidden');
    sunIcon.classList.add('hidden');
    moonIcon.classList.add('hidden');
});

// Скрипт для закрытия меню
closeMenuButton.addEventListener('click', () => {
    menu.classList.add('hidden');
    closeMenuButton.classList.add('hidden'); // Скрыть кнопку закрытия
    menuButton.classList.remove('hidden'); // Показать кнопку открытия

    // Показать логотип и иконки обратно
    logo.classList.remove('hidden');
    if (document.documentElement.classList.contains('dark')) {
        moonIcon.classList.remove('hidden');
    } else {
        sunIcon.classList.remove('hidden');
    }
});

const prevButton = document.querySelectorAll('.absolute button')[0];
const nextButton = document.querySelectorAll('.absolute button')[1];
const slides = document.querySelectorAll('.relative .flex > div');
const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
let currentSlide = 0;

// Функция для обновления позиции слайдов
function updateSlidePosition() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
}

// Обработчик для кнопки "влево"
prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    updateSlidePosition();
});

// Обработчик для кнопки "вправо"
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    updateSlidePosition();
});

// Инициализация слайдера
updateSlidePosition();

// Обработчик двойного щелчка по миниатюре
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('dblclick', (e) => {
        const largeSrc = e.target.dataset.largeSrc;
        modalImage.src = largeSrc; // Устанавливаем большой размер изображения
        modal.classList.remove('hidden'); // Показываем модальное окно
    });
});

// Закрытие модального окна при клике на фон
modal.addEventListener('click', () => {
    modal.classList.add('hidden'); // Скрыть модальное окно
});