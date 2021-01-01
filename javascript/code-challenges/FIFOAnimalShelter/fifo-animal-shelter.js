class AnimalShelter{
  constructor (){
    this.front = null;
    this.end = null;
  }

  enqueue(animal){
    if((animal.toLowerCase() !== 'cat' )||(animal.toLowerCase() !== 'dog')){
      return null;}
    let newAnimal = {value: animal, next: null};
    if(this.end) {this.end.next = newAnimal;}
    this.end =newAnimal;
    if (!this.front){ this.front = newAnimal;}
  }
  dequeue(pref){
    if((pref.toLowerCase() !== 'cat' )||(pref.toLowerCase() !== 'dog')){
      return null;}
    if (!this.front){ throw new Error('Empty Queue');}
    if(pref === this.front.value){
      const adopted = this.front;
      this.front = this.front.next;
      return adopted.value;}
    return `todays pet is ${this.front.value}`;}
}

module.exports = AnimalShelter;
