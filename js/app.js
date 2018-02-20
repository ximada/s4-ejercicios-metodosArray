

// 1 ) Crea tu propia función forEach que funcione igual a Array.forEach. Algo asi:
function myForEach(array, callback){
    callback(array);
    }
    //Se manda a llamar
    myForEach([1,2,3,4], function(array){
        for(i=0; i< array.length; i++){
        }
        console.log(array);
    });

    // 2 ) Crea tu propia función map que funcione igual a Array.map. Algo asi:
function myMap(array, callback){
    callback(array);
  }
    //Se manda a llamar
    myMap([1,2,3,4],function(array){
        var newArray = []; //Creamos un arreglo nuevo
        for(i=0; i<array.length; i++){
            newArray.push(array[i]);
        }
        console.log(newArray);
    })

	