const reviewCont = document.querySelector('.anotherReviewsContainer')
const reviewBlock = reviewCont.querySelector('.anotherReviewBlock')
const sliderLineBack = reviewCont.querySelector('.sliderLineBack')
const sliderLine = sliderLineBack.querySelector('.sliderLine')

let xLine = 0;
let startX = 0;
let moved = false

reviewCont.addEventListener('pointerdown', (e) => {
    startX =  e.clientX - xLine
})

sliderLine.addEventListener('pointerdown', (e) => {
    moved = true
    sliderLine.style.cursor = 'grabbing'
})

reviewCont.addEventListener('pointermove', (e) => {
    if (moved) {
        let lineWidth = sliderLine.offsetWidth
        let lineWidthBack = sliderLineBack.offsetWidth
        xLine = e.clientX - startX
        if (xLine < 0) {
            xLine = 0
        }
        if (xLine > (lineWidthBack - lineWidth)) {
            xLine = lineWidthBack - lineWidth
        }
        sliderLine.style.transform = `translateX(${xLine}px)`
        reviewBlock.style.transform = `translateX(${-xLine*2.4}px)`
    } else {
        return
    }
})

document.addEventListener('pointerup', (e) => {
    moved = false
    sliderLine.style.cursor = 'grab'
})