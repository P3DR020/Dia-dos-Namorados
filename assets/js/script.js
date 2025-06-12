let slideIndex = 0;
    const slides = document.querySelectorAll('.slides img');
    let autoSlideInterval;

    function showSlides(index) {
      slides.forEach((slide, i) => {
        slide.style.display = "none";
        slide.classList.remove('active');
      });

      // Wrap index
      if (index >= slides.length) {
        slideIndex = 0;
      } else if (index < 0) {
        slideIndex = slides.length - 1;
      } else {
        slideIndex = index;
      }

      slides[slideIndex].style.display = "block";
      slides[slideIndex].classList.add('active');
    }

    function nextSlide() {
      showSlides(slideIndex + 1);
    }

    function prevSlide() {
      showSlides(slideIndex - 1);
    }

    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(nextSlide, 2000);
    }

    document.getElementById('nextBtn').addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });

    // Show initial slide
    showSlides(slideIndex);

    // Start auto slide
    autoSlideInterval = setInterval(nextSlide, 3000);


// ===================
// Contador de tempo
// ===================

// Define a data de início do contador (7 de julho de 2024)
const startDate = new Date(2022, 7, 20, 0, 0, 0); // Lembre-se: mês começa em 0 (janeiro),entao julho e 6,

// Função para animar a troca de valor no contador
function animateChange(id, newValue) {
  const element = document.getElementById(id);
  if (element.textContent !== newValue) {
    element.textContent = newValue;
    element.classList.add('changed');
    setTimeout(() => element.classList.remove('changed'), 300);
  }
}

// Função que calcula o número de dias no mês de uma data
function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

// Função que atualiza o contador com precisão
function updateTimer() {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  // Ajuste de segundos
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }

  // Ajuste de minutos
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }

  // Ajuste de horas
  if (hours < 0) {
    hours += 24;
    days--;
  }

  // Ajuste de dias
  if (days < 0) {
    months--;
    const prevMonth = (now.getMonth() - 1 + 12) % 12;
    const prevYear = prevMonth === 11 ? now.getFullYear() - 1 : now.getFullYear();
    days += daysInMonth(prevYear, prevMonth);
  }

  // Ajuste de meses
  if (months < 0) {
    months += 12;
    years--;
  }

  // Atualiza os elementos no HTML com animação
  animateChange('years', String(years).padStart(2, '0'));
  animateChange('months', String(months).padStart(2, '0'));
  animateChange('days', String(days).padStart(2, '0'));
  animateChange('hours', String(hours).padStart(2, '0'));
  animateChange('minutes', String(minutes).padStart(2, '0'));
  animateChange('seconds', String(seconds).padStart(2, '0'));
}

// Inicializa o contador e atualiza a cada segundo
updateTimer();
setInterval(updateTimer, 1000);




// Carrossel de motivos




let motivoIndex = 0;
const motivoSlides = document.querySelector('.motivos-slides');
const motivos = document.querySelectorAll('.motivo');
const motivoIndicatorsContainer = document.querySelector('.motivo-indicators');

// Criar os indicadores
motivos.forEach((_, index) => {
    const indicator = document.createElement('span');
    indicator.addEventListener('click', () => {
        motivoIndex = index;
        updateMotivoSlide();
        resetMotivoAutoSlide();
    });
    motivoIndicatorsContainer.appendChild(indicator);
});

const motivoIndicators = document.querySelectorAll('.motivo-indicators span');

function updateMotivoSlide() {
    const slideWidth = motivos[0].offsetWidth;
    motivoSlides.style.transform = `translateX(-${motivoIndex * slideWidth}px)`;
    motivoIndicators.forEach(ind => ind.classList.remove('active'));
    motivoIndicators[motivoIndex].classList.add('active');
}

document.querySelector('.motivo-next').addEventListener('click', () => {
    motivoIndex = (motivoIndex + 1) % motivos.length;
    updateMotivoSlide();
    resetMotivoAutoSlide();
});

document.querySelector('.motivo-prev').addEventListener('click', () => {
    motivoIndex = (motivoIndex - 1 + motivos.length) % motivos.length;
    updateMotivoSlide();
    resetMotivoAutoSlide();
});

// Auto slide
let motivoAutoSlide = setInterval(() => {
    motivoIndex = (motivoIndex + 1) % motivos.length;
    updateMotivoSlide();
}, 4000);

function resetMotivoAutoSlide() {
    clearInterval(motivoAutoSlide);
    motivoAutoSlide = setInterval(() => {
        motivoIndex = (motivoIndex + 1) % motivos.length;
        updateMotivoSlide();
    }, 10000);
}

updateMotivoSlide();


//Chuva de corações tela principal//

const totalHearts = 50;

  for (let i = 0; i < totalHearts; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 2 + Math.random() * 3 + "s";
    heart.style.animationDelay = Math.random() * 5 + "s";
    document.body.appendChild(heart);
  }
  