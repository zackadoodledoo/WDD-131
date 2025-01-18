const themeSelector = document.querySelector('#theme-selector');
const body = document.body;
const logo = document.querySelector('footer img');

function changeTheme() {
    const theme = themeSelector.value;
    if (theme === 'dark') {
        body.classList.add('dark');
        logo.src = 'https://i.ibb.co/dkfRccH/byui-logo-blue.webp';
    } else {
        body.classList.remove('dark');
        logo.src = 'byui-logo.png';
    }
}

themeSelector.addEventListener('change', changeTheme);
