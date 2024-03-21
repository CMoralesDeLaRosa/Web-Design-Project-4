import '/style.css'
import './Button.css'

export const createButton = (nodoPadre, texto, estado = 'Click') => {
  const button = document.createElement('button')
  button.classList.add('button', estado)
  button.innerText = texto.toUpperCase()
  nodoPadre.appendChild(button)

  return button
}
