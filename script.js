    // Обновление даты и времени
function updateDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    document.getElementById('current-date').textContent = now.toLocaleDateString('ru-RU', options);
}

// Имитация обновления данных о погоде
function updateWeatherData() {
    const temperatures = [-5, -7, -9, -12, -15];
    const conditions = ["Снег", "Облачно", "Ясно", "Небольшой снег", "Пасмурно"];
    const winds = [2.8, 3.5, 4.2, 2.1, 5.0];
    const humidities = [82, 78, 75, 80, 85];
    
    const randomIndex = Math.floor(Math.random() * temperatures.length);
    
    document.querySelector('.temperature').textContent = `${temperatures[randomIndex]}°C`;
    document.querySelector('.weather-condition').textContent = conditions[randomIndex];
    document.querySelectorAll('.detail-value')[0].textContent = `${winds[randomIndex]} м/с`;
    document.querySelectorAll('.detail-value')[1].textContent = `${humidities[randomIndex]}%`;
    document.querySelectorAll('.detail-value')[2].textContent = `${temperatures[randomIndex] - 5}°C`;
    
    // Обновляем иконку в зависимости от условия
    const weatherIcon = document.querySelector('.weather-icon');
    if (conditions[randomIndex].includes("Снег")) {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/642/642102.png";
    } else if (conditions[randomIndex].includes("Облачно") || conditions[randomIndex].includes("Пасмурно")) {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/414/414927.png";
    } else {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/3222/3222800.png";
    }
}

// Добавляем анимацию при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.container').classList.add('animated');
    
    // Добавляем небольшую задержку для плавного появления элементов
    const elements = document.querySelectorAll('.detail-card, .info-card');
    elements.forEach((element, index) => {
        element.style.animationDelay = `${0.1 * index}s`;
    });
});

// Инициализация
updateDate();
setInterval(updateDate, 60000);

// Имитация обновления погоды каждые 30 секунд
updateWeatherData();
setInterval(updateWeatherData, 30000);
