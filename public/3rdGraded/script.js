function plotPoint(x0, y0, x, y) {
    const in1 = document.getElementById('in1');
    const out1 = document.getElementById('out1');
    in1.innerHTML = x0 + " " + y0 + " " + x + " " + y;

    var point = document.createElement('div');

    point.className = 'point';
    point.style.left = (x - x0 + 200 - 5) + 'px';
    point.style.bottom = (y - y0 + 200 - 5) + 'px';

    const existingPoints = document.querySelectorAll('.point');
    existingPoints.forEach(p => p.remove());
    
    document.getElementById('coordinatePlane').appendChild(point);
    if (x === x0 || y === y0) {
        out1.innerHTML = "divisa";
    }
    else if (x > x0 && y > y0) {
        out1.innerHTML = "NE";
    }
    else if (x < x0 && y > y0) {
        out1.innerHTML = "NO";
    }
    else if (x > x0 && y < y0) {
        out1.innerHTML = "SE";
    }
    else if (x < x0 && y < y0) {
        out1.innerHTML = "SO";
    }
    else {
        out1.innerHTML = "divisa";
    }
}