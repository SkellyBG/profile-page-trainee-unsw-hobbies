// document.querySelector('.hobby-puzzling-content').classList.add('.hidden');
document.querySelector('.hobby-baking-content').classList.add('hidden');
document.querySelector('.hobby-board-gaming-content').classList.add('hidden');

document.querySelector('.hobby-puzzling').addEventListener('click', () => {
  document.querySelector('.hobby-puzzling-content').classList.remove('hidden');
  document.querySelector('.hobby-baking-content').classList.add('hidden');
  document.querySelector('.hobby-board-gaming-content').classList.add('hidden');
});

document.querySelector('.hobby-baking').addEventListener('click', () => {
  document.querySelector('.hobby-puzzling-content').classList.add('hidden');
  document.querySelector('.hobby-baking-content').classList.remove('hidden');
  document.querySelector('.hobby-board-gaming-content').classList.add('hidden');
});

document.querySelector('.hobby-board-gaming').addEventListener('click', () => {
  document.querySelector('.hobby-puzzling-content').classList.add('hidden');
  document.querySelector('.hobby-baking-content').classList.add('hidden');
  document.querySelector('.hobby-board-gaming-content').classList.remove('hidden');
});