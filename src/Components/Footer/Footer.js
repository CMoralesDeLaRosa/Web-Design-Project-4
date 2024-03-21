import '/style.css'
import './Footer.css'
import { data } from '../../../main'

export const createFooter = (nodoPadre) => {
  const footer = document.createElement('footer')
  const pFooter = document.createElement('p')

  footer.classList.add('footer', 'flex-container')
  pFooter.innerText = `CREADO POR ${data.name.toUpperCase()}`

  nodoPadre.appendChild(footer)
  footer.appendChild(pFooter)
}
