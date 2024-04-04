$(document).ready(function()  {

    /* Function for carousel display*/
    carousel_item_idx = 0;
    // Carousel = document.getElementById('carousel-dots');
    _carousel_dot_prefix = 'img-dot-';
    CarouselDots = [];
    dot_number = 3;
    for (let i = 0; i < dot_number; i++) {
        CarouselDots.push(document.getElementById(_carousel_dot_prefix + i.toString()));
        CarouselDots[i].addEventListener('click', _change_active_dot.bind(this, i));
    }


    carousel_demo_item_idx = 0;
    _carousel_dot_prefix = 'img-dot-';
    CarouselDemoDots = [];
    dot_demo_number = 2;
    for (let i = 0; i < dot_demo_number; i++) {
        CarouselDemoDots.push(document.getElementById(_carousel_dot_prefix + (i+dot_number).toString()));
        CarouselDemoDots[i].addEventListener('click', _change_active_demo_dot.bind(this, i));
    }
});


function _change_active_dot (idx) {
    CarouselDots[idx].classList.add("active");
    if (carousel_item_idx != idx) {
        CarouselDots[carousel_item_idx].classList.remove("active");
    }
    carousel_item_idx = idx;
}
function _change_active_demo_dot (idx) {
    CarouselDemoDots[idx].classList.add("active");
    if (carousel_demo_item_idx != idx) {
        CarouselDemoDots[carousel_demo_item_idx].classList.remove("active");
    }
    carousel_demo_item_idx = idx;
}
