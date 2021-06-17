const switchThemes = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

document.getElementById('theme-switch-toggle').setAttribute('checked', true);
body.classList.add('dark-theme');

switchThemes.addEventListener('change', e => {
  const checkState = e.currentTarget.checked;

  localStorage.setItem('defaultTheme', checkState);

  if (!checkState) {
    body.classList.replace('dark-theme', 'light-theme');
  } else body.classList.replace('light-theme', 'dark-theme');
});

function onCurrentTheme() {
  const defaultTheme = localStorage.getItem('defaultTheme');
  if (defaultTheme === 'true') return;
  body.classList.replace('dark-theme', 'light-theme');
  document.getElementById('theme-switch-toggle').removeAttribute('checked');
}
onCurrentTheme();
