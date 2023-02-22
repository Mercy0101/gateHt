function set_valueA() {
    if (a == 1) {
        a = 0;
        document.getElementById('a').innerHTML = a;
    } else {
        a = 1;
        document.getElementById('a').innerHTML = a;
    }
}


function set_valueB() {
    if (b == 1) {
        b = 0;
        document.getElementById('b').innerText = 0;
    } else {
        b = 1;
        document.getElementById('b').innerText = 1;
    }
}

function set_value() {
    var a = document.getElementById('a').innerText;
    var b = document.getElementById('b').innerText;

    a = parseInt(a);
    b = parseInt(b);

    var ans;

    if (a == 1 || b == 1) {
        ans = 1;
        pic = "bulb-on.png";
    } else {
        ans = 0;
        pic = "bulb-off.png";
    }
    document.getElementById('myimg').src = pic;
}