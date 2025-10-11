const foodCategorysSelect = document.querySelector('.foodCategorysSelect')
const foodCategoryPizza = foodCategorysSelect.querySelector('.foodCategoryPizza')
const foodCategoryAsian = foodCategorysSelect.querySelector('.foodCategoryAsian')
const foodCategoryDonat = foodCategorysSelect.querySelector('.foodCategoryDonat')
const foodCategoryIce = foodCategorysSelect.querySelector('.foodCategoryIce')

let c = 0
const whichSelected = (c) => {
    foodCategoryPizza.classList.remove('active')
    foodCategoryAsian.classList.remove('active')
    foodCategoryDonat.classList.remove('active')
    foodCategoryIce.classList.remove('active')

    if (c===1) {
        foodCategoryPizza.classList.toggle('active')
    } else if (c===2) {
        foodCategoryAsian.classList.toggle('active')
    } else if (c===3) {
        foodCategoryDonat.classList.toggle('active')
    } else if (c===4) {
        foodCategoryIce.classList.toggle('active')
    }
}

foodCategoryPizza.addEventListener('click', (e) => {
    c = 1
    whichSelected(c)
})

foodCategoryAsian.addEventListener('click', (e) => {
    c = 2
    whichSelected(c)
})

foodCategoryDonat.addEventListener('click', (e) => {
    c = 3
    whichSelected(c)
})

foodCategoryIce.addEventListener('click', (e) => {
    c = 4
    whichSelected(c)
})