import './download.css'; 
import html from './download.html?raw'; 

export function initDownload(container) {
  container.insertAdjacentHTML('beforeend', html);
}