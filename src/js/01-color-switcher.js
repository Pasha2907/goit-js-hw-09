const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  bodyId: document.querySelector('body'),
};

let timerId = null;

function getRandomHexColor() {
  return (refs.bodyId.style.background = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`);
}
refs.startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    getRandomHexColor();
    refs.startBtn.setAttribute('disabled', 'disabled');
    refs.stopBtn.removeAttribute('disabled');
  }, 1000);
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', 'disabled');
});
