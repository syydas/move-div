window.onload = function() {
    var moveBlock = document.getElementById("move-block");
    var staticBlock = document.getElementById("static-block");

    moveBlock.onmousedown = function(e) {
        var initialX = e.clientX - this.offsetLeft;
        var initialY = e.clientY - this.offsetTop;

        mouseMove(initialX, initialY);
        //mouseUp();
    }


    function mouseMove(x, y) {
        document.onmousemove = function(e) {
            var moveX = e.clientX - x;
            var moveY = e.clientY - y;

            movelimit(moveX, moveY);
        }
    }

    function movelimit(x, y) {
        if ((x > 0 && x <= 920) && (y > 0 && y <= 720)) {
            moveBlock.style.left = x + "px";
            moveBlock.style.top = y + "px";
        } else {
            moveBlock.style.left = (function() {
                if (x < 0) {
                    return 0 + "px";
                } else {
                    return 920 + "px";
                }
            });
            moveBlock.style.top = (function() {
                if (y < 0) {
                    return 0 + "px";
                } else {
                    return 720 + "px";
                }
            });
        }
    }
}