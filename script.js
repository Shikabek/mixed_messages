const starSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo'];
const fortunes = ['will encounter a great fortune today', 'should avoid black cats', 'will find a bug in their code'];
const advice = ['Trust your gut!', 'Drink more coffee!', 'Take a nap.'];

function getRandomPiece(array) {
    let randomNumber = Math.floor(Math.random() * (array.length));
    return array[randomNumber];
}

function getAstrologyPrediction () {
    let sign = getRandomPiece(starSigns);
    let fort = getRandomPiece(fortunes);
    let adv = getRandomPiece(advice);

    return `Ah, ${sign} ${fort}. My advice for you is to: ${adv}`;
}

console.log(getAstrologyPrediction());

// Находим кнопку и место для вывода текста
const button = document.getElementById('button_press_me');
const displayElement = document.getElementById('prediction_text');

// Вешаем слушатель события 'click'
button.addEventListener('click', () => {
    
    // 1. Вызываем твою функцию и получаем строку с предсказанием
    let finalMessage = getAstrologyPrediction();
    
    // 2. Вставляем эту строку внутрь нашего пустого тега <h3>
    displayElement.textContent = finalMessage;
    
});