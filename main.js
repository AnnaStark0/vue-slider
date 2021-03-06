// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

// Consigli del giorno:
// - regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css 
// dell'esercizio svolto qualche giorno fa: è già tutto pronto!
// - il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)
// - oltre a Vue, ora abbiamo diversi strumenti in più nelle nostre tasche, che possono tornarci utili per svolgere 
// l'esercizio in una versione più evoluta ed efficace, soprattutto per quando riguarda la struttura dei dati. 
// Forse questa volta possiamo fare qualcosa di meglio di 3 array separati... sì, ma cosa?


const app = new Vue({
            el: '#root',
            data: {
                images: [
                    'img/avengers.jpg',
                    'img/stranger.jpg',
                    'img/starlord.jpg',
                    'img/wanda.jpg',
                    'img/ironman.jpg'
                ],
                currentImg: 0
            },
            methods: {
                nextImage: function () {
                    if( this.currentImg == this.images.length - 1 ) {
                        this.currentImg = 0;
                    } else {
                    this.currentImg++;
                    }
                },
                prevImage: function () {
                    if ( this.currentImg == 0 ) {
                        this.currentImg = this.images.length - 1;
                    } else {
                    this.currentImg--;
                    }
                },
                selectImg: function (index) {
                    this.currentImg = index;
                },
 } });