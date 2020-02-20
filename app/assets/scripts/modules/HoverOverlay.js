export default class HoverOverlay {
    constructor(els, textRef) {
        this.elements = els
        this.text = textRef

        this.injectHTML()

        this.events();
    }

    events() {
        this.elements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                const overlay = el.querySelector('.hover-overlay')
                this.handleShowOverlay(overlay)
            })

            el.addEventListener('mouseleave', () => {
                const overlay = el.querySelector('.hover-overlay')
                this.handleHideOverlay(overlay)
            })
        })
    }

    handleShowOverlay(overlay) {
        overlay.classList.add('hover-overlay--is-visible')
    }

    handleHideOverlay(overlay) {
        overlay.classList.remove('hover-overlay--is-visible')
    }

    injectHTML() {
        this.elements.forEach(el => {
            el.insertAdjacentHTML('afterbegin', `
                <div class="hover-overlay"></div>
            `)
        })
    }
}