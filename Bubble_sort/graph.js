function generateLimits(start, end){
  var list =[];
  for (var i = start; i <= end; i += 1000) {
    list.push(i);
  }
  return list;
}

function generateArray2(n){
  var list = [];
  for (var i = 0; i < n; i++) {
    var value = Math.ceil(Math.random()*500000);
    list.push(value);
  }
  return list;
}

var xValues = generateLimits(1000, 10000);
var newArrays = xValues.map(generateArray2);
var countSteps = 0;

var bubbleValues = [];
// var bubbleEnhValues = [];

for(var i = 0; i< newArrays.length;i++){
    countSteps = 0;
    bubbleSort([...newArrays[i]]);
    bubbleValues.push(countSteps);
}

// for(var i = 0; i< newArrays.length;i++){
//     countSteps = 0;
//     bubbleSortEnh([...newArrays[i]]);
//     bubbleEnhValues.push(countSteps);
// }

function myPow(x){
  return x*x;
}

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: 'Bubble sort',
      data: bubbleValues,
      borderColor: "red",
      fill: false

    },{
      label: "Kvadratická funkce",
      data: xValues.map(myPow),
      borderColor: "black",
      fill: false
    }]
  },
  options: {
    legend: {position: 'right'},
    scales: {
      xAxes: [{
        scaleLabel:{
          display:true,
          labelString: "Počet prvků"
        }
      }],
      yAxes: [{
        scaleLabel:{
          display:true,
          labelString: "Počet porovnání",
        },
      }],
    }
  }
});

function bubbleSort(arr){

 for(var i = 0; i < arr.length; i++){

   // Last i elements are already in place
   for(var j = 0; j < ( arr.length - i -1 ); j++){

     // Checking if the item at present iteration
     // is greater than the next iteration
     countSteps +=1;
     if(arr[j] > arr[j+1]){

       // If the condition is true then swap them
       var temp = arr[j]
       arr[j] = arr[j + 1]
       arr[j+1] = temp
     }
   }
 }
}
// function bubbleSortEnh(arr){
// var swap = 0;
//  for(var i = 0; i < arr.length; i++){
//
//    // Last i elements are already in place
//    for(var j = 0; j < ( arr.length - i -1 ); j++){
//
//      // Checking if the item at present iteration
//      // is greater than the next iteration
//      countSteps +=1;
//      if(arr[j] > arr[j+1]){
//
//        // If the condition is true then swap them
//        var temp = arr[j]
//        arr[j] = arr[j + 1]
//        arr[j+1] = temp
//        swap = 1;
//      }
//    }
//    if (swap == 0){
//      break;
//    }
//  }
// }
