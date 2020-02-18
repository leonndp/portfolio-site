export default class TypeWriter {
    constructor() {
        this.txtElement = document.querySelector('.typewriter');
        this.words = JSON.parse(this.txtElement.getAttribute('data-words'))
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(this.txtElement.getAttribute('data-wait'), 10);
        this.type();
    }

    type() {
        // you can make shit loop infinitely using modulo!
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        this.txt = fullTxt.substring(0, this.txt.length + 1);
        this.txtElement.textContent = this.txt;

        let typeSpeed = 200;

        if (this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.txt = '';
            this.wordIndex++;
        }

        setTimeout(() => this.type(), typeSpeed);

    }
}