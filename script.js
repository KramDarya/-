const button = document.getElementById('glow-on-hover');
const message = document.getElementById('myLoveMessage');
const heart1 = document.getElementById('heart1');


// Функция для добавления изображения в элемент "heart"
function addImageToHeart() {
    heart1.innerHTML = '<img src="your_image_url.jpg" alt="Love Image">';
}

button.addEventListener('click', function() {
    message.classList.remove('hidden');
});


  