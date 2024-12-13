const carrossel = document.getElementById('carrossel');
const dotsContainer = document.getElementById('dots-container');
const totalImages = carrossel.children.length;
let currentIndex = 0;

function createDots() {
   for (let i = 0; i < totalImages; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.dataset.index = i;
      dot.addEventListener('click', () => {
         currentIndex = i;
         updateCarrossel();
      });
      dotsContainer.appendChild(dot);
   }
}

function updateCarrossel() {
   const width = carrossel.clientWidth;
   carrossel.style.transform = `translateX(${-currentIndex * width}px)`;
   updateDots();
}

function updateDots() {
   const dots = document.querySelectorAll('.dot');
   dots.forEach(dot => dot.classList.remove('active'));
   dots[currentIndex].classList.add('active');
}

function autoSlide() {
   currentIndex = (currentIndex + 1) % totalImages;
   updateCarrossel();
}

createDots();
updateCarrossel();

setInterval(autoSlide, 3000);

// Ajuste para quando a tela for redimensionada
window.addEventListener('resize', () => updateCarrossel());