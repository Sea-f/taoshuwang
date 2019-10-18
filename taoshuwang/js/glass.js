$(() => {
    var imgBox = document.querySelector('.imgbox');
    var minBox = document.querySelector('.minImg');
    var minImg = document.querySelector('.minImg img');
    var mask = document.querySelector('.img-mask');
    var maxBox = document.querySelector('.maxImg');
    var maxImg = document.querySelector('.maxImg img');

    minBox.onmouseenter = function() {
        mask.style.display = "block"
        maxBox.style.display = "block"
    }
    minBox.onmousemove = function(e) {
        e = e || window.event
        var maskX = e.pageX - imgBox.offsetLeft - mask.offsetWidth / 2
        var maskY = e.pageY - imgBox.offsetTop - mask.offsetHeight / 2
        var maxX = minBox.offsetWidth - mask.offsetWidth
        var maxY = minBox.offsetHeight - mask.offsetHeight
        if (maskX >= maxX) maskX = maxX
        if (maskY >= maxY) maskY = maxY
        if (maskX <= 0) maskX = 0
        if (maskY <= 0) maskY = 0
        mask.style.left = maskX + "px"
        mask.style.top = maskY + "px"
        var maxw = (mask.offsetLeft / (minBox.offsetWidth - mask.offsetWidth)) * (maxImg.offsetWidth - maxBox.offsetWidth)
        var maxh = (mask.offsetTop / (minBox.offsetHeight - mask.offsetHeight)) * (maxImg.offsetHeight - maxBox.offsetHeight)
        maxImg.style.left = -maxw + "px"
        maxImg.style.top = -maxh + "px"
    }
    minBox.onmouseleave = function() {
        mask.style.display = "none"
        maxBox.style.display = "none"
    }
})