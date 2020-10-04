export class SceneManager {
  
  constructor() {
    this.currentScene = localStorage.getItem('__current_scene') ?? 'loading' 
  }

  load() { // startScene() z Potatoes
    switch(this.currentScene) {
      case 'loading':
        content = fs.readFileSync(__dirname + '/../scenes/loading/scene.html')
        document.body.innerHTML = content
        setTimeout(() => {
          this.changeScene('main-menu')
        }, 5500)
        break;
      case 'main-menu':
        break;
      default: 
        this.set('loading')
        this.load()
        break;
    }
  }
  
  /*
  startScene() {
    let content: any
    switch(window.localStorage.getItem('__current_scene')) {
      case 'loading': 
        content = fs.readFileSync(__dirname + '/../scenes/Loading/content.html')
        document.body.innerHTML = content
        setTimeout(() => {
          this.changeScene('menu')
        }, 5500)
      break;
      case 'menu': 
        content = fs.readFileSync(__dirname + '/../scenes/Menu/content.html')
        document.body.innerHTML = content

        let StartGame: any = document.getElementById('start-game')
        StartGame.addEventListener('click', () => {
          this.changeScene('start game')
        })

        let characterImage: any = document.getElementById('character-image')
        characterImage.src = "static/character/blinking/1.png"
        setInterval(() => {
          setTimeout(() => {
            characterImage.src = "static/character/blinking/1.png"      
          }, 155)
          characterImage.src = "static/character/blinking/2.png"
        }, 3500)
      break;
      case 'start game': 
        content = fs.readFileSync(__dirname + '/../scenes/StartGame/content.html')
        document.body.innerHTML = content
        let BackButton: any = document.getElementById('back')
        BackButton.addEventListener('click', () => {
          this.changeScene('menu')
        })
      break
      default: 
      break;
    }
  }
  */

  set(scene) {
    localStorage.setItem('__current_scene', scene)
    this.currentScene = scene
    this.load()
  }

}