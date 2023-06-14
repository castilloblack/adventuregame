const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: '¿Como se llama la esposa de el señor?.',
    options: [
      {
        text: 'Maria',
        setState: { blueGoo: true },
        nextText: 2
      },
      {
        text: 'Juana',
        nextText: 3
      }
    ]
  },
  {
    id: 2,
    text: 'Respuesta incorrecta',
    options: [
      {
        text: 'Intentalo de nuevo',
        nextText: 1
      }
    ]
  },
  {
    id: 3,
    text: 'y ¿el señor como se llama?.',
    options: [
      {
        text: 'Pancho',
        nextText: 5
      },
      {
        text: 'Juan',
        nextText: 4
      },
    ]
  },
  {
    id: 4,
    text: 'Respuesta incorrecta',
    options: [
      {
        text: 'Intentalo de nuevo',
        nextText: 1
      }
    ]
  },
 {
    id: 5,
    text:  'y ¿el señor como se llama?.',
    options: [
      {
        text: 'Pancho',
        nextText: 7
      },
      {
        text: 'Juan',
        nextText: 6
      },
    ]
 },
  
  { 
    id: 6,
    text: 'respuesta incorrecta',
    options: [
      {
        text: 'intentalo de nuevo',
        nextText: 1
      },
    ]
  },

  {
    id: 7,
    text: '¿Que edad tiene el señor?',
    options: [
      {
        text: '63 años',
        nextText: 9
      },
      {
        text: '89 años',
        nextText: 8
      },
      {
        text: '44 años',
        nextText: 8
      },
    ]
  },
  {
    id: 8,
    text: 'respuesta incorrecta',
    options: [
      {
        text: 'intentalo de nuevo',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: '¿En donde se encontro al señor muerto?',
    options: [
      {
        text: 'en la sala',
        nextText: 10
      },
       {
        text: 'en la cocina',
        nextText: 10
      },
      {
        text: 'en su cuarto',
        nextText: 11
      },
    ]
  },
  {
    id: 10,
    text: 'Respuesta incorrecta',
    options: [
      {
        text: 'intentalo de nuevo',
        nextText: 1
      },
    ]
  },
   {
    id: 11,
    text: '¿Quien esta mintiendo por tanto es el asesino?',
    options: [
      {
        text: 'la esposa',
        nextText: 12
      },
       {
        text: 'el jardinero',
        nextText: 13
      },
      {
        text: 'la señora de la limpieza',
        nextText: 12
      },
    ]
  },
   {
    id: 13,
    text: 'Respuesta correcta , bien echo',
    options: [
      {
        text: '¿jugamos de nuevo?',
        nextText: 1
      },
    ]
  },
    ]
startGame()