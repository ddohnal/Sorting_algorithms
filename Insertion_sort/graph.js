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
    insertionSort(newArrays[i]);
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
      label: 'Insert sort',
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

function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1;
            while ((j > -1) && (current < inputArr[j])) {
                countSteps += 1;
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}
