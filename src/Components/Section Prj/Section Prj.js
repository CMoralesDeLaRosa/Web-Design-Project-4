import '/style.css'
import './Section Prj.css'
import { parts } from '../../../main'
import { createCardProjects } from '../Card-2/Card-2'

export const createSection3 = (nodoPadre) => {
  const section3 = document.createElement('section')
  section3.classList.add('section3', 'flex-container')
  section3.id = 'Proyectos'
  nodoPadre.appendChild(section3)

  const h2Projects = document.createElement('h2')
  h2Projects.innerText = parts[2].toUpperCase()

  const artProjects = document.createElement('article')
  artProjects.classList.add('flex-container')

  section3.appendChild(h2Projects)
  section3.appendChild(artProjects)

  createCardProjects(artProjects)
}
