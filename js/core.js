const getElementFromTemplate = (content) => {
  const elem = document.createElement(`div`);
  elem.innerHTML = content;
  return elem.innerHTML;
};

const showScreen = (screen) => {
  const container = document.querySelector(`.central`);
  container.innerHTML = screen;
}

export {getElementFromTemplate, showScreen};
