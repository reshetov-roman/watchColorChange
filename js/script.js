function changeColor(e) {
  document.querySelectorAll('span.active').forEach(function(item) {
    item.classList.remove('active');
  })
  e.target.classList.add('active');
}



