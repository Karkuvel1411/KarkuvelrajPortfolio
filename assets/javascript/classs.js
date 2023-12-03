class Movie {
    constructor(name){
        this.name = name;
        console.log("Constructor");
    }
    static display(){
        console.log("Display");
    }
}

class B extends Movie {
    
}
let movie1  = new Movie("Robo");
console.log(movie1.name);
Movie.display();