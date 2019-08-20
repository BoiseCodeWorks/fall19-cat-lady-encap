import CatService from "../services/CatService.js";

//NOTE PRIVATE
let _catService = new CatService()


//NOTE get cat data from service
//draw petcount and name from cat on screen
//access elements in html and replace value
function _draw() {
  //FIXME kinda gross draw method here
  //NOTE cat 1
  let catNameElement = document.querySelector("#cat-name")
  let catPetCountElement = document.querySelector("#cat-pet-count")
  let cat = _catService.Cat

  //NOTE cat 2
  let cat2NameElement = document.querySelector("#cat2-name")
  let cat2PetCountElement = document.querySelector("#cat2-pet-count")
  let cat2 = _catService.Cat2

  catNameElement.textContent = cat.name
  catPetCountElement.textContent = cat.petCount.toString()

  cat2NameElement.textContent = cat2.name
  cat2PetCountElement.textContent = cat2.petCount.toString()

}


//PUBLIC
export default class CatController {
  constructor() {
    console.log("hey from cat controller")
    _draw()
  }

  //let service know the user wants to pet the cat
  pet(catProp) {
    // console.log("called pet in controller")
    _catService.pet(catProp)
    _draw()
  }


  //let the service know the user wants to dose the cat
  catnip(catProp) {
    _catService.catnip(catProp)
    _draw()
  }

}