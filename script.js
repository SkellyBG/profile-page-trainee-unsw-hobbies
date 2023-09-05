// document.querySelector('.hobby-puzzling-content').classList.add('.hidden');
document.querySelector('.hobby-baking-content').classList.add('hidden');
document.querySelector('.hobby-board-gaming-content').classList.add('hidden');
document.querySelector('.hobby-baking').classList.add('clickable');
document.querySelector('.hobby-board-gaming').classList.add('clickable');

document.querySelector('.hobby-puzzling').addEventListener('click', () => {
  document.querySelector('.hobby-puzzling-content').classList.remove('hidden');
  document.querySelector('.hobby-baking-content').classList.add('hidden');
  document.querySelector('.hobby-board-gaming-content').classList.add('hidden');
  document.querySelector('.hobby-puzzling').classList.remove('clickable');
  document.querySelector('.hobby-baking').classList.add('clickable');
  document.querySelector('.hobby-board-gaming').classList.add('clickable');
});

document.querySelector('.hobby-baking').addEventListener('click', () => {
  document.querySelector('.hobby-puzzling-content').classList.add('hidden');
  document.querySelector('.hobby-baking-content').classList.remove('hidden');
  document.querySelector('.hobby-board-gaming-content').classList.add('hidden');
  document.querySelector('.hobby-puzzling').classList.add('clickable');
  document.querySelector('.hobby-baking').classList.remove('clickable');
  document.querySelector('.hobby-board-gaming').classList.add('clickable');
});

document.querySelector('.hobby-board-gaming').addEventListener('click', () => {
  document.querySelector('.hobby-puzzling-content').classList.add('hidden');
  document.querySelector('.hobby-baking-content').classList.add('hidden');
  document.querySelector('.hobby-board-gaming-content').classList.remove('hidden');
  document.querySelector('.hobby-puzzling').classList.add('clickable');
  document.querySelector('.hobby-baking').classList.add('clickable');
  document.querySelector('.hobby-board-gaming').classList.remove('clickable');
});