var images = [
    "url(img/slider.jpg)",
    "url(img/slider1.png)",
    "url(img/slider2.jpg)"
];

var num = 0;

function next() {
    num++;
    if (num>=images.length) {
        num=0;
    }    
    document.getElementById('slid').style.backgroundImage = images[num];
}

function prev() {
    num--;
    if (num<0) {
        num=images.length-1;
    }
    document.getElementById('slid').style.backgroundImage = images[num];
}