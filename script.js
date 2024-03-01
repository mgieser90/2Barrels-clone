window.addEventListener('scroll', function () {
  var scrollTrigger = document.getElementById('scroll-trigger');
  var scrollThreshold = 740;

  var scrollPosition = window.scrollY;

  if (scrollPosition > scrollThreshold && !scrollTrigger.checked) {
    scrollTrigger.checked = true;
  } else if (scrollPosition <= scrollThreshold && scrollTrigger.checked) {
    scrollTrigger.checked = false;
  }
});

window.addEventListener('scroll', function () {
  var scrollTrigger = document.getElementById('scroll-trigger2');
  var scrollThreshold = 1031;

  var scrollPosition = window.scrollY;

  if (scrollPosition > scrollThreshold && !scrollTrigger.checked) {
    scrollTrigger.checked = true;
  } else if (scrollPosition <= scrollThreshold && scrollTrigger.checked) {
    scrollTrigger.checked = false;
  }
});

window.addEventListener('scroll', function () {
  var scrollTrigger = document.getElementById('scroll-trigger3');
  var scrollThreshold = 1339;

  var scrollPosition = window.scrollY;

  if (scrollPosition > scrollThreshold && !scrollTrigger.checked) {
    scrollTrigger.checked = true;
  } else if (scrollPosition <= scrollThreshold && scrollTrigger.checked) {
    scrollTrigger.checked = false;
  }
});