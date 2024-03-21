import '/style.css'
import './Header.css'
import { data } from '../../../main'
import { parts } from '../../../main'
import { createSection1 } from '../Section-About me/Section-About me'
import { createSection2 } from '../Section-Edu-Exp/Section-Edu-Exp'
import { createSection3 } from '../Section Prj/Section Prj'

export const createHeader = (nodoPadre) => {
  const header = document.createElement('header')
  header.classList.add('header', 'flex-container')

  const section1h = document.createElement('section')
  const h1 = document.createElement('h1')
  const section2h = document.createElement('section')
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')

  h1.textContent = data.name.toUpperCase()

  for (const [index, element] of parts.entries()) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.innerText = element.toUpperCase()
    a.href = '#' + element
    li.appendChild(a)
    ul.appendChild(li)
  }

  section1h.classList.add('section1h')
  section2h.classList.add('section2h', 'flex-container')
  ul.classList.add('flex-container')

  header.appendChild(section1h)
  header.appendChild(section2h)
  section1h.appendChild(h1)
  section2h.appendChild(nav)
  nav.appendChild(ul)
  nodoPadre.appendChild(header)

  document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a')
    links.forEach((link) => {
      link.addEventListener('click', scrollToSection)
    })
  })

  function scrollToSection(event) {
    event.preventDefault()
    const targetId = this.getAttribute('href')
    const targetSection = document.querySelector(targetId)
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}
