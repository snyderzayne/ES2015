// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

function double(arr) {
    return arr.map( val => val * 2);
};

// const double = arr => arr.map(val => val * 2);

function squareAndFindEvens(numbers){
    return numbers.map(num => num ** 2).filter(square => square % 2 === 0);
  }


  