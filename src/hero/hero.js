import './hero.css'; 
import html from './hero.html?raw'; 

export function initHero(container) {
  container.insertAdjacentHTML('beforeend', html);
}