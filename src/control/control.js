import './control.css'; 
import html from './control.html?raw'; 

export function initControl(container) {
  container.insertAdjacentHTML('beforeend', html);
}