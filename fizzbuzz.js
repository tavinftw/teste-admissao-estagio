for (var i = 1; i <= 100; i++) {
   
    //Valida primeiro se a variável i é múltiplo de 3 e 5 simultaneamente e a imprime no console caso seja

    if ( (i % 3 == 0) && (i % 5 == 0) ) {
    console.log("FizzBuzz");
    }
  
    //Valida se a variável i é múltiplo de 3 apenas e a imprime no console caso seja 

    if ( (i % 3 == 0) && (i % 5 != 0)) {
    console.log("Fizz");
    }

    //Valida se a variável i é múltiplo de 5 apenas e a imprime no console caso seja 

     if ( (i % 5 == 0) && (i % 3 != 0)) {
    console.log("Buzz");
    }
    
    //Valida se a variável i não atende a nenhuma das condições e imprime caso não atenda 

    if ( (i % 3 != 0) && (i % 5 != 0) ) {
    console.log(i);
    }
    
  }