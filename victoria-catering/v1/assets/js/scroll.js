let mylocation;

window.onscroll = function (e) {
    mylocation = window.pageYOffset;
}
function scrollWin(id) {
    // Спратать меню
    document.getElementById('menuModal').style.left = `-100%`;

    var pos = findPos(document.getElementById(id));
    if(mylocation == undefined) mylocation = 0;
    var i = mylocation;
    var sum = 10;
    if(mylocation <= pos[0]) {
        var int = setInterval(function() {
        	sum+=0.2;
            window.scrollTo(0, i);
            i += sum;
            if (i+40 >= pos[0]) {
                clearInterval(int);
            };
        }, 0);
    } else {
        var int = setInterval(function() {
        	sum += 0.2;
            window.scrollTo(0, i);
            i -= sum;
            if (i+40 <= pos[0]) {
                clearInterval(int);
            };
        }, 0);
    }
}
const findPos = obj => {
    let curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);

        return [curtop];
    }
}
