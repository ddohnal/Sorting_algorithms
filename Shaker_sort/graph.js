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

var yValues = [];

for(var i = 0; i< newArrays.length;i++){
    countSteps = 0;
    shakerSort(newArrays[i]);
    yValues.push(countSteps);
}

function myPow(x){
  return x*x;
}

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: 'Shaker sort',
      data: yValues,
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

function shakerSort(arr){

 for(var i = 0; i < arr.length; i++){

   // Last i elements are already in place
   for(var j = i; j < ( arr.length - i -1 ); j++){
     // Checking if the item at present iteration
     // is greater than the next iteration
     countSteps += 1;
     if(arr[j] > arr[j+1]){
       // If the condition is true then swap them
       var temp = arr[j]
       arr[j] = arr[j + 1]
       arr[j+1] = temp
     }
   }
   for(var j = arr.length - i -2;j>j; j-=1){
     countSteps += 1;
     if(arr[j]<arr[j-1]){
       var temp = arr[j];
       arr[j] = arr[j-1];
       arr[j-1]=temp;
     }
   }
 }
}
