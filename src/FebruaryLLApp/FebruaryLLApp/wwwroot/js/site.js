// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function flower(topStart, leftStart, rev, colors) {
    return [
        { top: topStart, left: leftStart, rev: rev[0], color: colors.light },
        { top: topStart, left: leftStart, rev: rev[0], color: colors.medium },
        { top: topStart, left: leftStart, rev: rev[0], color: colors.dark },
    ];
}

function bird(topStart, leftStart, rev, colors) {
    return [
        { top: topStart, left: leftStart, rev: rev[0], color: colors.light },
    ];
}

function primitive(top, left, rev, color) {
    return { top: top, left: left, rev: rev, color: color };
}

function line(data) {
    let top = data.top,
        left = data.left,
        isVertical = data.isVertical,
        blockSize = data.blockSize,
        rev = data.rev,
        colors = data.colors,
        arr = [];

    for (i = 0, j = data.lineSize; i < j; i++) {
        arr.push(
            primitive(top, left, rev[0], colors.light),
            primitive(top, left, rev[1], colors.light)
        );

        if (isVertical) {
            top += blockSize;
        } else {
            left += blockSize;
        }
    }

    return arr;
}


function s(topStart, leftStart, rev) {
    return [
        { top: topStart, left: leftStart, rev: rev[0] },
        { top: topStart, left: leftStart, rev: rev[1] },
        { top: topStart, left: leftStart + size, rev: rev[0] },
        { top: topStart, left: leftStart + size, rev: rev[1] },
        { top: topStart, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + size, left: leftStart, rev: rev[0] },
        { top: topStart + size, left: leftStart, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 3 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 3 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart + size, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart + size, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart + 2 * size, rev: rev[1] }
    ];
}

function iu(topStart, leftStart, rev) {
    return [
        { top: topStart, left: leftStart, rev: rev[0] },
        { top: topStart, left: leftStart, rev: rev[1] },
        { top: topStart, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart, left: leftStart + 3 * size, rev: rev[0] },
        { top: topStart, left: leftStart + 3 * size, rev: rev[1] },
        { top: topStart, left: leftStart + 4 * size, rev: rev[0] },
        { top: topStart, left: leftStart + 4 * size, rev: rev[1] },
        { top: topStart + size, left: leftStart, rev: rev[0] },
        { top: topStart + size, left: leftStart, rev: rev[1] },
        { top: topStart + size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + size, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + size, left: leftStart + 4 * size, rev: rev[0] },
        { top: topStart + size, left: leftStart + 4 * size, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart + size, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart + size, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart + 4 * size, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart + 4 * size, rev: rev[1] },
        { top: topStart + 3 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 3 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 3 * size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + 3 * size, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + 3 * size, left: leftStart + 4 * size, rev: rev[0] },
        { top: topStart + 3 * size, left: leftStart + 4 * size, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart + 3 * size, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart + 3 * size, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart + 4 * size, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart + 4 * size, rev: rev[1] }
    ];
}

function m(topStart, leftStart, rev) {
    return [
        { top: topStart, left: leftStart, rev: rev[0] },
        { top: topStart, left: leftStart, rev: rev[1] },
        { top: topStart, left: leftStart + 4 * size, rev: rev[0] },
        { top: topStart, left: leftStart + 4 * size, rev: rev[1] },
        { top: topStart + size, left: leftStart, rev: rev[0] },
        { top: topStart + size, left: leftStart, rev: rev[1] },
        { top: topStart + size, left: leftStart + size, rev: rev[0] },
        { top: topStart + size, left: leftStart + size, rev: rev[1] },
        { top: topStart + size, left: leftStart + 3 * size, rev: rev[0] },
        { top: topStart + size, left: leftStart + 3 * size, rev: rev[1] },
        { top: topStart + size, left: leftStart + 4 * size, rev: rev[0] },
        { top: topStart + size, left: leftStart + 4 * size, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart + size, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart + size, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart + 3 * size, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart + 3 * size, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart + 4 * size, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart + 4 * size, rev: rev[1] },
        { top: topStart + 3 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 3 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 3 * size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + 3 * size, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + 3 * size, left: leftStart + 4 * size, rev: rev[0] },
        { top: topStart + 3 * size, left: leftStart + 4 * size, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart + 4 * size, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart + 4 * size, rev: rev[1] }
    ];
}

function a(topStart, leftStart, rev) {
    return [
        { top: topStart, left: leftStart + size, rev: rev[1] },
        { top: topStart, left: leftStart + size, rev: rev[0] },
        { top: topStart + size, left: leftStart, rev: rev[1] },
        { top: topStart + size, left: leftStart, rev: rev[0] },
        { top: topStart + size, left: leftStart + size, rev: rev[1] },
        { top: topStart + size, left: leftStart + size, rev: rev[0] },
        { top: topStart + size, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + 3 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 3 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 3 * size, left: leftStart + size, rev: rev[1] },
        { top: topStart + 3 * size, left: leftStart + size, rev: rev[0] },
        { top: topStart + 3 * size, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + 3 * size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart + 2 * size, rev: rev[0] }
    ];
}

function r(topStart, leftStart, rev) {
    return [
        { top: topStart, left: leftStart, rev: rev[1] },
        { top: topStart, left: leftStart, rev: rev[0] },
        { top: topStart, left: leftStart + size, rev: rev[1] },
        { top: topStart, left: leftStart + size, rev: rev[0] },
        { top: topStart, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + size, left: leftStart, rev: rev[1] },
        { top: topStart + size, left: leftStart, rev: rev[0] },
        { top: topStart + size, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart + size, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart + size, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + 3 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 3 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart, rev: rev[0] }
    ];
}

function t(topStart, leftStart, rev) {
    return [
        { top: topStart, left: leftStart, rev: rev[1] },
        { top: topStart, left: leftStart, rev: rev[0] },
        { top: topStart, left: leftStart + size, rev: rev[1] },
        { top: topStart, left: leftStart + size, rev: rev[0] },
        { top: topStart, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + size, left: leftStart + size, rev: rev[1] },
        { top: topStart + size, left: leftStart + size, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart + size, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart + size, rev: rev[0] },
        { top: topStart + 3 * size, left: leftStart + size, rev: rev[1] },
        { top: topStart + 3 * size, left: leftStart + size, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart + size, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart + size, rev: rev[0] }
    ];
}

function y(topStart, leftStart, rev) {
    return [
        { top: topStart, left: leftStart, rev: rev[0] },
        { top: topStart, left: leftStart, rev: rev[1] },
        { top: topStart, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + size, left: leftStart, rev: rev[0] },
        { top: topStart + size, left: leftStart, rev: rev[1] },
        { top: topStart + size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + size, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart + size, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart + size, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + 3 * size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + 3 * size, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart + size, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart + size, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart + 2 * size, rev: rev[1] }
    ];
}

function eight(topStart, leftStart, rev) {
    return [
        { top: topStart, left: leftStart, rev: rev[0] },
        { top: topStart, left: leftStart, rev: rev[1] },
        { top: topStart, left: leftStart + size, rev: rev[0] },
        { top: topStart, left: leftStart + size, rev: rev[1] },
        { top: topStart, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + size, left: leftStart, rev: rev[0] },
        { top: topStart + size, left: leftStart, rev: rev[1] },
        { top: topStart + size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + size, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart + size, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart + size, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + 3 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 3 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 3 * size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + 3 * size, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart + size, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart + size, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart + 2 * size, rev: rev[1] }
    ];
}

function k(topStart, leftStart, rev) {
    return [
        { top: topStart, left: leftStart, rev: rev[0] },
        { top: topStart, left: leftStart, rev: rev[1] },
        { top: topStart, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + size, left: leftStart, rev: rev[0] },
        { top: topStart + size, left: leftStart, rev: rev[1] },
        { top: topStart + size, left: leftStart + size, rev: rev[0] },
        { top: topStart + size, left: leftStart + size, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 3 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 3 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 3 * size, left: leftStart + size, rev: rev[0] },
        { top: topStart + 3 * size, left: leftStart + size, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart + 2 * size, rev: rev[1] }
    ];
}

function i(topStart, leftStart, rev) {
    return [
        { top: topStart, left: leftStart, rev: rev[0] },
        { top: topStart, left: leftStart, rev: rev[1] },
        { top: topStart, left: leftStart + 3 * size, rev: rev[0] },
        { top: topStart, left: leftStart + 3 * size, rev: rev[1] },
        { top: topStart + size, left: leftStart, rev: rev[0] },
        { top: topStart + size, left: leftStart, rev: rev[1] },
        { top: topStart + size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + size, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + size, left: leftStart + 3 * size, rev: rev[0] },
        { top: topStart + size, left: leftStart + 3 * size, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart + size, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart + size, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart + 3 * size, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart + 3 * size, rev: rev[1] },
        { top: topStart + 3 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 3 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 3 * size, left: leftStart + size, rev: rev[0] },
        { top: topStart + 3 * size, left: leftStart + size, rev: rev[1] },
        { top: topStart + 3 * size, left: leftStart + 3 * size, rev: rev[0] },
        { top: topStart + 3 * size, left: leftStart + 3 * size, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart + 3 * size, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart + 3 * size, rev: rev[1] }
    ];
}

function v(topStart, leftStart, rev) {
    return [
        { top: topStart, left: leftStart, rev: rev[0] },
        { top: topStart, left: leftStart, rev: rev[1] },
        { top: topStart, left: leftStart + size, rev: rev[0] },
        { top: topStart, left: leftStart + size, rev: rev[1] },
        { top: topStart, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + size, left: leftStart, rev: rev[0] },
        { top: topStart + size, left: leftStart, rev: rev[1] },
        { top: topStart + size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + size, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 2 * size, left: leftStart + size, rev: rev[0] },
        { top: topStart + 2 * size, left: leftStart + size, rev: rev[1] },
        { top: topStart + 3 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 3 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 3 * size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + 3 * size, left: leftStart + 2 * size, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart + size, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart + size, rev: rev[1] },
        { top: topStart + 4 * size, left: leftStart + 2 * size, rev: rev[0] },
        { top: topStart + 4 * size, left: leftStart + 2 * size, rev: rev[1] }
    ];
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