function abc() {
    // when code reaches over here, a is undefined, 
    // because it has initialized this function 
    // but it has it has not initialized this variable yet!
    console.log(a)

    // when this function initialized in our execution context , 
    // it's going to host this variable a and console.log going to undefined 
    var a = 10
}

function abc() {
    // they a, b are in the scope, but  they are not yet declared 
    console.log(a, b, c)

    // there a, b are hosted, but there going to be a hosted in the temporary dead zone.
    // temporary dead zone is the term, describe the state where the variable are in the scope
    // but they are not yet declared 
    // 
    const a = 10
    let b = 10
    
    var c = 10
}


// when this function initialized in our execution context  
abc()

/************************************************************************************************************ */
// Emplicity and Explicit Binding

var obj = {
    name: 'Abc',
    display: function () {
        console.log(this.name)
    }
}

var obj1 = {
    name: 'def'
}

obj.display.call(obj1)
