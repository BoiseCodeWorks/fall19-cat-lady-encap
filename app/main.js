import CatController from "./controllers/CatController.js";
import DogController from "./controllers/DogController.js";



//app definition and main entry point

class App {
  constructor() {
    console.log("App created")
    this.controllers = {
      catController: new CatController(),
      dogController: new DogController()
    }
  }
}


window["app"] = new App()