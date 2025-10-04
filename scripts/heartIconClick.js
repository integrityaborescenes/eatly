const heart = document.querySelectorAll('.heartIcon')

heart.forEach(heart => {
    let heartIndex = 1
    const heartPath = heart.querySelector('path')
    heart.addEventListener('click', () => {
        if (heartIndex === 1) {
            heartIndex = 2
            heartPath.style.fill = "var(--color-dark-red)"
        } else {
            heartIndex = 1
            heartPath.style.fill = "var(--purple-color-superdark)"
        }

        console.log(heartIndex)
    })
})

