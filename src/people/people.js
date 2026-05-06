import './people.css'; 
import html from './people.html?raw'; 

export function initPeople(container) {
  container.insertAdjacentHTML('beforeend', html);
}