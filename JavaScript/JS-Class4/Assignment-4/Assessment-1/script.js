const toggle = document.getElementById('btn');
const sidebar = document.getElementById('sidebar');
const menuIcon = document.getElementById('menu');
const closeIcon = document.getElementById('close');

let isThrottled = false;

toggle.addEventListener('click', () => {

  if (isThrottled) return;

  isThrottled = true;

  sidebar.classList.toggle('open');

  const isOpen = sidebar.classList.contains('open');

  menuIcon.style.display = isOpen ? 'none' : 'inline';
  closeIcon.style.display = isOpen ? 'inline' : 'none';

  setTimeout(() => {
    isThrottled = false;
  }, 500);

});