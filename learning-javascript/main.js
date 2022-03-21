// console.log('main.js start')

$(document).ready(() => {
    'use strict'
    // console.log('jquery loaded')

    paper.install(window)
    paper.setup(document.getElementById('mainCanvas'))

    // TODO
    let c = Shape.Circle(200, 200, 80)
    c.fillColor = 'blue'

    let text = new PointText(200, 200)
    text.justification = 'center'
    text.fillColor = 'white'
    text.fontSize = 20
    text.content = 'hello world'


    // draw
    paper.view.draw();
})