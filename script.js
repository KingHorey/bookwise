const words = document.querySelectorAll('.word');
let index = 0;

setInterval(() => {
  words[index].classList.remove('active');
  index = (index + 1) % words.length;
  words[index].classList.add('active');
}, 10000);