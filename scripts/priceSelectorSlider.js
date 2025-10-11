const priceSelectorSlider = document.querySelector('.priceSelectorSlider')
const priceSelectorSliderLine = priceSelectorSlider.querySelector('.priceSelectorSliderLine')
const priceSelectorSliderDot = priceSelectorSliderLine.querySelector('.priceSelectorSliderDot')
const SelectorPrices = priceSelectorSlider.querySelector('.selectorPrices')
const selectorPricesNumbers = SelectorPrices.querySelectorAll('p')

let startPos = 0
let currentX = 0
let isMoving = false

priceSelectorSlider.addEventListener('pointerdown', (e) => {
    isMoving = true
    startPos = e.clientX - currentX
})

document.addEventListener('pointerup', (e) => {
    isMoving = false
})

priceSelectorSlider.addEventListener('pointermove', (e) => {
    let pricelineWidth = priceSelectorSliderLine.offsetWidth
    if (isMoving) {
        currentX = e.clientX - startPos
        console.log(currentX)
        if(currentX <0) {
            currentX = 0
        }
        if (currentX>pricelineWidth) {
            currentX = pricelineWidth
        }
        priceSelectorSliderDot.style.transform = `translateX(${currentX}px)`
    } else {
        return
    }

    let pricesWidth = SelectorPrices.offsetWidth
    let activeIndex = Math.round (currentX/(pricesWidth/(selectorPricesNumbers.length - 1)))

    console.log (activeIndex)
    selectorPricesNumbers.forEach((p, index) => {
        p.classList.toggle('active', index === activeIndex)
    })
})


