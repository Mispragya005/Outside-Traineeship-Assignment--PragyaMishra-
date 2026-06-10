document.querySelectorAll('.item__question').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var item = btn.parentElement;
    var icon = btn.querySelector('.item__icon');
    var isOpen = item.classList.contains('open');

    document.querySelectorAll('.item').forEach(function(el) {
      el.classList.remove('open');
      el.querySelector('.item__icon').innerHTML = '&#8964;'; 
    });

    if (!isOpen) {
      item.classList.add('open');
      icon.innerHTML = '&#8963;'; 
    }
  });
});