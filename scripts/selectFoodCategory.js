const foodCategorysSelect = document.querySelector('.foodCategorysSelect')
const foodCategoryPizza = foodCategorysSelect.querySelector('.foodCategoryPizza')
const foodCategoryAsian = foodCategorysSelect.querySelector('.foodCategoryAsian')
const foodCategoryDonat = foodCategorysSelect.querySelector('.foodCategoryDonat')
const foodCategoryIce = foodCategorysSelect.querySelector('.foodCategoryIce')

let c = 0
const whichSelected = (k) => {
    foodCategoryPizza.classList.remove('active')
    foodCategoryAsian.classList.remove('active')
    foodCategoryDonat.classList.remove('active')
    foodCategoryIce.classList.remove('active')

    if (k===1) {
        foodCategoryPizza.classList.toggle('active')
    } else if (k===2) {
        foodCategoryAsian.classList.toggle('active')
    } else if (k===3) {
        foodCategoryDonat.classList.toggle('active')
    } else if (k===4) {
        foodCategoryIce.classList.toggle('active')
    }
}

foodCategoryPizza.addEventListener('click', (e) => {
    k = 1
    whichSelected(k)
})

foodCategoryAsian.addEventListener('click', (e) => {
    k = 2
    whichSelected(k)
})

foodCategoryDonat.addEventListener('click', (e) => {
    k = 3
    whichSelected(k)
})

foodCategoryIce.addEventListener('click', (e) => {
    k = 4
    whichSelected(k)
})