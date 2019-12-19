window.onload = function() {
    var moveBlock = document.getElementById("move-block");
    var staticBlock = document.getElementById("static-block");

    moveBlock.onmousedown = function(e) {
        var initialX = e.clientX - this.offsetLeft;
        var initialY = e.clientY - this.offsetTop;

        mouseMove(initialX, initialY);
        mouseUp(initialX, initialY);
    }


    function mouseMove(left, top) {
        document.onmousemove = function(e) {
            var moveX = e.clientX - left;
            var moveY = e.clientY - top;

            movelimit(moveX, moveY);
        }
    }

    function mouseUp(left, top) {
        document.onmouseup = function(e) {
            document.onmousemove = null;
            document.onmousedown = null;
        }
    }

    function movelimit(left, top) {
        if ((left > 0 && left <= 920) && (top > 0 && top <= 720)) {
            moveBlock.style.left = left + "px";
            moveBlock.style.top = top + "px";
        } else {
            moveBlock.style.left = (function() {
                if (left < 0) {
                    return 0 + "px";
                } else {
                    return 920 + "px";
                }
            });
            moveBlock.style.top = (function() {
                if (top < 0) {
                    return 0 + "px";
                } else {
                    return 720 + "px";
                }
            });
        }
    }
}