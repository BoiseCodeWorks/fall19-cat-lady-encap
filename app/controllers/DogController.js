import DogService from "../services/DogService.js";

//PRIVATE
let _dogService = new DogService()

//access elements on the page, replace values from the dog
function _draw() {
  let nameElement = document.querySelector("#dog-name")
  let petCountElement = document.querySelector("#dog-pet-count")
  let dog = _dogService.Dog
  nameElement.textContent = dog.name
  petCountElement.textContent = dog.petCount.toString()
}

//PUBLIC
export default class DogController {
  constructor() {
    console.log("wie gehts es einen auf hunde kontrollern")
    _draw()
  }



  //let the service know the user wants to pet the dawg
  pet() {
    _dogService.pet()
    _draw()
  }

}