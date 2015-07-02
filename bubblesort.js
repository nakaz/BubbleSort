var messyArray = [4,3,2,7,10,6];

function sort(arr){
  var unsorted = true;
  while(unsorted){
    unsorted = false;
    for (var i = 0; i < arr.length - 1; i++){
      var a = arr[i];
      var b = arr[i+1];
      var temp = null;
      if (a > b){
        console.log(a, 'greater');
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        unsorted = true;
        console.log(arr);
      }
    }
  }
}

sort(messyArray);

// messyArray.forEach(function (element, index, array){
//   console.log(element, index) ;
// });