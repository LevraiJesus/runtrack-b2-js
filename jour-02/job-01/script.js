function myChangeBackgroundColor() {
    const width = window.innerWidth;

    if (width >= 1337) {
        document.documentElement.style.backgroundColor = "#ffb703";
    } else if (width >= 505 && width <= 1336) {
        document.documentElement.style.backgroundColor = "#d90429";
    } else {
        document.documentElement.style.backgroundColor = "#003049";
    }
}

window.addEventListener('load', myChangeBackgroundColor);
window.addEventListener('resize', myChangeBackgroundColor);
