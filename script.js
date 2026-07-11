// =========================
// SCIENTIFIC CALCULATOR
// =========================

const display = document.getElementById("display");

function append(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById("display");

    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function squareRoot() {
    let display = document.getElementById("display");

    try {
        display.value = Math.sqrt(eval(display.value));
    } catch {
        display.value = "Error";
    }
}


// =========================
// DIAMETER
// =========================

function diameterFromRadius() {
    let r = Number(document.getElementById("radiusDiameter").value);

    document.getElementById("diameterResult").innerHTML =
    "Answer: " + (2 * r);
}

function radiusFromDiameter() {
    let d = Number(document.getElementById("diameterRadius").value);

    document.getElementById("radiusResult").innerHTML =
    "Answer: " + (d / 2);
}

function circumference() {
    let d = Number(document.getElementById("circDiameter").value);

    document.getElementById("circResult").innerHTML =
    "Answer: " + (Math.PI * d).toFixed(2);
}

function circleArea() {
    let r = Number(document.getElementById("circleRadius").value);

    document.getElementById("circleAreaResult").innerHTML =
    "Answer: " + (Math.PI * r * r).toFixed(2);
}

function diameterFromCircumference() {
    let c = Number(document.getElementById("circInput").value);

    document.getElementById("diameterCircResult").innerHTML =
    "Answer: " + (c / Math.PI).toFixed(2);
}

function radiusFromCircumference() {
    let c = Number(document.getElementById("circRadiusInput").value);

    document.getElementById("radiusCircResult").innerHTML =
    "Answer: " + (c / (2 * Math.PI)).toFixed(2);
}


// =========================
// AREA
// =========================

function rectangleArea() {
    let l = Number(document.getElementById("rectLength").value);
    let w = Number(document.getElementById("rectWidth").value);

    document.getElementById("rectangleAreaResult").innerHTML =
    "Answer: " + (l * w);
}

function squareArea() {
    let s = Number(document.getElementById("squareSide").value);

    document.getElementById("squareAreaResult").innerHTML =
    "Answer: " + (s * s);
}

function triangleArea() {
    let b = Number(document.getElementById("triangleBase").value);
    let h = Number(document.getElementById("triangleHeight").value);

    document.getElementById("triangleAreaResult").innerHTML =
    "Answer: " + ((b * h) / 2);
}

function circleAreaCalculator() {
    let r = Number(document.getElementById("circleAreaRadius").value);

    document.getElementById("circleAreaOutput").innerHTML =
    "Answer: " + (Math.PI * r * r).toFixed(2);
}

function parallelogramArea() {
    let b = Number(document.getElementById("paraBase").value);
    let h = Number(document.getElementById("paraHeight").value);

    document.getElementById("parallelogramAreaResult").innerHTML =
    "Answer: " + (b * h);
}

function trapezoidArea() {
    let b1 = Number(document.getElementById("trapBase1").value);
    let b2 = Number(document.getElementById("trapBase2").value);
    let h = Number(document.getElementById("trapHeight").value);

    document.getElementById("trapezoidAreaResult").innerHTML =
    "Answer: " + (((b1 + b2) * h) / 2);
}


// =========================
// VOLUME
// =========================

function cubeVolume() {
    let s = Number(document.getElementById("cubeSide").value);

    document.getElementById("cubeVolumeResult").innerHTML =
    "Answer: " + Math.pow(s, 3);
}

function cylinderVolume() {
    let r = Number(document.getElementById("cylinderRadius").value);
    let h = Number(document.getElementById("cylinderHeight").value);

    document.getElementById("cylinderVolumeResult").innerHTML =
    "Answer: " + (Math.PI * r * r * h).toFixed(2);
}

function coneVolume() {
    let r = Number(document.getElementById("coneRadius").value);
    let h = Number(document.getElementById("coneHeight").value);

    document.getElementById("coneVolumeResult").innerHTML =
    "Answer: " + ((Math.PI * r * r * h) / 3).toFixed(2);
}

function sphereVolume() {
    let r = Number(document.getElementById("sphereRadius").value);

    document.getElementById("sphereVolumeResult").innerHTML =
    "Answer: " + ((4 / 3) * Math.PI * Math.pow(r, 3)).toFixed(2);
}

function rectangularPrismVolume() {
    let l = Number(document.getElementById("prismLength").value);
    let w = Number(document.getElementById("prismWidth").value);
    let h = Number(document.getElementById("prismHeight").value);

    document.getElementById("prismVolumeResult").innerHTML =
    "Answer: " + (l * w * h);
}


// =========================
// PERIMETER
// =========================

function rectanglePerimeter() {
    let l = Number(document.getElementById("rectPerimeterLength").value);
    let w = Number(document.getElementById("rectPerimeterWidth").value);

    document.getElementById("rectanglePerimeterResult").innerHTML =
    "Answer: " + (2 * (l + w));
}

function squarePerimeter() {
    let s = Number(document.getElementById("squarePerimeterSide").value);

    document.getElementById("squarePerimeterResult").innerHTML =
    "Answer: " + (4 * s);
}

function trianglePerimeter() {
    let a = Number(document.getElementById("triangleSide1").value);
    let b = Number(document.getElementById("triangleSide2").value);
    let c = Number(document.getElementById("triangleSide3").value);

    document.getElementById("trianglePerimeterResult").innerHTML =
    "Answer: " + (a + b + c);
}

function circlePerimeter() {
    let r = Number(document.getElementById("circlePerimeterRadius").value);

    document.getElementById("circlePerimeterResult").innerHTML =
    "Answer: " + (2 * Math.PI * r).toFixed(2);
}

function parallelogramPerimeter() {
    let b = Number(document.getElementById("paraBasePerimeter").value);
    let s = Number(document.getElementById("paraSidePerimeter").value);

    document.getElementById("parallelogramPerimeterResult").innerHTML =
    "Answer: " + (2 * (b + s));
}
