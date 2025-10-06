const reviewCont = document.querySelector('.anotherReviewsContainer')
const reviewBlock = reviewCont.querySelector('.anotherReviewBlock')
const sliderLineBack = reviewCont.querySelector('.sliderLineBack')
const sliderLine = sliderLineBack.querySelector('.sliderLine')

let xElem = 0;
let xLine = 0;
let startMove = 0;
let moved = false

reviewCont.addEventListener('mousedown', (e) => {
    moved = true
    sliderLine.style.cursor = 'grabbing'
    startMove =  e.clientX
    console.log(startMove)
})

reviewCont.addEventListener('mousemove', (e) => {
    if (moved) {
        xLine = e.offsetX
        sliderLine.style.transform = `translateX(${xLine}px)`
        reviewBlock.style.transform = `translateX(${-xLine}px)`
    }
})

document.addEventListener('mouseup', (e) => {
    moved = false
    sliderLine.style.cursor = 'grab'
})