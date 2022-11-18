((d) => {
    // Selectors DOM
    const $btnHamburger = d.querySelector(".btn-hamburger");
    const $menuNav = d.querySelector(".nav-list");
    
    //Events
    $btnHamburger.addEventListener('click', () =>{
        let btnState = $btnHamburger.getAttribute("aria-expanded");
        $menuNav.classList.toggle('active');
        $btnHamburger.setAttribute("aria-expanded", btnState === 'true' ? false : true);
    });

    d.addEventListener('click', (e) => {
        if(!e.target.matches('.nav-list a')) return false;
        $menuNav.classList.remove('active');
        $btnHamburger.setAttribute("aria-expanded", false);
    })
})(document);
