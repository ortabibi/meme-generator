'use strict'

var gElCanvas
var gCtx
let gCurrPos


const TOUCH_EVENTS = ['touchstart', 'touchmove', 'touchend']


function renderMeme() {
    const meme = getMeme()
    const gImg = getImgById(meme.selectedImgId)

    const elImg = new Image()

    elImg.src = gImg.url


    elImg.onload = () => {
        drawMeme(elImg)
    }
}

function onInputChange(txt) {
    setLineTxt(txt)
    renderMeme()
}

function drawMeme(elImg) {
    gCtx.drawImage(elImg, 0, 0)
    gMeme.lines.forEach((line, idx) => {
        gCtx.font = `${line.size}px impact`
        if (gMeme.selectedLineIdx === idx) {
            gCtx.strokeStyle = 'white'
            gCtx.strokeRect(line.pos.x, line.pos.y - line.size, gCtx.measureText(line.txt).width, line.size + 5)
            gCtx.fillStyle = 'rgba(0, 0, 0, 0.4)'
            gCtx.fillRect(line.pos.x, line.pos.y - line.size, gCtx.measureText(line.txt).width, line.size + 5)
        }
        gCtx.fillStyle = line.color
        gCtx.fillText(line.txt, line.pos.x, line.pos.y)
    })
}

function onDownloadImg(elLink) {
    elLink.href = gElCanvas.toDataURL()
    elLink.download = 'my-perfect-img'
}

function onSetColor(color) {
    setColorTxt(color)
    renderMeme()
}

function onIncreaseFont() {
    setSizeTxtUp()
    renderMeme()
}

function onDecreaseFont() {
    setSizeTxtDown()
    renderMeme()
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onSwitchLine() {
    switchLine()
    renderMeme()
}

function getEvPos(ev) {
    // Check if it is a touch event
    if (TOUCH_EVENTS.includes(ev.type)) {
        ev.preventDefault() // Stop double-firing mouse fallback events

        const touch = ev.targetTouches[0]

        // Get the absolute position of the canvas on the screen
        const rect = gElCanvas.getBoundingClientRect()

        // Subtract canvas screen coordinates from touch screen coordinates
        return {
            x: touch.clientX - rect.left,
            y: touch.clientY - rect.top,
        }
    } else {
        // Desktop mouse tracking stays lightweight
        return {
            x: ev.offsetX,
            y: ev.offsetY,
        }
    }
}

function onDown(ev) {

    // Save the position we started from...
    // Get the event position from mouse or touch
    gCurrPos = getEvPos(ev)

    const idx = isLineClicked(gCurrPos)

    if (idx === -1) {
        return
    } else {
        gMeme.selectedLineIdx = idx
        setLineDrag(true)
        renderMeme()
    }

    document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
    const { isDrag } = gMeme.lines[gMeme.selectedLineIdx]
    if (!isDrag) return

    const pos = getEvPos(ev)

    // Calc the delta, the diff we moved
    const dx = pos.x - gCurrPos.x
    const dy = pos.y - gCurrPos.y

    moveLine(dx, dy)

    // Save the last pos, we remember where we`ve been and move accordingly
    gCurrPos = pos

    // The canvas is rendered again after every move
    renderMeme()
}

function onUp() {
    setLineDrag(false)
    document.body.style.cursor = 'grab'
}




