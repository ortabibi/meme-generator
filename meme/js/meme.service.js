'use strict'

var gImgs = [{ id: 1, url: 'imgs/1.jpg', keywords: ['funny', 'cat'] },
{ id: 2, url: 'imgs/2.jpg', keywords: ['funny'] },
{ id: 3, url: 'imgs/3.jpg', keywords: ['funny'] },
{ id: 4, url: 'imgs/4.jpg', keywords: ['funny'] },
{ id: 5, url: 'imgs/5.jpg', keywords: ['funny'] },
{ id: 6, url: 'imgs/6.jpg', keywords: ['funny'] },
{ id: 7, url: 'imgs/7.jpg', keywords: ['funny'] },
{ id: 8, url: 'imgs/8.jpg', keywords: ['funny'] },
{ id: 9, url: 'imgs/9.jpg', keywords: ['funny'] },
{ id: 10, url: 'imgs/10.jpg', keywords: ['funny'] },
{ id: 11, url: 'imgs/11.jpg', keywords: ['funny'] },
{ id: 12, url: 'imgs/12.jpg', keywords: ['funny'] },
{ id: 13, url: 'imgs/13.jpg', keywords: ['funny'] },
{ id: 14, url: 'imgs/14.jpg', keywords: ['funny'] },
{ id: 15, url: 'imgs/15.jpg', keywords: ['funny'] },
{ id: 16, url: 'imgs/16.jpg', keywords: ['funny'] },
{ id: 17, url: 'imgs/17.jpg', keywords: ['funny'] },
{ id: 18, url: 'imgs/18.jpg', keywords: ['funny'] }]

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            color: 'white',
            pos: { x: 50, y: 50 },
            isDrag: false
        }
    ]
}

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function getMeme() {
    return gMeme
}

function getImgById(id) {
    return gImgs.find(img => img.id === id)
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function getImgs() {
    return gImgs
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function setColorTxt(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function setSizeTxtUp() {
    gMeme.lines[gMeme.selectedLineIdx].size++
}
function setSizeTxtDown() {
    gMeme.lines[gMeme.selectedLineIdx].size--
}

function addLine() {
    gMeme.lines.push({
        txt: 'I sometimes eat Falafel',
        size: 20,
        color: 'white',
        pos: { x: 50, y: 50 + (gMeme.lines.length * 50) },
        isDrag: false

    })
}

function switchLine() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx >= gMeme.lines.length) {
        gMeme.selectedLineIdx = 0
    }
}

function isLineClicked(clickedPos) {
    return gMeme.lines.findIndex(line => {
        gCtx.font = `${line.size}px impact`
        return clickedPos.x >= line.pos.x &&
            clickedPos.x <= line.pos.x + gCtx.measureText(line.txt).width &&
            clickedPos.y >= line.pos.y - line.size &&
            clickedPos.y <= line.pos.y
    })
}


function setLineDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}

function moveLine(dx, dy) {
    gMeme.lines[gMeme.selectedLineIdx].pos.x += dx
    gMeme.lines[gMeme.selectedLineIdx].pos.y += dy
}

function setLineDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}

