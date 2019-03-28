var cube = [
    [0, 0],
    [1, 0],
    [1, 1],
    [0, 1]
];
var lineColor = "#000000";
var size = 100;
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
for (i = 1; i < cube.length; i++) {
    cube[i][0] *= size;
    cube[i][1] *= size;
}
draw();

function draw() {
    console.log("begindraw");
    context.beginPath();
    context.moveTo(cube[0][0], cube[0][1]);
    for (var i = 1; i < cube.length; i++) {
        var point = multipleMatrix(getTrans(), cube[i]);
        alert(point);
        context.lineTo(point[0], point[1]);
    }

    context.closePath();
    context.strokeStyle = lineColor;
    context.lineWidth = 3;
    context.stroke();
}

function getTrans() {
    trans = [
        [10, 0],
        [0, 10]
    ];
    return trans
}

function multipleMatrix(a, b) {
    if (a[0].length != b.length) {
        console.error("Can't multiple " + a + " and " + b);
    }
    let output = Array(a.length);
    for(let i = 0; i < output.length; i++) {
        output[i] = Array(b[0].length);
        for(let j = 0; j < output.length; j++) {
            output[j] = 0;
        };
    };

    alert(JSON.stringify(output));
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b[0].length || j == 0; i++) {
            for (let k = 0; k < a.length; k++) {
                if (Array.isArray(output[0])) {
                    output[i][k] += a[i][k] * b[j][k];
                } else {

                    output[i] += getValue(a, i, k) * getValue(b, j, k);
                }
            }
        }
    }
    return output;
}

function getValue(arr, i, j) {
    if (Array.isArray(arr[i])) {
        return [i][j];
    } else {
        return [i];
    }
}

function transpose(matrix) {
    var output = Array(matrix[0].length);
    output.forEach(element => {
        element = Array(matrix.length);
    });
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[0].length; i++) {
            if (output[j][i] == null) {
                outerHeight[j][i] = 0;
            }
            output[j][i] = matrix[i][j];
        }

    }
    return output;
}