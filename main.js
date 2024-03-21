import './style.css'

import { createHeader } from './src/Components/Header/Header'
import { createSection1 } from './src/Components/Section-About me/Section-About me'
import { createSection2 } from './src/Components/Section-Edu-Exp/Section-Edu-Exp'
import { createSection3 } from './src/Components/Section Prj/Section Prj'
import { createFooter } from './src/Components/Footer/Footer'

export const data = {
  name: 'Cristina Morales',
  address: 'Alcalá de Henares',
  email: 'cristina.moralesdelarosa@gmail.com',
  phoneNumber: '697 289 070',
  avatar:
    'https://i.pinimg.com/736x/8f/c2/ad/8fc2adfb17b261162bbd9a4af5239c64.jpg',
  current: 'ARTES ESCÉNICAS / COMERCIAL',

  education: [
    {
      degree: 'Grado en Arquitectura',
      university: 'Universidad de Alcalá',
      graduationYear: 'Graduada en 2016',
      image: '/Assets/Casa_icon.png'
    },
    {
      degree: 'Gestión cultural',
      university: 'Universidad Miguel de Cervantes',
      graduationYear: 'Graduada en 2018',
      image: '/Assets/Cult _icon.png'
    },
    {
      degree: 'Dirección de fotografía',
      university: '35mm School',
      graduationYear: 'Graduada en 2020',
      image: '/Assets/Cam_icon.png'
    },
    {
      degree: 'Desarrollador web',
      university: 'The Power Business Shool',
      graduationYear: 'En curso',
      image: '/Assets/Ordenador-Icon.png'
    }
  ],
  workExperience: [
    {
      position: 'Dirección escuela de danza',
      company: 'Creand¡Oh!',
      time: '2015-2022',
      image: '/Assets/Escuela_icon.png'
    },
    {
      position: 'Gestión eventos',
      company: 'Creand¡Oh!',
      time: '2015-2022',
      image: '/Assets/Direct_icon.png'
    },
    {
      position: 'Profesora danza',
      company: 'Creand¡Oh!',
      time: '2015-2022',
      image: '/Assets/Zapa_icon.png'
    },
    {
      position: 'Comercial',
      company: 'OcasiónPlus | Hubside | Orange',
      time: '2022-act.',
      image: '/Assets/Caja_icon.png'
    }
  ],

  projects: [
    {
      title: 'Creand¡Oh!',
      description:
        'Es una escuela de danza y artes escénicas que trabaja la educación a través de las artes escénicas. Además de tener una gran variedad de clases organiza en colaboración con otras instituciones cultares eventos artísticos.',
      image: '/Assets/Creandoh_img.jpg'
    },
    {
      title: '#WeAreschool',
      description:
        'Es un proyecto artístico cuya finalidad es trabajar diferentes temáticas a través de las artes plásticas. En colaboración con diferentes centros educativos se diseña un mural con sus alumnos/as y estos lo llevan a cabo.',
      image: '/Assets/murales_img.jpg'
    },
    {
      title: 'Videoclip Papaoutai',
      description:
        'Es un proyecto que combina la danza con el audiovisual creando una interpretación de la canción original "Papaoutai" del artista francés Stromae. Se cuenta con la colaboración de bailarines de diferentes edades y estilos',
      image: '/Assets/Papoutai_img.jpg'
    },
    {
      title: 'Interpretación Diseño Web Bershka',
      description:
        'Diseño de un fragmento de la web de la marca Bershka, recreando los estilos y funcionalidades de la página. En este caso se trabaja con la creación de filtros tanto por modelo como por precio',
      image: '/Assets/Bershka_img.jpg'
    },
    {
      title: 'Interpretación diseño Web Ikea',
      description:
        'Diseño de la landing page de Ikea, recreando sus estilos. Se trabaja con CSS y con la arquitectura de la página para entender en profundidad la creación de estilos y cómo estos se aplican a su información ',
      image: '/Assets/Ikea_img.jpg'
    }
  ]
}
export const parts = ['Conóceme', 'Resumen', 'Proyectos', 'Contacto']

export const presentacion = {
  saludo: '¡Bienvenido/a!',
  presentacion: 'Aquí te cuento quién soy y lo que hago',
  resumen:
    'Tras seis años dirigiendo mi propia escuela de danza y dos años como asesora comercial en diferentes empresas, he conseguido un perfil profesional bastante completo, debido a lo que me ha aportado cada experiencia, y especializado en la atención al cliente. Actualmente, me he embarcado en el mundo del desarrollo web, complementándolo con mis conocimientos de diseño gráfico y es en lo que me quiero asentar.'
}

const body = document.querySelector('#body')

/*HEADER*/
createHeader(body)

/*MAIN*/
const main = document.createElement('main')
body.appendChild(main)

createSection1(main)
createSection2(main)
createSection3(main)

/*FOOTER*/
createFooter(body)
