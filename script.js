function toggleVideo() {
    const videoOverlay = document.getElementById('videoOverlay');
    videoOverlay.style.display = 'flex';
}

function closeVideo() {
    const videoOverlay = document.getElementById('videoOverlay');
    videoOverlay.style.display = 'none';
}
function showText(type) {
    let content = '';
    switch (type) {
        case 'vision':
            content = '<div id="visionContent"><p>Интер РАО – диверсифицированный энергетический холдинг, лидер энергетической отрасли' <br> 'Российской Федерации, обеспечивающий наиболее эффективное управление активами.</p></div>';
            break;
        case 'strategicGoals':
            content = '<div id="strategicGoalsContent">' +
                      '<p>Стратегические цели:</p>' +
                      '<ul>' +
                      '<li>Сохранение и укрепление ведущих <br> позиций в российской энергетике.</li>' +
                      '<li>Обеспечение лидерства среди российских энергокомпаний <br> в области эффективности управления энергоактивами.</li>' +
                      '<li>Рост акционерной стоимости, в том числе реализация проектов <br> по эффективному использованию накопленного инвестиционного ресурса.</li>' +
                      '</ul>' 
                      '</div>';
            break;
        case 'keyAccents':
            content = '<div id="keyAccentsContent">' +
                      '<ul>' +
                      '<li>Рост стоимости</li>' +
                      '<li>Цифровизация</li>' +
                      '<li>Диверсификация</li>' +
                      '<li>Устойчивое развитие</li>' +
                      '</ul>'
                       '</div>';
            break;
        case 'developmentDirections':
            content = '<div id="developmentDirectionsContent"><p>Основные направления развития включают альтернативную энергетику.</p></div>';
            content = '<div id="keyAccentsContent">' +
                      '<ul>' +
                      '<li>Электрогенерация</li>' +
                      '<li>Тепловой бизнес</li>' +
                      '<li>Розничный бизнес</li>' +
                      '<li>Внешнеторговая деятельность</li>' +
                      '<li>Международная деятельность</li>' +
                      '<li>Энергетическое машиностроение</li>' +
                      '<li>Инжиниринг</li>' +
                      '<li>Цифровая трансформация бизнеса</li>' +
                      '</ul>'
                       '</div>';
            break;
    }
    document.getElementById('textContainer').innerHTML = content;
}
function showPrice() {
    let table = document.getElementById('pr');
 
    let date = ['Дата', '01.01.2024', '01.02.2024', '01.03.2024', '01.04.2024', '01.05.2024', 
                '01.06.2024', '01.07.2024', '01.08.2024', '01.09.2024', '01.10.2024', 
                '01.11.2024', '01.12.2024', '01.01.2025', '01.02.2025', '01.03.2025'];
    let price = ['Цена', 4.084, 4.076, 4.076, 4.277, 4.059, 3.925, 3.859, 3.695, 3.818, 3.780,
                 3.821, 3.729, 3.641, 3.776, 3.776];

    for (let i = 0; i < date.length; i++) {
        let trDate = document.createElement('tr');
        let tdDate = document.createElement('td');
        tdDate.innerHTML = date[i];
        tdDate.style.width = '165px';
        tdDate.style.height = '50px';
        tdDate.style.textAlign = 'center';
        let tdPrice = document.createElement('td');
        tdPrice.innerHTML = price[i];
        tdPrice.style.width = '165px';
        tdPrice.style.height = '50px';
        tdPrice.style.textAlign = 'center';
        trDate.appendChild(tdDate);
        trDate.appendChild(tdPrice);
        table.appendChild(trDate);
    }  

    let sum = 0;
    for (let i = 1; i < price.length; i++) {
        sum = sum + price[i];
    }
    let average1 = sum / (price.length-1);
    let difference = [];
    for (let i = 1; i < price.length; i++) {
        difference.push(price[i] - average1);
    }
    let squery = [];
    for (let i = 0; i < difference.length; i++) {
        squery.push(difference[i] * difference[i]);
    }
    let average2 = 0;
    for (let i = 0; i < squery.length; i++) {
        average2 = average2 + squery[i];
    }
    let average3 = average2 / squery.length;
    let root = Math.sqrt(average3);
    document.getElementById('cell').innerHTML = 'Среднее отклонение ' + root.toFixed(3);

    let max = price[1];
    for (let i = 1; i < price.length; i++) {
        if (price[i] > max) {
            max = price[i];
        }
    }
    document.getElementById('cell1').innerHTML = 'Максимальное значение ' + max;

    let min = price[1];
    for (let i = 1; i < price.length; i++) {
        if (price[i] < min) {
            min = price[i];
        }
    document.getElementById('cell2').innerHTML = 'Минимальное значение ' + min;
    }
}

