// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const Direction = {
    ToRight: 1,
    ToLeft: 2,
    ToBottom: 3,
    ToTop: 4,
    All: [1, 2, 3, 4]
}

const FigureType = {
    Blank: 0,
    Primitive: 1,
    Block: 2
}

function usePattern(pattern, style, useArray = []) {
    let size = style.size,
        top = style.top,
        left = style.left,
        rev = style.rev,
        color = style.color
    
    for (let i in pattern) {
        for (let k in pattern[i]) {
            switch (pattern[i][k]) {
                case FigureType.Primitive:
                    primitive({ top: top + i * size, left: left + k * size, rev: rev[0], colors: color }, useArray);
                    break;

                case FigureType.Block:
                    block({ top: top + i * size, left: left + k * size, rev: rev, colors: color }, useArray);
                    break;
            }
        }
    }

    return useArray;
}

function primitive(data, useArray = []) {
    let element = {
        top: data.top,
        left: data.left,
        rev: data.rev,
        color: data.color
    };
    useArray.push(element);

    return element;
}

function block(data, useArray = []) {
    let top = data.top,
        left = data.left,
        rev = data.rev,
        colors = data.colors;

    primitive({ top: top, left: left, rev: rev[0], color: colors !== undefined? colors.light: undefined }, useArray),
    primitive({ top: top, left: left, rev: rev[1], color: colors !== undefined? colors.light: undefined }, useArray)

    return useArray;
}

function rightTriangle(data, useArray = []) {
    let top = data.top,
        left = data.left,
        triangleSize = data.triangleSize,
        triangleRev = data.triangleRev,
        blockSize = data.blockSize,
        rev = data.rev,
        colors = data.colors,
        lineMovingX = blockSize,
        lineMovingY = blockSize,
        koefPrimitiveMovingX = 0,
        koefPrimitiveMovingY = 0;

    switch (triangleRev) {
        case 1: {
            // to right
            top += (triangleSize - 1) * blockSize;
            lineMovingX = -blockSize;
            lineMovingY = 0;
            koefPrimitiveMovingX = 1;
            koefPrimitiveMovingY = 0;
        } break;
        case 2: {
            // to left
            left += (triangleSize - 1) * blockSize;
            lineMovingY = 0;
            lineMovingX = blockSize;
            koefPrimitiveMovingX = -1;
            koefPrimitiveMovingY = 0;
        } break;
        case 3: {
            // to bottom
            lineMovingY = blockSize;
            lineMovingX = 0;
            koefPrimitiveMovingX = 0;
            koefPrimitiveMovingY = 1;
        } break;
        default: {
            // to top
            top += (triangleSize - 1) * blockSize;
            left += (triangleSize - 1) * blockSize;
            lineMovingX = 0;
            lineMovingY = -blockSize;
            koefPrimitiveMovingX = 0;
            koefPrimitiveMovingY = -1;
        }
    }

    for (let i = 0, j = triangleSize; i < j; i++) {
        line({
            top: top,
            left: left,
            lineRev: triangleRev,
            blockSize: blockSize,
            rev: rev,
            lineSize: i,
            colors: colors
        }, useArray);

        primitive({
            top: top + i * koefPrimitiveMovingY * blockSize,
            left: left + i * koefPrimitiveMovingX * blockSize,
            rev: triangleRev,
            color: colors.light
        }, useArray);

        top += lineMovingX;
        left += lineMovingY;
    }
    return useArray;
}

function line(data, useArray = []) {
    let top = data.top,
        left = data.left,
        blockSize = data.blockSize,
        lineSize = data.lineSize,
        lineRev = data.lineRev,
        rev = data.rev,
        colors = data.colors,
        movingX = blockSize,
        movingY = 0;    

    switch (lineRev) {
        case Direction.ToRight: {
            movingX = blockSize;
            movingY = 0;
        } break;
        case Direction.ToLeft: {
            movingX = -blockSize;
            movingY = 0;
        } break;
        case Direction.ToBottom: {
            movingX = 0;
            movingY = blockSize;
        } break;
        default: {
            movingX = 0,
            movingY = -blockSize;
        } break;
    }

    for (let i = 0, j = lineSize; i < j; i++) {
        block({ top: top, left: left, rev: rev, colors: colors }, useArray);

        top += movingY;
        left += movingX;
    }

    return useArray;
}

function generateAllElements(word, eventCreator, css, onReady) {
    let elements = new Array();
    for (i = 0, count = word.length; i < count; i++) {
        elements.push(generateElement(word[i], i, css));
    }
    var arr = shuffle(elements);
    for (elem of arr) {
        $(elem).appendTo("#area");
        eventCreator(elem, onReady);
    }
}

function createOnTimeEvent(elem) {
    let selector = `#${$(elem).attr('id')}`;
    setTimeout(moveElement, 2000, selector);
}

function simpleMoveEvent(elem) {
    moveElement(`#${$(elem).attr('id')}`);
}

function createOnMouseEnter(elem, onReady) {
    let selector = `#${$(elem).attr('id')}`;
    $(selector).mouseenter((e) => {
        moveElement(selector);
        if ($("#area").children().length == 0) {
            onReady();
        }
    });
}

function moveElement(selector) {
    let element = $(selector);
    element.appendTo("#label");
    let top = element.data('top');
    let left = element.data('left');
    let rev = element.data('rev');
    element.css('top', top);
    element.css('left', left);
    element.css('position', 'absolute');
    element.css('display', 'block');
    element.removeClass();
    element.addClass(['element', `rev-${rev}`])
}

function generateElement(data, index, css) {
    let color = data !== undefined && data.color !== undefined
        ? data.color :
        css !== undefined && css.color
            ? css.color :
            "#" + ('00000' + (Math.random() * (1 << 24) | 0).toString(16)).slice(-6);
    return $(`<div id=e-${index} class='element rev-${index % 4 + 1}' data-rev=${data.rev} data-top=${data.top} data-left=${data.left} style='background: ${color}; ${css !== undefined ? "display:" + css.display : ""}'></div>`);
}

function putToCache(elem, cache) {
    if (cache.indexOf(elem) != -1) {
        return;
    }
    var i = Math.floor(Math.random() * (cache.length + 1));
    cache.splice(i, 0, elem);
}

function madness() {
    var cache = [];
    return function (a, b) {
        putToCache(a, cache);
        putToCache(b, cache);
        return cache.indexOf(b) - cache.indexOf(a);
    }
}

function shuffle(arr) {
    var compare = madness();
    return arr.sort(compare);
}

function zoomOutMobile() {
    var viewport = document.querySelector('meta[name="viewport"]');

    if (viewport) {
        viewport.content = "initial-scale=0.1";
        viewport.content = "width=device-width";
    }
}