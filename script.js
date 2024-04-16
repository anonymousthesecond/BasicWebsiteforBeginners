const changeTextButton = document.getElementById('change-text');

changeTextButton.addEventListener('click', () => {
  const mainText = document.querySelector('main p');
  mainText.textContent = "This text has been changed by JavaScript!";
});
