const scrollButton = document.querySelector('.scrollup')
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}
scrollButton.onclick = function() {
    document.documentElement.scrollTop = 0;
}