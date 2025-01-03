function atualizarContador() {
   const dataAlvo = new Date('2025-01-26T00:00:00');
   const agora = new Date();
   const diferenca = dataAlvo - agora;

   if (diferenca <= 0) {
      document.querySelector('.contador h1').textContent = 'Chegou o dia!';
      document.querySelectorAll('.time div span').forEach(el => el.textContent = '0');
      return;
   }

   const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
   const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
   const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

   document.getElementById('dias').textContent = dias;
   document.getElementById('horas').textContent = horas;
   document.getElementById('minutos').textContent = minutos;
   document.getElementById('segundos').textContent = segundos;
}

setInterval(atualizarContador, 1000);