function receivesAFunction(callback) {
    callback();
    
}

// function namedFunction() {

// }

function returnsANamedFunction() {
    return function extraHelper(){

    };
}

function returnsAnAnonymousFunction() {
    return function (){
        
    }
}