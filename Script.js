let correctDoor = Math.floor(Math.random() * 3);
const doors = document.querySelectorAll('.door');
const message = document.getElementById('message');
const resultadoImagem = document.getElementById('resultado-imagem');
const erroGrande = document.getElementById('erro-grande');
const presenteGrande = document.getElementById('presente-grande');

doors.forEach(door => {
  door.addEventListener('click', () => {
    const index = parseInt(door.dataset.index);

    if (index === correctDoor) {
      // Acertou
      message.textContent = "🎉 Acertou! Parabéns!";
      message.style.color = "lime";
      resultadoImagem.style.display = "none";
      erroGrande.style.display = "none";
      presenteGrande.style.display = "flex";

      setTimeout(() => {
        presenteGrande.style.display = "none";
        shuffleDoors();
        message.textContent = "Selecione a porta com o presente!";
        message.style.color = "yellow";
      }, 4000);

    } else {
      // Errou
      message.textContent = "💥 Errou! Embaralhando...";
      message.style.color = "red";
      resultadoImagem.style.display = "none";
      presenteGrande.style.display = "none";
      erroGrande.style.display = "flex";

      setTimeout(() => {
        erroGrande.style.display = "none";
        shuffleDoors();
        message.textContent = "Tente novamente!";
        message.style.color = "yellow";
      }, 1500);
    }
  });
});

function shuffleDoors() {
  doors.forEach(door => door.classList.add('shuffling'));

  setTimeout(() => {
    const container = document.getElementById('doors-container');
    const shuffled = Array.from(doors).sort(() => Math.random() - 0.5);
    shuffled.forEach(door => container.appendChild(door));

    doors.forEach(door => door.classList.remove('shuffling'));
    correctDoor = Math.floor(Math.random() * 3);

    resultadoImagem.style.display = "none";
  }, 1000);
}
