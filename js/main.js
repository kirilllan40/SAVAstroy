function burgerInit(e) {
    const burgerIcon = e.target.closest('.burger-icon');
    const burgerNavlink = e.target.closest('.contacts__link');

    if (!burgerIcon && !burgerNavlink) return;
    if (document.documentElement.clientWidth > 900) return;

    if (!document.body.classList.contains('body--opened-menu')) {
        document.body.classList.add('body--opened-menu');
    } else {
        document.body.classList.remove('body--opened-menu');
    }
}

document.addEventListener('click', burgerInit);