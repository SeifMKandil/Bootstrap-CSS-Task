var level = 1;
var numImages = 4;
var uniqueImageIndex = 0;
function createImage(imagePath, x, y, isUnique, screenWidth, screenHeight) {
    var _a;
    var container = document.createElement('div');
    var vl = document.createElement('div');
    vl.className = "vl";
    container.className = "flex-child";
    var img = document.createElement('img');
    img.src = imagePath;
    img.style.position = "absolute";
    img.style.width = "80px";
    img.style.top = y + "px";
    img.style.left = x + "px";
    container.appendChild(img);
    container.appendChild(vl);
    (_a = document.querySelector('.left-panel')) === null || _a === void 0 ? void 0 : _a.appendChild(container);
    if (!isUnique) {
        var mirroredImg = document.createElement('img');
        mirroredImg.src = imagePath;
        mirroredImg.style.position = "absolute";
        mirroredImg.style.width = "80px";
        mirroredImg.style.top = y + "px";
        mirroredImg.style.right = x + "px";
        container.appendChild(mirroredImg);
    }
    else {
        img.classList.add("unique-image");
        img.style.cursor = "pointer";
        img.addEventListener('click', function () {
            level++;
            numImages++;
            uniqueImageIndex = Math.floor(Math.random() * numImages);
            alert('Congratulations! Moving to Level ' + level);
            resetGame();
            Game();
        });
    }
    return img;
}
function resetGame() {
    var leftPanel = document.querySelector('.left-panel');
    if (leftPanel) {
        leftPanel.innerHTML = '';
    }
}
function Game() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    console.log(screenWidth, screenHeight);
    var images = ["./imgs/Face.png", './imgs/Face1.png', './imgs/Face2.png', './imgs/Face3.png', './imgs/Face4.png', './imgs/Face5.png', './imgs/Face6.png', './imgs/Face7.png', './imgs/Face8.png', './imgs/Face9.png'];
    for (var i = 0; i < numImages; i++) {
        var imagePath = images[i];
        var randomY = Math.random() * (screenHeight - 180);
        var randomX = Math.random() * ((screenWidth / 2) - 180);
        createImage(imagePath, randomX, randomY, i === uniqueImageIndex, screenWidth, screenHeight);
    }
}
Game();
