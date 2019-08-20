import Cat from "../models/Cat.js";

let _cats = {
  cat: new Cat("Mr. Snibbly"),
  cat2: new Cat("Fluffy")
}


export default class CatService {

  //access cat, increase pet count
  pet(catProp) {
    _cats[catProp].petCount++
    // console.log(_cat.petCount)
  }

  get Cat() {
    //this is not copied yet, it is real data. BAD
    return _cats.cat
  }

  get Cat2() {
    //this is not copied yet, it is real data. BAD
    return _cats.cat2
  }

  constructor() {
    console.log("Hello from cat service")
  }

  //reset the cat pet count to zero
  catnip(catProp) {
    _cats[catProp].petCount = 0
  }

}