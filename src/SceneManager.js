const $ = require('jquery')

export default class SceneManager {
  
  constructor() {
    this.currentScene = localStorage.getItem('__current_scene') ?? 'loading' 
    this.load()
  }

  load() { 
    switch(this.currentScene) {
      case 'loading':
        $("#🎬").load("./scenes/loading/scene.html")
        setTimeout(() => {
          this.set('main-menu')
        }, 5500)
        break;
      case 'main-menu':
        $("#🎬").load('./scenes/main-menu/scene.html')
        break;
      case 'settings':
        $("#🎬").load('./scenes/settings/scene.html')
        break;
      default: 
        this.set('loading')
        this.load()
        break;
    }
  }
  

  set(scene) {
    localStorage.setItem('__current_scene', scene)
    this.currentScene = scene
    this.load()
  }

}