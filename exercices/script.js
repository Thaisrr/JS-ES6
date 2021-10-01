function loaded(callback) {
    return document.addEventListener('DOMContentLoaded', callback);
}

function $(selector) {
    return document.querySelector(selector);
}


function $$(selector) {
    return document.querySelectorAll(selector);
}

function clic(el, callback) {
    return el.addEventListener('click', callback)
}

function enter(callback) {
    return document.addEventListener('keypress', (event) => {
        if(event.key === 'Enter') {
            (callback ())
        }
    });
}

function create(el) {
    return document.createElement(el);
}
