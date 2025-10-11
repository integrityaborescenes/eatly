const menuNewsSlider = document.querySelector('.menuNewsSlider')
const menuNewsBanner = menuNewsSlider.querySelector('.menuNewsBanner')
const menuNewsSliderLine1 = menuNewsSlider.querySelector('.menuNewsSliderLine1')
const menuNewsSliderLine2 = menuNewsSlider.querySelector('.menuNewsSliderLine2')
const menuNewsSliderLine3 = menuNewsSlider.querySelector('.menuNewsSliderLine3')
const menuNewsSliderLine1Back = menuNewsSlider.querySelector('.menuNewsSliderLine1Back')
const menuNewsSliderLine2Back = menuNewsSlider.querySelector('.menuNewsSliderLine2Back')
const menuNewsSliderLine3Back = menuNewsSlider.querySelector('.menuNewsSliderLine3Back')
const firstBanner = menuNewsSlider.querySelector('.first')
const secondBanner = menuNewsSlider.querySelector('.second')
const thirdBanner = menuNewsSlider.querySelector('.third')

    let k = 1
    const autoSliderFlip = (k) => {

        menuNewsSliderLine1.classList.remove('active')
        menuNewsSliderLine1Back.classList.remove('active')
        menuNewsSliderLine2.classList.remove('active')
        menuNewsSliderLine2Back.classList.remove('active')
        menuNewsSliderLine3.classList.remove('active')
        menuNewsSliderLine3Back.classList.remove('active')
        if (k===1) {
            menuNewsSliderLine1.classList.toggle('active')
            menuNewsSliderLine1Back.classList.toggle('active')
            thirdBanner.style.display = "none"
            firstBanner.style.display = "flex"
        } else if (k===2) {
            menuNewsSliderLine2.classList.toggle('active')
            menuNewsSliderLine2Back.classList.toggle('active')
            firstBanner.style.display = "none"
            secondBanner.style.display = "flex"
        } else if (k===3) {
            menuNewsSliderLine3.classList.toggle('active')
            menuNewsSliderLine3Back.classList.toggle('active')
            secondBanner.style.display = "none"
            thirdBanner.style.display = "flex"
        }
    }
    autoSliderFlip(1)
    setInterval(whatSliderIs = () => {
        if (k<3) {
            k++
            autoSliderFlip(k)
        } else {
            k=1
            autoSliderFlip(k)
        }
    }, 7000)
