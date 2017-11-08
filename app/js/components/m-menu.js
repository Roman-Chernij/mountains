function Mmenu() {
    this.headerTop = document.querySelector('.header-top');
    this.headerLine = this.headerTop.querySelector('.header-top-line');
    this.navList = this.headerLine.querySelector('.nav-list');
    this.init();

    window.addEventListener('scroll', this.scroll.bind(this));
}


Mmenu.prototype = Object.create(App.prototype);

Mmenu.prototype.init = function () {
    const cloneNav = this.navList.cloneNode(true),
          markup = '<div class="mobi-nav"></div>';
    this.headerLine.insertAdjacentHTML('beforeEnd', markup);
    const mobiNav = this.headerLine.querySelector('.mobi-nav');
    mobiNav.appendChild(cloneNav);
};

Mmenu.prototype.scroll = function () {

        const contentSection = document.querySelector('main').firstElementChild.offsetTop,
              windowScroll = window.pageYOffset;

        if(windowScroll >= contentSection ) {
            this.headerTop.classList.add('header-fixed');
        } else {
            this.headerTop.classList.remove('header-fixed');
        }

};