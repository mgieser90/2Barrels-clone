window.addEventListener('scroll', function () {
  const scrollTrigger = document.getElementById('scroll-trigger');
  const scrollThreshold = 640;

  const scrollPosition = window.scrollY;

  if (scrollPosition > scrollThreshold && !scrollTrigger.checked) {
    scrollTrigger.checked = true;
  } else if (scrollPosition <= scrollThreshold && scrollTrigger.checked) {
    scrollTrigger.checked = false;
  }
});

window.addEventListener('scroll', function () {
  const scrollTrigger = document.getElementById('scroll-trigger2');
  const scrollThreshold = 931;

  const scrollPosition = window.scrollY;

  if (scrollPosition > scrollThreshold && !scrollTrigger.checked) {
    scrollTrigger.checked = true;
  } else if (scrollPosition <= scrollThreshold && scrollTrigger.checked) {
    scrollTrigger.checked = false;
  }
});

window.addEventListener('scroll', function () {
  const scrollTrigger = document.getElementById('scroll-trigger3');
  const scrollThreshold = 1239;

  const scrollPosition = window.scrollY;

  if (scrollPosition > scrollThreshold && !scrollTrigger.checked) {
    scrollTrigger.checked = true;
  } else if (scrollPosition <= scrollThreshold && scrollTrigger.checked) {
    scrollTrigger.checked = false;
  }
});

document.getElementById('resume-menu').addEventListener('click', function () {
  const navBar = document.getElementById('click-trigger');
  if (navBar.style.left === '-275px') {
    navBar.style.left = '0';
  } else {
    navBar.style.left = '-275px';
  }
});
