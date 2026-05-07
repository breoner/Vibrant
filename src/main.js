import './reset/reset.css';
import './reset/container.css';


import { initHeader } from './header/header.js';
import { initHero} from './hero/hero.js';
import { initControl } from './control/control.js';
import { initDownload } from './download/download.js';
import { initPeople} from './people/people.js';
import { initPlan} from './plan/plan.js';
import { initFooter } from './footer/footer.js';

const app = document.querySelector('#app');

initHeader(app);
initHero(app);
initControl(app);
initDownload(app);
initPeople(app);
initPlan(app);
initFooter(app);










