import './header.css'; 
import html from './header.html?raw'; 

export function initHeader(container) {
  container.insertAdjacentHTML('beforeend', html);
}