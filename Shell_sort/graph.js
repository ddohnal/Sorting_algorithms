let customGap1 = [1391376, 463792, 198768, 86961, 33936, 13776, 4592, 1968, 861, 336,112, 48, 21, 7, 3, 1];

let hibbardSeq = [65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1];

let stasevichSeq = [65537, 32769, 16385, 8193, 4097, 2049, 1025, 513, 257, 129, 65, 33, 17, 9, 5, 3, 2, 1];


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

var xValues = generateLimits(1000, 20000);
var newArrays = xValues.map(generateArray2);
var countSteps = 0;

var yValuesShell = [];
var yValuesShellCustom = [];
var yValuesHibbart = [];
var yValuesStasevich = [];

for(var i = 0; i< newArrays.length;i++){
    countSteps = 0;
    arrayCopy = [...newArrays[i]];
    shellSort(arrayCopy);
    yValuesShell.push(countSteps);
}

for(var i = 0; i< newArrays.length;i++){
    countSteps = 0;
    arrayCopy = [...newArrays[i]];
    shellSortWithCustomGaps(arrayCopy, customGap1);
    yValuesShellCustom.push(countSteps);
}

for(var i = 0; i< newArrays.length;i++){
    countSteps = 0;
    arrayCopy = [...newArrays[i]];
    shellSortWithCustomGaps(arrayCopy, hibbardSeq);
    yValuesHibbart.push(countSteps);
}

for(var i = 0; i< newArrays.length;i++){
    countSteps = 0;
    arrayCopy = [...newArrays[i]];
    shellSortWithCustomGaps(arrayCopy, stasevichSeq);
    yValuesStasevich.push(countSteps);
}


function myPow(x){
  return x*x;
}

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: 'Shell sort - Shell sequence',
      data: yValuesShell,
      borderColor: "red",
      fill: false

    },{
      label: "Shell sort - Ciura sequence",
      data: yValuesShellCustom,
      borderColor: "black",
      fill: false
    },{
      label: "Shell sort - Hibbard sequence",
      data:  yValuesHibbart,
      borderColor: "brown",
      fill: false
    },{
      label: "Shell sort - Stasevich sequence",
      data:  yValuesStasevich,
      borderColor: "green",
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

function shellSort(arr) {
	let n = arr.length;

	for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{
		for (let i = gap; i < n; i += 1)  {
			let temp = arr[i];

			let j;
      countSteps += 1;
			for (j = i; j >= gap && arr[j-gap] > temp; j-=gap)  {
        countSteps += 1;
				arr[j] = arr[j-gap];
			}

			arr[j] = temp;
		}
	}
}
function shellSortWithCustomGaps(arr, gaps) {
	let n = arr.length;

	//Start with a really large gap, and then reduce the gap until there isn't any
	//This is to use a custom gap array that you setup beforehand.
	for (let gapIndex = 0; gapIndex < gaps.length; gapIndex++)
	{
		let gap = gaps[gapIndex];
		//Do a insertion sort for each of the section the gap ends up dividing
		for (let i = gap; i < n; i += 1)
		{
			//We store the current varible
			let temp = arr[i];

			//This is the insection sort to sort the section into order
			let j;
      countSteps += 1;
			for (j = i; j >= gap && arr[j-gap] > temp; j-=gap)
			{
        countSteps += 1;
				arr[j] = arr[j-gap];
			}

			arr[j] = temp;
		}
	}
}
