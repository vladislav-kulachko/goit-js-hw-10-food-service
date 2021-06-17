const switchThemes = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
switchThemes.addEventListener('change', () => {
  if (body.classList.contains('light-theme')) {
    body.classList.replace('light-theme', 'dark-theme');
  } else body.classList.replace('dark-theme', 'light-theme');
});
