const containerWidth = 800;
const containerHeigth = 600;
let dvd;
let dvdPosition = {
    x: 0,
    y: 0
}
let vector = {
    x: 1,
    y: 1
}
let trailingDvd = false;

function preload() {
    dvd = loadImage('public/dvd.png');
}

function setup() {
    let canvas = createCanvas(containerWidth, containerHeigth);
    canvas.parent('sketch');
    initDvdPosition();
    initVector();
    updateColor();
    background(0);
}

function initDvdPosition() {
    dvdPosition.x = round(random(width / 8, width - (dvd.width * 2)));
    dvdPosition.y = round(random(height / 8, height - (dvd.height * 2)));
}

function initVector() {
    vector.x = round(random());
    vector.y = round(random());
    if (!vector.x)
        vector.x = -1;
    if (!vector.y)
        vector.y = -1;
}

function toggleTrailingDvd() {
    trailingDvd = !trailingDvd;
}

function draw() {
    if (!trailingDvd)
        background(0);
    stroke(0);
    image(dvd, dvdPosition.x += vector.x, dvdPosition.y += vector.y);
    updateVector();
}

function updateColor() {
    let r = random(256);
    let g = random(256);
    let b = random(256);
    let opacity;
    dvd.loadPixels();
    for (let x = 0; x < dvd.width; x++) {
        for (let y = 0; y < dvd.height; y++) {
            opacity = dvd.get(x, y)[3];
            if (opacity > 40) {
                dvd.set(x, y, color(r, g, b, opacity));
            }
        }
    }
    dvd.updatePixels();
}

function updateVector() {
    if (dvdPosition.x + dvd.width >= width || dvdPosition.x <= 0) {
        vector.x = -vector.x;
        updateColor();
    }

    if (dvdPosition.y + dvd.height >= height || dvdPosition.y <= 0) {
        vector.y = -vector.y;
        updateColor();
    }
}
