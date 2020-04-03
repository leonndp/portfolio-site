export default class HoverOverlay {
    constructor(els) {
        this.elements = els
        this.lastActiveItem = null

        this.events();
    }

    events() {
        this.elements.forEach(el => {
            el.addEventListener('click', () => {
                this.handleHideOverlay(this.lastActiveItem)
                this.handleShowOverlay(el)
            })

            el.addEventListener('mouseenter', () => {
                this.handleShowOverlay(el)
            })

            el.addEventListener('focus', () => {
                this.handleShowOverlay(el)
            })

            el.addEventListener('mouseleave', () => {
                this.handleHideOverlay(el)
            })

            el.addEventListener('blur', () => {
                this.handleHideOverlay(el)
            })
        })
    }

    handleShowOverlay(el) {
        el.querySelector('.hover-overlay').classList.add('hover-overlay--is-visible')
        this.lastActiveItem = el
    }

    handleHideOverlay(el) {
        el.querySelector('.hover-overlay').classList.remove('hover-overlay--is-visible')
    }
}