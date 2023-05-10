
    const body = document.querySelector('body');
    const button = document.querySelector('.menu_button');
    const menu = document.querySelector('#menu');
    const overlay = document.querySelector('.overlay');
  
    button.addEventListener('click', () => {
      menu.classList.toggle('menu_off');
      overlay.classList.toggle('overlay-on');
      body.classList.toggle('menu_open');
    });

    overlay.addEventListener('click', () => {
      menu.classList.toggle('menu_off');
      overlay.classList.toggle('overlay-on');
      body.classList.toggle('menu_open');
    });