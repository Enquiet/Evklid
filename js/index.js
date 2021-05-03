const listTabs = document.querySelector('.tabs');
const linkTabsElem = document.querySelectorAll('.tabs__link');
const linkContentElem = document.querySelectorAll('.about-card');
const itemQuestions = document.querySelectorAll('.questions__item')
const burgerBtn = document.querySelector('.header__burder')
const burgetMenu = document.querySelector('.menu')

const switchTab = () => {
  listTabs.addEventListener('click', function(e){
    if(e.target.closest('.tabs__link')){
      const id = e.target.getAttribute('href').replace('#', '')
      linkTabsElem.forEach(i => i.classList.remove('tabs__link--active'))
      linkContentElem.forEach(i => i.classList.remove('is-active'))
      e.target.classList.add('tabs__link--active')
      document.getElementById(id).classList.add('is-active')
    }
  })
}


const showQuestion = () =>{
  itemQuestions.forEach(question => {
    question.addEventListener('click', function(e){
      question.classList.toggle('questions__item--active')
    })
  })
}

burgerBtn.addEventListener('click', function(){
  burgerBtn.classList.toggle('header__burder--close')
  burgetMenu.classList.toggle('is-active')
})




document.addEventListener("DOMContentLoaded", function(){
  switchTab()
  showQuestion()
});
