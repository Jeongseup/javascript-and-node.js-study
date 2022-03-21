// console.log('main.js start')

$(document).ready(() => {
    'use strict'
    // console.log('jquery loaded')

    paper.install(window)
    paper.setup(document.getElementById('mainCanvas'))

    // TODO
    const tool = new Tool();

    tool.onMouseDown = (event) => {
        let c = Shape.Circle(event.point.x, event.point.y, 20)
        c.fillColor = 'black'
    }

    // draw
    paper.view.draw();
})