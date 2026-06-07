'use strict'

var gElCanvas
var gCtx


function renderMeme() {
    gElCanvas = document.querySelector('.editor-container canvas')
    gCtx = gElCanvas.getContext('2d')

    const meme = getMeme()
    const gImg = getImgById(meme.selectedImgId)

    const elImg = new Image()

    elImg.src = gImg.url


    elImg.onload = () => {
        drawMeme(elImg)
    }
    
    // if (elImg.complete) {
    //     drawMeme(elImg)
    // }
}

function onInputChange(txt) {
    setLineTxt(txt)
    renderMeme()
}

function drawMeme(elImg) {
    gCtx.drawImage(elImg, 0, 0)
    gCtx.font = '20px Impact'
    gCtx.fillStyle = 'red'
    gCtx.fillText(gMeme.lines[0].txt, 50, 50)
    console.log(gMeme.lines[0].txt);
    
}

