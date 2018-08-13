const items = document.querySelectorAll('.item');

function toggleActive() {
  this.classList.toggle('expand-item');
}

items.forEach(item => item.addEventListener('click', toggleActive));