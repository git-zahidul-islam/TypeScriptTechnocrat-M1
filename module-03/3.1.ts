{
    // oop introduce
    class Animal {

        constructor(public name: string,public species: string,public sound:string){};

        makeSound(){
            console.log(`the ${this.name} make sound like ${this.sound}`);
        }
    }

    const dog = new Animal('Garman DOg','Dog','Ghew Hgew')
    const cat = new Animal('Deshi Hunter','Cat','Maw Maw')
    dog.makeSound()
    cat.name;
}