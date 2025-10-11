const menuSelector = document.querySelector('.menuSelector')
const selectFood = menuSelector.querySelector('.selectFood')
const selectRestaurant = menuSelector.querySelector('.selectRestaurant')
const selectFoodText = selectFood.querySelector('p')
const selectRestaurantText = selectRestaurant.querySelector('p')

selectFood.addEventListener('click', (e) => {
    selectFood.style.background = "var(--purple-color-main)"
    selectFoodText.style.color = "var(--white-color)"
    selectRestaurant.style.background = "var(--white-color)"
    selectRestaurantText.style.color = "var(--purple-color-main)"
})

selectRestaurant.addEventListener('click', (e) => {
    selectFood.style.background = "var(--white-color)"
    selectFoodText.style.color = "var(--purple-color-main)"
    selectRestaurant.style.background = "var(--purple-color-main)"
    selectRestaurantText.style.color = "var(--white-color)"
})