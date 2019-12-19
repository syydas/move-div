window.onload = function() {
    var moveBlock = document.getElementById("move-block");
    var staticBlock = document.getElementById("static-block");

    moveBlock.onmousedown = function(e) {
        var initialX = e.clientX - this.offsetLeft;
        var initialY = e.clientY - this.offsetTop;

        mouseMove(initialX, initialY);
        mouseUp();
    }


    function mouseMove(left, top) {
        document.onmousemove = function(e) {
            var moveX = e.clientX - left;
            var moveY = e.clientY - top;

            movelimit(moveX, moveY);
            changeColor(moveX, moveY);
        }
    }

    function mouseUp() {
        document.onmouseup = function() {
            document.onmousemove = null;
        }
    }

    function movelimit(left, top) {
        if ((left >= 0 && left <= 920) && (top >= 0 && top <= 720)) {
            moveBlock.style.left = left + "px";
            moveBlock.style.top = top + "px";
        } else {
            moveBlock.style.left = (function() {
                if (left < 0) {
                    return 0 + "px";
                } else if (left > 920) {
                    return 920 + "px";
                }
            });
            moveBlock.style.top = (function() {
                if (top < 0) {
                    return 0 + "px";
                } else if (top > 720) {
                    return 720 + "px";
                }
            });
        }
    }

    function changeColor(left, top) {
        var staticTop = staticBlock.offsetTop;
        var staticLeft = staticBlock.offsetLeft;
        if (top >= staticTop - 80 && top <= staticTop + 80 &&
            left >= staticLeft - 80 && left <= staticLeft + 80) {
            staticBlock.style.backgroundColor = "blue";
        }
    }
}