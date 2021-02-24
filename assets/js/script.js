

// nav toggler

const navBurger = document.querySelector('.nav-burger')
const navContent = document.querySelector('header nav ul')

navBurger.addEventListener('click', () => {
    navContent.classList.toggle('active')
})

// Tabs

const tabs = document.querySelectorAll('[data-tab-target')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')

        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
    })
})