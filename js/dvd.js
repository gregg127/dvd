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
    dvd = loadImage('data:image/png;base64, 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');
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
