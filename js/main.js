import {showScreen} from './core';
import intro from './intro';
import greeting from './greeting';

showScreen(intro);

document.addEventListener(`click`, (event) => {
  if (event.target.classList.contains(`back`) || event.target.parentNode.classList.contains(`back`)) {
    showScreen(greeting);
  }
});
