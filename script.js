window.addEventListener('scroll', function () {
  const scrollTrigger = document.getElementById('scroll-trigger');
  const scrollThreshold = 640;

  const scrollPosition = window.scrollY;

  if (window.innerWidth < 47.5 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
    if (scrollPosition > scrollThreshold && !scrollTrigger.checked) {
      scrollTrigger.checked = true;
    } else if (scrollPosition <= scrollThreshold && scrollTrigger.checked) {
      scrollTrigger.checked = false;
    }
  }
});

window.addEventListener('scroll', function () {
  const scrollTrigger = document.getElementById('scroll-trigger2');
  const scrollThreshold = 931;

  const scrollPosition = window.scrollY;

  if (window.innerWidth < 47.5 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
    if (scrollPosition > scrollThreshold && !scrollTrigger.checked) {
      scrollTrigger.checked = true;
    } else if (scrollPosition <= scrollThreshold && scrollTrigger.checked) {
      scrollTrigger.checked = false;
    }
  }
});

window.addEventListener('scroll', function () {
  const scrollTrigger = document.getElementById('scroll-trigger3');
  const scrollThreshold = 1239;

  const scrollPosition = window.scrollY;

  if (window.innerWidth < 47.5 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
    if (scrollPosition > scrollThreshold && !scrollTrigger.checked) {
      scrollTrigger.checked = true;
    } else if (scrollPosition <= scrollThreshold && scrollTrigger.checked) {
      scrollTrigger.checked = false;
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const navBar = document.getElementById('click-trigger');
  const resumeMenuButton = document.getElementById('resume-menu');
  const mobileNavBackground = document.getElementById('mobile-nav-background');
  const navExit = document.getElementById('mobile-nav-exit');
  const contactMeLink = document.getElementById('contact-me-link');

  const contactMePopUp = document.getElementById('contact-me-pop-up');
  const contactMeButton = document.getElementById('contact-me');
  const contactMeBackground = document.getElementById('contact-me-background');
  const contactExit = document.getElementById('contact-exit');

  function hideNav() {
    navBar.style.left = '-275px';
    mobileNavBackground.style.display = 'none';
    navExit.style.right = '-70px';
  }

  function showContact() {
    contactMePopUp.style.display = 'flex';
    contactMeBackground.style.display = 'block';
    contactExit.style.display = 'block';
  }

  function hideContact() {
    contactMePopUp.style.display = 'none';
    contactMeBackground.style.display = 'none';
    contactExit.style.display = 'none';
  }

  hideNav(); 
  hideContact(); 

  resumeMenuButton.addEventListener('click', function () {
    hideContact(); 
    if (navBar.style.left === '-275px') {
      navBar.style.left = '0';
      mobileNavBackground.style.display = 'block';
      navExit.style.right = '10px';
    } else {
      hideNav(); 
    }
  });

  mobileNavBackground.addEventListener('click', function () {
    hideNav();
  });

  navExit.addEventListener('click', function () {
    hideNav();
  });

  contactMeLink.addEventListener('click', function (event) {
    showContact(); 
  });

  contactMeButton.addEventListener('click', function (event) {
    event.preventDefault(); 
    hideNav(); 
    showContact(); 
  });

  contactMeBackground.addEventListener('click', function () {
    hideContact();
  });

  contactExit.addEventListener('click', function () {
    hideContact();
  });
});
