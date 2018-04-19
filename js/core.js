const getElementFromTemplate = (content) => {
  const elem = document.createElement(`div`);
  elem.innerHTML = content;
  return elem.innerHTML;
};

const container = document.querySelector(`.central`);

const showScreen = (screen) => {
  container.innerHTML = screen;
};

export {getElementFromTemplate, showScreen};
