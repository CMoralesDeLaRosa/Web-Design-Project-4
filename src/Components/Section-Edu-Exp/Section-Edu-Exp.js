import '/style.css'
import './Section-Edu-Exp.css'
import { parts } from '../../../main'
import { createButton } from '../Button/Button'
import { createCard1Edu } from '../Card-1/Card-1'
import { createCard1Exp } from '../Card-1/Card-1'

export const createSection2 = (nodoPadre) => {
  const section2 = document.createElement('section')
  section2.classList.add('section2', 'flex-container')
  section2.id = 'Resumen'
  nodoPadre.appendChild(section2)

  const art1Resumen = document.createElement('article')
  const h2Resumen = document.createElement('h2')
  const divButResumen = document.createElement('div')
  const art2Resumen = document.createElement('article')

  h2Resumen.innerText = parts[1].toUpperCase()

  const mostrarEducacion = () => {
    art2Resumen.innerHTML = ''
    createCard1Edu(art2Resumen)
    botonEdu.classList.add('click')
    botonExp.classList.remove('click')
  }

  const mostrarExperiencia = () => {
    art2Resumen.innerHTML = ''
    createCard1Exp(art2Resumen)
    botonExp.classList.add('click')
    botonEdu.classList.remove('click')
  }

  const botonEdu = createButton(divButResumen, 'Educación', 'noClick')
  const botonExp = createButton(divButResumen, 'Experiencia', 'noClick')

  botonEdu.addEventListener('click', mostrarEducacion)
  botonExp.addEventListener('click', mostrarExperiencia)

  mostrarEducacion()

  art1Resumen.classList.add('art1Resumen', 'flex-container')
  divButResumen.classList.add('divButResumen', 'flex-container')
  art2Resumen.classList.add('art2Resumen', 'flex-container')

  art1Resumen.appendChild(h2Resumen)
  art1Resumen.appendChild(divButResumen)
  section2.appendChild(art1Resumen)
  section2.appendChild(art2Resumen)
}
