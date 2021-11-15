const Node=require('./Node');
class AnimalShelter{
  constructor(){

    this.dogs=null;
    this.cats=null;
    this.dogsFront=null;
    this.catsFront=null;


  }
  enqueue(animal){
    if(animal==='cat'|| animal==='dog'){

      let newAnimal=new Node(animal);

      if (animal === 'dog'){
        if(!this.dogs){
          this.dogsFront=newAnimal;
          this.dogs=newAnimal;
        }else{
          this.dogs.next=newAnimal;
          this.dogs=newAnimal;
        }
      }
      if (animal === 'cat'){
        if(!this.cats){
          this.catsFront=newAnimal;
          this.cats=newAnimal;
        }else{
          this.cats.next=newAnimal;
          this.cats=newAnimal;
        }
      }
    }else return 'exception';
  }

  dequeue(pref){
    if(pref==='cat'|| pref==='dog'){

      if(pref==='dog'){
        if(!this.dogs){return 'exception';}
        let temp=this.dogsFront;
        this.dogsFront=this.dogsFront.next;
        temp.next=null;
        return temp.value;
      }
      if(pref==='cat'){
        if(!this.cats){return 'exception';}
        let temp=this.catsFront;
        this.catsFront=this.catsFront.next;
        temp.next=null;
        return temp.value;
      }
    }else return null;
  }
}
module.exports=AnimalShelter;
