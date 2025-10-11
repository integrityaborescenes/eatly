const sortByContainer = document.querySelector('.sortBy')
const sortByCategory = sortByContainer.querySelector('.sortByCategory')
const sortByCategoryText = sortByCategory.querySelectorAll('p')

sortByCategoryText.forEach(p => {

    p.addEventListener('click', () => {
        sortByCategoryText.forEach(p => {
            p.classList.remove('active')
        })
        p.classList.toggle('active')
    })
})
