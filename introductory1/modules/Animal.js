// declaring a function type
function Animal(type) {
    //function constructor to allow create a new animal
    this.type = type;
}

// specify Animal as the default export for this file by attaching to module.exports
module.exports = Animal;

/* module.exports is an object that can contain functions to export,
/*  or a single class or function constructor