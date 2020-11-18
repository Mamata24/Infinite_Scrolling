async function loadImages() {
    const imageDiv = document.createElement('div');
    imageDiv.className = 'one-fourth';

    const imgElement = document.createElement('img');
    imgElement.src = `https://placekitten.com/${generateSize(150)}/${generateSize(200)}`;

    imageDiv.append(imgElement);
    document.querySelector('.container').append(imageDiv);
}
function generateSize(min) {
    var randomNumber = Math.ceil(Math.random() * 200);
    return randomNumber + min;
}



function getRandomImages(number) {
    for (var i = 0; i < number; i++) {
        loadImages();
    }
}


getRandomImages(25);

window.addEventListener('scroll', function () {
    if (window.scrollY + window.innerHeight + 100 >= document.documentElement.scrollHeight) {
        getRandomImages(25);
    }
})