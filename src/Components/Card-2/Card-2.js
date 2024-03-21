import '/style.css'
import './Card-2.css'
import { data } from '../../../main'

export const createCardProjects = (nodoPadre) => {
  for (const element of data.projects) {
    const card2 = document.createElement('div')
    card2.classList.add('card2', 'flex-container')

    const div = document.createElement('div')
    const h4 = document.createElement('h4')
    const p = document.createElement('p')

    h4.innerText = element.title.toUpperCase()
    p.innerText = element.description

    nodoPadre.appendChild(card2)
    card2.appendChild(div)
    div.appendChild(h4)
    card2.appendChild(p)

    const mostrarImg = () => {
      const imgCard2 = document.createElement('img')
      imgCard2.src = element.image
      card2.appendChild(imgCard2)
    }

    let imagenVisible = false

    card2.addEventListener('click', () => {
      if (imagenVisible) {
        card2.removeChild(card2.lastChild)
        card2.appendChild(div)
        div.appendChild(h4)
        card2.appendChild(p)
        imagenVisible = false
      } else {
        card2.innerHTML = ''
        div.remove()
        mostrarImg()
        imagenVisible = true
      }
    })
  }
}
