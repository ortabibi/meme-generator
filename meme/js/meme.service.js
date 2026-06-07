'use strict'

var gImgs = [{ id: 1, url: 'imgs/1.jpg', keywords: ['funny', 'cat'] },
{ id: 2, url: 'imgs/2.jpg', keywords: ['funny'] }]

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            color: 'red'
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
    gMeme.lines[0].txt = txt
}

function getImgs() {
    return gImgs
}

function setImg(imgId){
    gMeme.selectedImgId = imgId
}