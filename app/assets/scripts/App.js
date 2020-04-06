import TypeWriter from './modules/TypeWriter'
import HoverOverlay from './modules/HoverOverlay'
import StickyHeader from './modules/StickyHeader'
import '../styles/styles.css';

if (module.hot) {
    module.hot.accept();
}

const typeWriter = new TypeWriter();
const stickyHeader = new StickyHeader();
const skillItemsOverlay = new HoverOverlay(document.querySelectorAll('.skill-item'));

const projectItemsOverlay = new HoverOverlay(document.querySelectorAll('.project-item'));