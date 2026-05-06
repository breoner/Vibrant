import './footer.css'; 
import html from './footer.html?raw'; 

export function initFooter(container) {
  container.insertAdjacentHTML('beforeend', html);
}