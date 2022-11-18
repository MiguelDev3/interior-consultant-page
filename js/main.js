((d) => {
    // Selectors DOM
    const $btnHamburger = d.querySelector(".btn-hamburger");
    const $menuNav = d.querySelector(".nav-list");
    const $btnChangeTheme = d.querySelector("#btn-change-theme");
    const sunIcon = `<span class="material-symbols-outlined">
    brightness_5
    </span>`
    const moonIcon = `<span class="material-symbols-outlined">
    dark_mode
    </span>`

    //Events
    $btnHamburger.addEventListener('click', () =>{
        let btnState = $btnHamburger.getAttribute("aria-expanded");
        $menuNav.classList.toggle('active');
        $btnHamburger.setAttribute("aria-expanded", btnState === 'true' ? false : true);
    });
    $btnChangeTheme.addEventListener('click', () => {
        d.querySelector('body').classList.toggle("dark");
        if(d.querySelector('body').className === "dark"){
            $btnChangeTheme.innerHTML = moonIcon;
        }else{
            $btnChangeTheme.innerHTML = sunIcon;
        }
    })

    d.addEventListener('click', (e) => {
        if(!e.target.matches('.nav-list a')) return false;
        $menuNav.classList.remove('active');
        $btnHamburger.setAttribute("aria-expanded", false);
    })
})(document);
