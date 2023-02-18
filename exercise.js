/* Write an ES2015 Version */
function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}

//Computed Property Names ES2015
let favoriteNumber = 42;
const instructor = {
    firstName: "colt",
    [favoriteNumber]: 'that is my favorite!'
}

//Object Methods
const instructor2 = {
    firstName: 'Colt',
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}