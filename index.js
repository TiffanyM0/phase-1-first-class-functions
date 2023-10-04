const favAuthor= function (){
 return("I read Jane Austine!")
}

function receivesAFunction(favAuthor){
    return favAuthor();
}

function author(){
    return function readBooks(){
        return "For Brainiacs!"
    };
}

function returnsANamedFunction(){
    return author();
}

function returnsAnAnonymousFunction(){
    return function(){
        return "I can do this!";
    }
}