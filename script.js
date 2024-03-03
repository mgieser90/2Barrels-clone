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

document.addEventListener('DOMContentLoaded', function () {
  const navBar = document.getElementById('click-trigger');
  const resumeMenuButton = document.getElementById('resume-menu');

  navBar.style.left = '-275px'; // Set initial state to hidden

  resumeMenuButton.addEventListener('click', function () {
    if (navBar.style.left === '-275px') {
      navBar.style.left = '0';
    } else {
      navBar.style.left = '-275px';
    }
  });
});
