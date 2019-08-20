import Dog from "../models/Dog.js";

let _dog = new Dog("Bingo")


export default class DogService {
  constructor() {
    console.log("Hello from dog service");
  }


  // add to the dogs pet count
  pet() {
    _dog.petCount++
  }

  get Dog() {
    return _dog
  }
}