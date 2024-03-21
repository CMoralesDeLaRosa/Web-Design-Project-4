import '/style.css'
import './Card-1.css'
import { data } from '../../../main'

export const createCard1Edu = (nodoPadre) => {
  for (const element of data.education) {
    const card1 = document.createElement('div')
    card1.classList.add('card1', 'flex-container')

    const divImgCard = document.createElement('div')
    const imgCard = document.createElement('img')
    imgCard.src = element.image
    divImgCard.appendChild(imgCard)

    const divCard1 = document.createElement('div')
    divCard1.classList.add('divCard1', 'flex-container')

    const h4Card1 = document.createElement('h4')
    h4Card1.innerText = element.degree.toUpperCase()

    const p1Card1 = document.createElement('p')
    p1Card1.innerText = element.university
    const p2Card1 = document.createElement('p')
    p2Card1.innerText = element.graduationYear

    nodoPadre.appendChild(card1)
    card1.appendChild(divImgCard)
    card1.appendChild(h4Card1)
    card1.appendChild(divCard1)
    divCard1.appendChild(p1Card1)
    divCard1.appendChild(p2Card1)
  }
}

export const createCard1Exp = (nodoPadre) => {
  for (const element of data.workExperience) {
    const card1 = document.createElement('div')
    card1.classList.add('card1', 'flex-container')

    const divImgCard = document.createElement('div')
    const imgCard = document.createElement('img')
    divImgCard.appendChild(imgCard)

    const divCard1 = document.createElement('div')
    divCard1.classList.add('divCard1', 'flex-container')

    const h4Card1 = document.createElement('h4')
    h4Card1.innerText = element.position.toUpperCase()
    imgCard.src = element.image

    const p1Card1 = document.createElement('p')
    p1Card1.innerText = element.company
    const p2Card1 = document.createElement('p')
    p2Card1.innerText = element.time

    nodoPadre.appendChild(card1)
    card1.appendChild(divImgCard)
    card1.appendChild(h4Card1)
    card1.appendChild(divCard1)
    divCard1.appendChild(p1Card1)
    divCard1.appendChild(p2Card1)
  }
}
