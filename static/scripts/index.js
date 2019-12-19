window.onload = function() {
    var moveBlock = document.getElementById("move-block");
    var staticBlock = document.getElementById("static-block");

    moveBlock.onmousedown = function(e) {
        e = e || event;
        var initialX = e.clientX - this.offsetLeft;
        var initialY = e.clientY - this.offsetTop;

        //mouseMove();
        //mouseUp();
    }
}