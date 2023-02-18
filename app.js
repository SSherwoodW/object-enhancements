//shorthand

function makePerson(first, last, age){
    return {
        first: first,
        last: last,
        age: age,
        isAlive: true
    }
}

    //THE NEW WAY
function makePerson2(first, last, age){
    return {
        first, 
        last, 
        age,
        isAlive: true
    }
}


//OBJECT METHODS
    //OBJECT METHOD = function storing as a property in an object
        //OLD WAY
    const mathStuff = {
        x: 200,
        add: function(a,b){
            return a + b;
        },
        square: function(a){
            return a * a;
        }
    }

        //NEW WAY!
            
    const mathStuff2 = {
        x: 200,
        add(a,b){
            return a + b;
        },
        square(a){
            return a * a;
        },
        multiply: (a,b) => { ////do NOT use arrow functions here! this is the only way you CAN use arrow fxns in objects--the shorthand does not work.
            return a * b;
        }
    } 


//COMPUTED PROPERTY NAMES
    //allow us to create an object with a key that JS can compute at definition

    // periwinkle: '9c88ff'
    // bright ube: 'D6A2E8'

    //this is what we want // 
    // const color = {
    //     periwinkle: '9c88ff',
    //     '9c88ff': 'periwinkle'
    // }

        //this is the OLD WAY!
    function makeColor(name, hex){
        const color = {}
        color[name] = hex;
        color[hex] = name;
    }

        //here's how to do it with COMPUTED PROPERTY NAMES!
    function makeColor2(name, hex) {
        return {
            [name] : hex,
            [hex] : name,
        };
    }
        //another cool shorthand
    const mystery = {
        [6 + 7]: 'thirteen'
    };

