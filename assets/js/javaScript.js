const navbar = document.querySelectorAll('nav ul li');
    navbar.forEach(menuItem => {
      menuItem.addEventListener('mouseenter', () => {
        const navbarLink = menuItem.querySelector('a');
        navbarLink.style.color = '#ff0000';
      });

      menuItem.addEventListener('mouseleave', () => {
        const navbarLink = menuItem.querySelector('a');
        navbarLink.style.color = '#000';
      });
    });
