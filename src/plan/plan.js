import './plan.css'; 
import html from './plan.html?raw'; 

export function initPlan(container) {
  container.insertAdjacentHTML('beforeend', html);
}