// Faz as imagens do carrossel passarem automaticamente
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slides img'); // Seleciona todas as imagens dentro da classe 'slides'
    
    // Esconde todas as imagens
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Incrementa o índice do slide
    slideIndex++;

    // Se passar do número total de slides, volta para o primeiro
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Exibe o slide atual
    slides[slideIndex - 1].style.display = "block";

    // Troca o slide a cada 2 segundos
    setTimeout(showSlides, 2000);
}

// ===================
// Contador de tempo
// ===================

// Define a data de início do contador (7 de julho de 2024)
const startDate = new Date(2024, 6, 7, 0, 0, 0); // Lembre-se: mês começa em 0 (janeiro),entao julho e 6,

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
