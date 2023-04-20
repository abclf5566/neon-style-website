// JavaScript Document

    window.onload = function () {
        var oUl = $('.scroll ul')[0];
        oUl.innerHTML = oUl.innerHTML + oUl.innerHTML 
        var oLies = $('.scroll li'); 
        oUl.style.width = oLies[0].offsetWidth * oLies.length + 'px';
        var speed = -1;
        setInterval(function () {
            if (oUl.offsetLeft <= -oUl.offsetWidth * .5) {
                oUl.style.left = '0px';
            }
            oUl.style.left = oUl.offsetLeft + speed + 'px';
        }, 300 / 30);
    }
