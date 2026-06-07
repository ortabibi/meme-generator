'use strict'

function renderGallery() {
    const imgs = getImgs()

    const strHTMLs = imgs.map(img => {
        return `
            <img src="${img.url}" onClick="onImgSelect(${img.id})" alt="">
             `
    })

    const elImgs = document.querySelector('.gallery-container')
    elImgs.innerHTML = strHTMLs.join('')
}

function onImgSelect(imgId) {
    setImg(imgId)
    document.querySelector('.gallery-container').style.display = 'none'
    document.querySelector('.editor-container').style.display = 'block'
    renderMeme()
}