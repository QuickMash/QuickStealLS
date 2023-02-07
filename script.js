document.getElementById('openMenu').addEventListener('click', () => {
  const menu = document.getElementById('menu');
  if (menu.style.display === 'block') menu.style.display = 'none';
  else menu.style.display = 'block';
