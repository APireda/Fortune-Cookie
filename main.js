const phrases = ['A vida trará coisas boas se tiver paciência.', 'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.', 'Não compense na ira o que lhe falta na razão.', 'Defeitos e virtudes são apenas dois lados da mesma moeda.', 'A maior de todas as torres começa no solo.', 'Não há que ser forte. Há que ser flexível.', 'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?', 'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.', 'A juventude não é uma época da vida, é um estado de espírito.', 'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.']

const heading = document.querySelector('h1')
const paragraphWrapper = document.querySelector('div')
const phrase = document.querySelector('p')
const fortuneCookie = document.getElementById('fortune-cookie')
const openedCookie = document.getElementById('opened-cookie')
const retryButton = document.getElementById('retry-button')

const toggle = () => {
  retryButton.classList.toggle('hidden')
  openedCookie.classList.toggle('hidden')
  fortuneCookie.classList.toggle('hidden')
  paragraphWrapper.classList.toggle('cookie-message')
}

const handleCookieClick = () => {
  toggle()
  heading.textContent = 'Aqui está a sua sorte de hoje:'
  phrase.textContent = phrases[Math.floor(Math.random() * phrases.length)]
}

const handleRetryButtonClick = () => {
  toggle()
  heading.textContent = 'Qual é a sua sorte de hoje?'
  phrase.textContent = 'Abra o biscoito e descubra!'
}

fortuneCookie.addEventListener('click', handleCookieClick)
retryButton.addEventListener('click', handleRetryButtonClick)