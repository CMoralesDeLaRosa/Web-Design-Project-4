import '/style.css'
import './Section-About me.css'
import { data } from '../../../main'
import { presentacion } from '../../../main'

export const createSection1 = (nodoPadre) => {
  const section1 = document.createElement('section')
  section1.classList.add('section1', 'flex-container')
  section1.id = 'Conóceme'
  nodoPadre.appendChild(section1)

  const article1 = document.createElement('article')
  article1.id = 'Contacto'
  const article2 = document.createElement('article')
  const divImg = document.createElement('div')
  const img = document.createElement('img')
  const h3 = document.createElement('h3')
  const p = document.createElement('p')
  const divCont = document.createElement('div')

  const pTelf = document.createElement('p')
  const pEmail = document.createElement('p')

  img.src = '/Assets/Perfil Img.png'
  h3.innerText = data.name.toUpperCase()
  p.innerText = data.current.toUpperCase()
  pTelf.innerText = data.phoneNumber
  pEmail.innerText = data.email

  article1.classList.add('article1', 'flex-container')
  article2.classList.add('article2', 'flex-container')
  divCont.classList.add('divCont', 'flex-container')

  section1.appendChild(article1)
  section1.appendChild(article2)
  article1.appendChild(divImg)
  divImg.appendChild(img)
  article1.appendChild(h3)
  article1.appendChild(p)
  article1.appendChild(divCont)

  divCont.appendChild(pTelf)
  divCont.appendChild(pEmail)

  const h3Hola = document.createElement('h3')
  const pHola = document.createElement('p')
  const pResumen = document.createElement('p')

  h3Hola.innerText = presentacion.saludo.toUpperCase()
  pHola.innerText = presentacion.presentacion.toUpperCase()
  pResumen.innerText = presentacion.resumen

  article2.appendChild(h3Hola)
  article2.appendChild(pHola)
  article2.appendChild(pResumen)
}
