// Sakura (cherry blossom) effect with random icons
(function() {
  var icons = [
    '/assets/img/icon/1.png',
    '/assets/img/icon/2.png',
    '/assets/img/icon/3.png',
    '/assets/img/icon/5.png',
    '/assets/img/icon/6.png',
  ];
  function randomBetween(a, b) {
    return a + Math.random() * (b - a);
  }
  function createPetal(x, y) {
    var offsetX = 5; // 向右偏移像素
    var offsetY = 5; // 向下偏移像素
    var petal = document.createElement('div');
    petal.className = 'sakura-petal';
    petal.style.left = (x + offsetX) + 'px';
    petal.style.top = (y + offsetY) + 'px';
    petal.style.transform = 'scale(' + randomBetween(0.6, 1.2) + ') rotate(' + randomBetween(-30, 30) + 'deg)';
    var iconUrl = icons[Math.floor(Math.random() * icons.length)];
    petal.style.background = 'url(' + iconUrl + ') no-repeat center center / contain';
    document.body.appendChild(petal);
    setTimeout(function() {
      petal.style.transition = 'all 2.2s cubic-bezier(.4,0,.2,1)';
      petal.style.opacity = 0;
      petal.style.top = (y + offsetY + randomBetween(60, 120)) + 'px';
      petal.style.left = (x + offsetX + randomBetween(-40, 40)) + 'px';
    }, 10);
    setTimeout(function() {
      if (petal.parentNode) petal.parentNode.removeChild(petal);
    }, 2300);
  }

  var lastX = window.innerWidth / 2;
  var lastY = window.innerHeight / 2;

  document.addEventListener('mousemove', function(e) {
    lastX = e.clientX;
    lastY = e.clientY;
    if (Math.random() < 0.28) {
      createPetal(lastX, lastY);
    }
  });

  setInterval(function() {
    createPetal(lastX, lastY);
  }, 120);
})();
