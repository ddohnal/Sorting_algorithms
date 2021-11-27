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
    selectionSort(newArrays[i]);
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
      label: 'Select sort',
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

function selectionSort(inputArr) {
    let n = inputArr.length;

    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            countSteps += 1;
            if(inputArr[j] < inputArr[min]) {
                min=j;
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i];
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;
        }
    }
}
